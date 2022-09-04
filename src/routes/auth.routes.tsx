import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login } from '../screens/Login';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Stack: any = createNativeStackNavigator();

export const AuthRoutes = () => <Login />;
