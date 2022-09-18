import { useContext } from 'react';
import { View } from 'react-native';
import { useTheme } from 'styled-components';
import { AuthContext } from '../contexts/AuthContext';
import { Loading } from '../screens/Home/styles';
import { AppRoutes } from './app.routes';
import { AuthRoutes } from './auth.routes';


export const Routes = () => {
  const { token } = useContext(AuthContext);
  const theme = useTheme();

  if(!token) {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#2176FF'}}>
        <Loading size={48} color={theme.colors.blue[100]} />
      </View>
    );
  }

  return token ? <AppRoutes /> : <AuthRoutes />;
};
