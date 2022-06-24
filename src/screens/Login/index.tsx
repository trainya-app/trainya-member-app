import { useState } from 'react';

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
  const [loginInput, setLoginInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');

  function handleLogin(login: string, password: string) {
    // eslint-disable-next-line no-console
    console.log({ login, password });
  }
  return (
    <Container>
      <Header>
        <LogoImage source={{ uri: 'https://i.imgur.com/GdUz4Lv.png' }} />
      </Header>
      <LoginContent>
        <Title>Login</Title>
        <TextInput
          placeholder="Login..."
          onChangeText={(loginValue) => setLoginInput(loginValue)}
        />
        <TextInput
          placeholder="Senha..."
          onChangeText={(passwordValue) => setPasswordInput(passwordValue)}
          hideText
        />
        <Button onPress={() => handleLogin(loginInput, passwordInput)} />
        <ForgotPasswordWrapper>
          <ForgotPasswordText>Esqueceu sua senha?</ForgotPasswordText>
        </ForgotPasswordWrapper>
      </LoginContent>
    </Container>
  );
};
