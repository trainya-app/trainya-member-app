import { StatusBar } from 'react-native';
import { Container, Loading } from './styles';
import img from '../../../assets/splash.png';

export const Splash = () => (
  <>
    <Container source={img} />
    <StatusBar backgroundColor="#2176FF" translucent />
    <Loading />
  </>
);
