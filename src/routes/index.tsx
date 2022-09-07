import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { AppRoutes } from './app.routes';
import { AuthRoutes } from './auth.routes';

export const Routes = () => {
  const { token } = useContext(AuthContext);

  return token ? <AppRoutes /> : <AuthRoutes />;
};
