import {
  Container,
  Header,
  ProfileImageContainer,
  ProfilePhoto,
  ChangePhotoIconContainer,
  ChangePhotoIcon,
  ProfileInfoContainer,
  Username,
  GymLabel,
  GymName,
  BoxDirectionRow,
  Scroll,
} from './styles';

import { Heading } from '../../../components/Heading';
import { NavigationProps } from '../../../types/NavigationProps';
import { Button } from '../../../components/Button';
import { CardContainer } from './components/CardContainer';

export const MyAccount = ({ navigation }: NavigationProps) => {
  const a = 'a';

  return (
    <>
      <Heading title="Informações" onGoBack={() => navigation.goBack()} />
      <Container>
        <Header>
          <ProfileImageContainer>
            <ProfilePhoto source={{ uri: 'https://i.imgur.com/nRsfy96.png' }} />
            <ChangePhotoIconContainer>
              <ChangePhotoIcon />
            </ChangePhotoIconContainer>
          </ProfileImageContainer>
          <ProfileInfoContainer>
            <Username>Mariana Santos</Username>
            <Button
              title="Editar informações"
              width={70}
              height={36}
              style={{ marginTop: 12 }}
              fontSize={11}
            />
          </ProfileInfoContainer>
        </Header>
        <GymLabel>Minha academia:</GymLabel>
        <GymName>Trainya Gym</GymName>

        <Scroll>
          <CardContainer title="E-mail" value="marianasantos@gmail.com" />
          <CardContainer title="Telefone" value="(11) 98225-3516" />
          <CardContainer title="Data de nascimento" value="23/07/1977" />
          <BoxDirectionRow>
            <CardContainer title="Altura" value="23/07/1977" half />
            <CardContainer title="Peso" value="23/07/1977" half />
          </BoxDirectionRow>
        </Scroll>
      </Container>
    </>
  );
};
