import { useContext } from 'react';
import {
  Container,
  LogoutButtonContainer,
  LogoutButtonText,
  Scroll,
} from './styles';

import { Heading } from '../../components/Heading';
import {
  OptionsContainer,
  OptionsContainerItem as Item,
} from '../../components/OptionsContainer';
import { NavigationProps } from '../../types/NavigationProps';
import { ToggleThemeButton } from './components/ToggleThemeButton';
import { AuthContext } from '../../contexts/AuthContext';
import { WorkoutContext } from '../../contexts/WorkoutContext';

export const Configurations = ({ navigation }: NavigationProps) => {
  const { logout } = useContext(AuthContext);
  const { setWorkoutsFinished } = useContext(WorkoutContext);

  function handleLogout() {
    setWorkoutsFinished([]);
    logout();
  }

  return (
    <>
      <Heading
        title="Configurações"
        onGoBack={() => navigation.goBack()}
        onPressConfig={() => navigation.navigate('Configurations')}
      />
      <Container>
        <Scroll>
          <OptionsContainer label="Conteúdo">
            <Item
              title="Editar Perfil"
              onPress={() => navigation.navigate('EditProfile')}
            />
            <Item
              title="Minha Conta"
              onPress={() => navigation.navigate('MyAccount')}
              isLastOption
            />
            {/* <Item
              title="Favoritos"
              isLastOption
              onPress={() => navigation.navigate('Favorites')}
            /> */}
          </OptionsContainer>
          <OptionsContainer label="Preferências">
            <Item title="Tema" actionComponent={<ToggleThemeButton />} />
            <Item
              title="Privacidade"
              onPress={() => navigation.navigate('Privacy')}
            />
            <Item
              title="Segurança"
              onPress={() => navigation.navigate('Security')}
              isLastOption
            />
            {/* <Item
              title="Notificações"
              onPress={() => navigation.navigate('NotificationsConfig')}
              isLastOption
            /> */}
          </OptionsContainer>
          <LogoutButtonContainer onPress={handleLogout}>
            <LogoutButtonText>Sair</LogoutButtonText>
          </LogoutButtonContainer>
        </Scroll>
      </Container>
    </>
  );
};
