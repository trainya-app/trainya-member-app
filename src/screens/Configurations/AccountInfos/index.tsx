import { useContext } from 'react';
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
import { AuthContext } from '../../../contexts/AuthContext';
import { convertHeightNumberToString } from '../../../utils/convertHeightNumberToString';

export const AccountInfos = ({ navigation }: NavigationProps) => {
  const { user } = useContext(AuthContext);
  console.log(user);

  return (
    <>
      <Heading
        title="Informações"
        onGoBack={() => navigation.goBack()}
        onPressConfig={() => navigation.navigate('Configurations')}
      />
      <Container>
        <ProfileHeader
          onPressChangePhoto={() => navigation.navigate('ChangePhoto')}
        />
        <GymLabel>Minha academia:</GymLabel>
        <GymName>Trainya Gym</GymName>

        <Scroll>
          <CardContainer title="E-mail" value={user.email} />
          <CardContainer title="Telefone" value={user.phone} />
          <CardContainer title="Data de nascimento" value="23/07/1977" />
          <BoxDirectionRow>
            <CardContainer
              title="Altura"
              value={convertHeightNumberToString(user.height)}
              half
            />
            <CardContainer title="Peso" value={`${user.weight}kg`} half />
          </BoxDirectionRow>
        </Scroll>
      </Container>
    </>
  );
};
