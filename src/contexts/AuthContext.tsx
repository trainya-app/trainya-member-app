import { createContext, ReactNode, useMemo, useState } from 'react';

interface Props {
  children: ReactNode;
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const AuthContext = createContext({} as any);

export const AuthContextProvider = ({ children }: Props) => {
  const [user, setUser] = useState<any>();

  async function login({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) {
    try {
      if (email === 'trainya@app.com' && password === 'trainya') {
        setUser(email);
      } else {
        console.log('Algo deu errado');
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.log('Algo deu errado');
    }
  }

  async function logout() {
    setUser(null);
  }

  const AuthContextProviderValue = useMemo(
    () => ({ user, login, logout }),
    [user, login, logout]
  );

  return (
    <AuthContext.Provider value={AuthContextProviderValue}>
      {children}
    </AuthContext.Provider>
  );
};
