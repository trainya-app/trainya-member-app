import {
  Container,
  GymLabel,
  GymName,
  BoxDirectionRow,
  Scroll,
} from './styles';

import { Heading } from '../../../components/Heading';
import { ProfileHeader } from '../../../components/ProfileHeader';
import { NavigationProps } from '../../../types/NavigationProps';
import { CardContainer } from './components/CardContainer';

export const AccountInfos = ({ navigation }: NavigationProps) => {
  const a = 'a';

  return (
    <>
      <Heading
        title="Informações"
        onGoBack={() => navigation.goBack()}
        onPressConfig={() => navigation.navigate('Configurations')}
      />
      <Container>
        <ProfileHeader onPressChangePhoto={() => navigation.navigate('ChangePhoto')} />
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
