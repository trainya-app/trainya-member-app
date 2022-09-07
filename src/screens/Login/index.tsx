import { useContext, useState } from 'react';

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
import { AuthContext } from '../../contexts/AuthContext';

export const Login = () => {
  const [loginInput, setLoginInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');

  const { login } = useContext(AuthContext);

  function handleLogin(email: string, password: string) {
    login({ email, password });
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
          height={56}
          width={100}
          fontSize={14}
        />
        <ForgotPasswordWrapper>
          <ForgotPasswordText>Esqueceu sua senha?</ForgotPasswordText>
        </ForgotPasswordWrapper>
      </LoginContent>
    </Container>
  );
};
