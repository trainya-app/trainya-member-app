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

export const Login = () => (
  <Container>
    <Header>
      <LogoImage source={{ uri: 'https://i.imgur.com/GdUz4Lv.png' }} />
    </Header>
    <LoginContent>
      <Title>Login</Title>
      <TextInput placeholder="Login..." />
      <TextInput placeholder="Senha..." />
      <Button />
      <ForgotPasswordWrapper>
        <ForgotPasswordText>Esqueceu sua senha?</ForgotPasswordText>
      </ForgotPasswordWrapper>
    </LoginContent>
  </Container>
);
