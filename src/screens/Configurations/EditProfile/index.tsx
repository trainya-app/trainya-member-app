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

export const EditProfile = ({ navigation }: NavigationProps) => (
  <>
    <Heading title="Editar Perfil" onGoBack={() => navigation.goBack()} />
    <Container>
      <BoxRow>
        <ProfileImageContainer>
          <ChangePhotoIcon />
        </ProfileImageContainer>
        <BoxColumn>
          <TextInput placeholder="Nome" />
          <TextInput placeholder="Sobrenome" />
        </BoxColumn>
      </BoxRow>
      <TextInput placeholder="E-mail" />
      <TextInput placeholder="Número de Telefone" />
      <TextInput placeholder="Data de Nascimento" />
      <TextInput placeholder="Gênero" />
      <TextInput placeholder="Altura" />
      <TextInput placeholder="Peso" />
    </Container>
  </>
);
