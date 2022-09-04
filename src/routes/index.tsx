import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { AppRoutes } from './app.routes';
import { AuthRoutes } from './auth.routes';

export const Routes = () => {
  const { user, login } = useContext(AuthContext);

  return user ? <AppRoutes /> : <AuthRoutes />;
};
