import { createContext, ReactNode, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ToastAndroid } from 'react-native';

import jwt_decode from 'jwt-decode';
import { api } from '../services/api';
import MembersService from '../services/MembersService';

interface IUser {
  id: number;
  adress_number: string;
  at_gym: boolean;
  avatar_url: string;
  birth_date: string;
  city: string;
  email: string;
  gym: {
    name: string;
  };
  gym_id: string;
  height: number;
  weight: number;
  name: string;
  phone: string;
  state: string;
  street: string;
  created_at: Date;
  updated_at: Date;
}

interface Props {
  children: ReactNode;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const AuthContext = createContext({} as any);

export const AuthContextProvider = ({ children }: Props) => {
  const [token, setToken] = useState('default');
  const [user, setUser] = useState<IUser>();

  useEffect(() => {
    (async () => {
      const storagedToken = await AsyncStorage.getItem('@trainyaapp:token');
      if (storagedToken) {
        setToken(JSON.parse(storagedToken));
      } else {
        setToken('no session');
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        api.defaults.headers.Authorization = `Bearer ${token}`;
        const userDecoded: { id: string } = await jwt_decode(token);
        const { data } = await api.get(`members/${userDecoded.id}`);
        const { gym } = await MembersService.getGymByMemberId();

        const userGym = { gym: gym.gym.name, gymId: gym.gym_id };
        setUser({ ...data.member, ...userGym });

        // eslint-disable-next-line no-empty, @typescript-eslint/no-explicit-any
      } catch (error: any) {}
    })();
  }, [token]);

  function showToast(text: string) {
    ToastAndroid.showWithGravity(text, ToastAndroid.SHORT, ToastAndroid.TOP);
  }

  async function login({
    email,
    password,
  }: {
    email: string | undefined;
    password: string;
  }) {
    try {
      const { data } = await api.post('auth/members', { email, password });

      setToken(data.token);

      await AsyncStorage.setItem(
        '@trainyaapp:token',
        JSON.stringify(data.token)
      );

      api.defaults.headers.Authorization = `Bearer ${data.token}`;

      showToast('Login realizado com sucesso!');
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      showToast(error.response.data.message);
    }
  }

  async function logout() {
    await AsyncStorage.clear().then(() => {
      setToken('no session');
      setUser();
    });
  }

  async function updatePassword(
    password: string,
    firstNewPassword: string,
    secondNewPassword: string
  ) {
    try {
      await api.post('auth/members', {
        email: user?.email,
        password,
      });

      const { data } = await api.put(`members/password/${user?.id}`, {
        firstNewPassword,
        secondNewPassword,
      });
      showToast(data.message);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      showToast(error.response.data.message);
    }
  }

  return (
    <AuthContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        token,
        user,
        setUser,
        login,
        logout,
        updatePassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
