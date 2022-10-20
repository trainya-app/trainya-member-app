import { useContext, useState } from 'react';
import { useTheme } from 'styled-components';
import { Button } from '../../../components/Button';
import { Heading } from '../../../components/Heading';
import { AuthContext } from '../../../contexts/AuthContext';
import { NavigationProps } from '../../../types/NavigationProps';
import { Container, TextInput } from './styles';

export const ChangePassword = ({ navigation }: NavigationProps) => {
  const { updatePassword } = useContext(AuthContext);
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

  async function handleUpdatePassword() {
    await updatePassword(password, newPassword, confirmNewPassword);
  }

  const theme = useTheme();
  const placeholder = `${theme.colors.text.light}`;
  return (
    <>
      <Heading
        title="Redefinir senha"
        onGoBack={() => navigation.goBack()}
        onPressConfig={() => navigation.navigate('Configurations')}
      />
      <Container>
        <TextInput
          placeholder="Senha atual..."
          placeholderTextColor={placeholder}
          style={{ marginBottom: 32 }}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
        />
        <TextInput
          placeholder="Nova senha..."
          placeholderTextColor={placeholder}
          onChangeText={(text) => setNewPassword(text)}
          secureTextEntry
        />
        <TextInput
          placeholder="Confirmar nova senha..."
          placeholderTextColor={placeholder}
          onChangeText={(text) => setConfirmNewPassword(text)}
          secureTextEntry
        />
        <Button
          fontSize={16}
          title="Redefinir"
          height={52}
          width={100}
          style={{ marginTop: 12 }}
          onPress={() => handleUpdatePassword()}
        />
      </Container>
    </>
  );
};
