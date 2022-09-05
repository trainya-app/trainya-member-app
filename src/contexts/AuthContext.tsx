import { createContext, ReactNode, useEffect, useState } from 'react';
import jwt_decode from 'jwt-decode';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ToastAndroid } from 'react-native';

import { api } from '../services/api';

interface Props {
  children: ReactNode;
}

interface UserProps {
  name: string;
  email: string;
  height: number;
  weight: number;
  phone: string;
  state: string;
  street: string;
  city: string;
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const AuthContext = createContext({} as any);

export const AuthContextProvider = ({ children }: Props) => {
  const [token, setToken] = useState<string | null>();
  const [userDecoded, setUserDecoded] = useState<UserProps>({
    name: '',
    email: '',
    height: 0,
    weight: 0,
    phone: '',
    state: '',
    street: '',
    city: '',
  });

  useEffect(() => {
    (async () => {
      const storagedToken = await AsyncStorage.getItem('@trainyaapp:token');
      if (storagedToken) {
        setToken(JSON.parse(storagedToken));
        api.defaults.headers.Authorization = `Bearer ${JSON.parse(
          storagedToken
        )}}`;
      }
    })();
  }, []);

  function showToast(text: string) {
    ToastAndroid.showWithGravity(text, ToastAndroid.SHORT, ToastAndroid.TOP);
  }
  async function login({
    email,
    password,
  }: {
    email: string;
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

      setUserDecoded(jwt_decode(data.token));

      showToast('Login realizado com sucesso!');
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      showToast(error.response.data.message);
    }
  }

  async function logout() {
    await AsyncStorage.clear().then(() => {
      setToken(null);
    });
  }

  return (
    <AuthContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        token,
        user: {
          name: userDecoded.name,
        },
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
