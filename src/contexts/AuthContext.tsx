import { createContext, ReactNode, useEffect, useState } from 'react';
import jwt_decode from 'jwt-decode';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ToastAndroid } from 'react-native';

import { api } from '../services/api';

interface Props {
  children: ReactNode;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const AuthContext = createContext({} as any);

export const AuthContextProvider = ({ children }: Props) => {
  const [token, setToken] = useState<string | null>();
  const [user, setUser] = useState({});

  useEffect(() => {
    (async () => {
      const storagedToken = await AsyncStorage.getItem('@trainyaapp:token');
      if (storagedToken) {
        setToken(JSON.parse(storagedToken));
        api.defaults.headers.Authorization = `Bearer ${storagedToken}`;
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
        user,
        setUser,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
