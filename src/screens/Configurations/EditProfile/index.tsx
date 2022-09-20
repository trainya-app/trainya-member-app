import { useTheme } from 'styled-components';
import { Heading } from '../../../components/Heading';
import { NavigationProps } from '../../../types/NavigationProps';
import {
  Container,
  ProfileImageContainer,
  ChangePhotoIcon,
  BoxRow,
  BoxColumn,
  TextInput,
} from './styles';

export const EditProfile = ({ navigation }: NavigationProps) => {
  const theme = useTheme();
  const placeholder = `${theme.colors.text.light}`;
  return (
      <>
        <Heading
          title="Editar Perfil"
          onGoBack={() => navigation.goBack()}
          onPressConfig={() => navigation.navigate('Configurations')}
        />
        <Container>
          <BoxRow>
            <ProfileImageContainer>
              <ChangePhotoIcon />
            </ProfileImageContainer>
            <BoxColumn>
              <TextInput placeholder="Nome" placeholderTextColor={placeholder}/>
              <TextInput placeholder="Sobrenome" placeholderTextColor={placeholder}/>
            </BoxColumn>
          </BoxRow>
          <TextInput placeholder="E-mail" placeholderTextColor={placeholder}/>
          <TextInput placeholder="Número de Telefone" placeholderTextColor={placeholder}/>
          <TextInput placeholder="Data de Nascimento" placeholderTextColor={placeholder}/>
          <TextInput placeholder="Gênero" placeholderTextColor={placeholder}/>
          <TextInput placeholder="Altura" placeholderTextColor={placeholder}/>
          <TextInput placeholder="Peso" placeholderTextColor={placeholder}/>
        </Container>
     </>
);
}
