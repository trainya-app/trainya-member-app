import { StatusBar } from 'react-native';
import { useTheme } from 'styled-components/native';

import { Container, LogoutButtonContainer, LogoutButtonText } from './styles';

import { Heading } from '../../components/Heading';
import {
  OptionsContainer,
  OptionsContainerItem as Item,
} from '../../components/OptionsContainer';
import { NavigationProps } from '../../types/NavigationProps';
import { ToggleThemeButton } from './components/ToggleThemeButton';
import { ToggleButton } from './components/ToggleButton';

export const Configurations = ({ navigation }: NavigationProps) => {
  const theme = useTheme();

  return (
    <>
      <Heading title="Configurações" onGoBack={() => navigation.goBack()} />
      <Container>
        <StatusBar backgroundColor={theme.colors.blue[100]} />

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
          <Item title="Segurança" />
          <Item title="Notificações" isLastOption />
        </OptionsContainer>
        <LogoutButtonContainer>
          <LogoutButtonText>Sair</LogoutButtonText>
        </LogoutButtonContainer>
      </Container>
    </>
  );
};
