import { createContext, ReactNode, useMemo, useState } from 'react';
import { api } from '../services/api';

interface Props {
  children: ReactNode;
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const AuthContext = createContext({} as any);

export const AuthContextProvider = ({ children }: Props) => {
  const [token, setToken] = useState(null);

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

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.log(error.response.data.message);
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
