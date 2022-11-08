import { useContext, useState } from 'react';
import { useTheme } from 'styled-components';
import { useToast } from 'native-base';

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

  const toast = useToast();

  function showToast(text: string, status: 'success' | 'error') {
    toast.show({
      title: text,
      bgColor: status === 'success' ? 'green.500' : 'red.500',
      duration: 2500,
      placement: 'bottom',
      style: {
        marginBottom: 90,
      },
    });
  }

  async function handleUpdatePassword() {
    const passwordChanged = await updatePassword(
      password,
      newPassword,
      confirmNewPassword
    );
    console.log(passwordChanged);

    if (passwordChanged.sucess) {
      showToast(passwordChanged.message, 'success');
      navigation.goBack();
    }

    showToast(passwordChanged.message, 'error');
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
