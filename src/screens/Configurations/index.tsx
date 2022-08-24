import { StatusBar } from 'expo-status-bar';
import { useTheme } from 'styled-components/native';

import { Container, LogoutButtonContainer, LogoutButtonText } from './styles';

import { Heading } from '../../components/Heading';
import {
  OptionsContainer,
  OptionsContainerItem as Item,
} from '../../components/OptionsContainer';
import { NavigationProps } from '../../types/NavigationProps';
import { ToggleThemeButton } from './components/ToggleThemeButton';

export const Configurations = ({ navigation }: NavigationProps) => {
  const theme = useTheme();

  return (
    <>
      <StatusBar backgroundColor="#FFF" />
      <Heading
        title="Configurações"
        onGoBack={() => navigation.goBack()}
        onPressConfig={() => navigation.navigate('Configurations')}
      />
      <Container>
        <OptionsContainer label="Conteúdo">
          <Item
            title="Editar Perfil"
            onPress={() => navigation.navigate('EditProfile')}
          />
          <Item
            title="Minha Conta"
            onPress={() => navigation.navigate('MyAccount')}
          />
          <Item
            title="Favoritos"
            isLastOption
            onPress={() => navigation.navigate('Favorites')}
          />
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
          />
          <Item
            title="Notificações"
            onPress={() => navigation.navigate('NotificationsConfig')}
            isLastOption
          />
        </OptionsContainer>
        <LogoutButtonContainer>
          <LogoutButtonText>Sair</LogoutButtonText>
        </LogoutButtonContainer>
      </Container>
    </>
  );
};
