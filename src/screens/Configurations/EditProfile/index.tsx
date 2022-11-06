import { useContext } from 'react';

import { KeyboardAvoidingView } from 'react-native';
import { useTheme } from 'styled-components';
import { Heading } from '../../../components/Heading';
import { AuthContext } from '../../../contexts/AuthContext';
import { NavigationProps } from '../../../types/NavigationProps';
import {
  Container,
  Scroll,
  ProfileImageContainer,
  ChangePhotoIcon,
  BoxRow,
  BoxColumn,
  TextInput,
} from './styles';

export const EditProfile = ({ navigation }: NavigationProps) => {
  const theme = useTheme();
  const placeholder = `${theme.colors.text.light}`;

  const { user } = useContext(AuthContext);
  return (
    <>
      <Heading
        title="Editar Perfil"
        onGoBack={() => navigation.goBack()}
        onPressConfig={() => navigation.navigate('Configurations')}
      />
      <Container>
        <KeyboardAvoidingView style={{ flex: 1 }}>
          <Scroll>
            <ProfileImageContainer>
              <ChangePhotoIcon />
            </ProfileImageContainer>
            <TextInput
              placeholder="Nome"
              placeholderTextColor={placeholder}
              defaultValue={user.name}
            />
            <TextInput
              placeholder="Número de Telefone"
              placeholderTextColor={placeholder}
              defaultValue={user.phone}
              keyboardType="numeric"
            />
            <TextInput
              placeholder="Data de Nascimento"
              placeholderTextColor={placeholder}
              defaultValue={user.birth_date}
            />

            <TextInput
              placeholder="Altura"
              placeholderTextColor={placeholder}
              defaultValue={user.height}
              keyboardType="numeric"
            />
            <TextInput
              placeholder="Peso"
              placeholderTextColor={placeholder}
              defaultValue={`${user.weight}kg`}
              keyboardType="numeric"
            />
          </Scroll>
        </KeyboardAvoidingView>
      </Container>
    </>
  );
};
