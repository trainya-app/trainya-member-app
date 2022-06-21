import { useEffect, useState } from 'react';
import { Keyboard } from 'react-native';
import { useTheme } from '../../hooks/useTheme';

import {
  Container,
  Header,
  LoginContent,
  LogoImage,
  Title,
  ForgotPasswordWrapper,
  ForgotPasswordText,
} from './styles';

import { TextInput } from '../../components/TextInput';
import { Button } from '../../components/Button';

export const Login = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  
  const colorMode = useTheme();
  console.log({ colorMode })
  return (
  <Container>
    <Header>
      <LogoImage source={{ uri: 'https://i.imgur.com/GdUz4Lv.png' }} />
    </Header>
    <LoginContent>
      <Title>Login</Title>
      <TextInput placeholder="Login..." onChangeText={(loginInput: string) => setLogin(loginInput)}/>
      <TextInput placeholder="Senha..." onChangeText={(passwordInput: string) => setPassword(passwordInput)}/>
      <Button />
      <ForgotPasswordWrapper>
        <ForgotPasswordText>Esqueceu sua senha?</ForgotPasswordText>
      </ForgotPasswordWrapper>
    </LoginContent>
  </Container>
);
}
