import { useState } from 'react';

import {
  Container,
  Header,
  LoginContent,
  Title,
  ForgotPasswordWrapper,
  ForgotPasswordText,
} from './styles';

import { TextInput } from './components/TextInput';
import { Button } from '../../components/Button';
import { LogoSvg } from '../../components/LogoSvg';

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
        <LogoSvg />
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
        <Button
          onPress={() => handleLogin(loginInput, passwordInput)}
          title="Entrar"
        />
        <ForgotPasswordWrapper>
          <ForgotPasswordText>Esqueceu sua senha?</ForgotPasswordText>
        </ForgotPasswordWrapper>
      </LoginContent>
    </Container>
  );
};
