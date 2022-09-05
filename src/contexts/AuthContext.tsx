import { createContext, ReactNode, useEffect, useMemo, useState } from 'react';
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

  useEffect(() => {
    (async () => {
      const storagedToken = await AsyncStorage.getItem('@trainyaapp:token');
      if (storagedToken) {
        setToken(storagedToken);
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
      await AsyncStorage.setItem('@trainyaapp:token', data.token);
      showToast('Login realizado com sucesso!');
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      showToast(error.response.data.message);
    }
  }

  async function logout() {
    setToken(null);
  }

  const AuthContextProviderValue = useMemo(
    () => ({ token, login, logout }),
    [token, login, logout]
  );

  return (
    <AuthContext.Provider value={AuthContextProviderValue}>
      {children}
    </AuthContext.Provider>
  );
};
