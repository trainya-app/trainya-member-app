import { Button } from '../../../components/Button';
import { Heading } from '../../../components/Heading';
import { NavigationProps } from '../../../types/NavigationProps';
import { Container, TextInput } from './styles';

export const ChangePassword = ({ navigation }: NavigationProps) => (
  <>
    <Heading
      title="Redefinir senha"
      onGoBack={() => navigation.goBack()}
      onPressConfig={() => navigation.navigate('Configurations')}
    />
    <Container>
      <TextInput placeholder="Senha atual..." style={{ marginBottom: 32 }} />
      <TextInput placeholder="Nova senha..." />
      <TextInput placeholder="Confirmar nova senha..." />
      <Button
        fontSize={16}
        title="Redefinir"
        height={52}
        width={100}
        style={{ marginTop: 12 }}
      />
    </Container>
  </>
);
