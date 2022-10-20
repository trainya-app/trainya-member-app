import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { Splash } from '../screens/Splash';
import { AppRoutes } from './app.routes';
import { AuthRoutes } from './auth.routes';

export const Routes = () => {
  const { token } = useContext(AuthContext);

  if (token === 'default') {
    return <Splash />;
  }

  return token === 'no session' ? <AuthRoutes /> : <AppRoutes />;
};
