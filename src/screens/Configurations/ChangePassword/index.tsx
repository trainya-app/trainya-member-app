import { useTheme } from 'styled-components';
import { Button } from '../../../components/Button';
import { Heading } from '../../../components/Heading';
import { NavigationProps } from '../../../types/NavigationProps';
import { Container, TextInput } from './styles';

export const ChangePassword = ({ navigation }: NavigationProps) => {
  const theme = useTheme();
  const placeholder = `${theme.colors.text.light}`
  return (
    <>
      <Heading
        title="Redefinir senha"
        onGoBack={() => navigation.goBack()}
        onPressConfig={() => navigation.navigate('Configurations')}
      />
      <Container>
        <TextInput placeholder="Senha atual..." placeholderTextColor={placeholder} style={{ marginBottom: 32 }} />
        <TextInput placeholder="Nova senha..." placeholderTextColor={placeholder}/>
        <TextInput placeholder="Confirmar nova senha..." placeholderTextColor={placeholder}/>
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
}
