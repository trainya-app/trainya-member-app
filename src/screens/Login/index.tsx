import { useContext, useState } from 'react';
import { useToast } from 'native-base';

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

  const toast = useToast();

  function showToast(text: string, status: 'success' | 'error') {
    toast.show({
      title: text,
      bgColor: status === 'success' ? 'green.500' : 'red.500',
      duration: 2500,
      placement: 'bottom',
      style: {
        marginBottom: status === 'success' ? 90 : 0,
      },
    });
  }

  async function handleLogin(email: string, password: string) {
    const isLoggedIn = await login({ email, password });
    showToast(isLoggedIn.message, isLoggedIn.auth ? 'success' : 'error');
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
        {/* <ForgotPasswordWrapper>
          <ForgotPasswordText>Esqueceu sua senha?</ForgotPasswordText>
        </ForgotPasswordWrapper> */}
      </LoginContent>
    </Container>
  );
};
