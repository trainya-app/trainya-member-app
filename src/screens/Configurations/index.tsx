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

export const Configurations = ({ navigation }: NavigationProps) => {
  const theme = useTheme();

  return (
    <Container>
      <StatusBar backgroundColor={theme.colors.blue[100]} />
      <Heading title="Configurações" onGoBack={() => navigation.goBack()} />
      <OptionsContainer label="Conteúdo">
        <Item title="Editar Perfil" />
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
        <Item title="Privacidade" />
        <Item title="Segurança" />
        <Item title="Notificações" isLastOption />
      </OptionsContainer>
      <LogoutButtonContainer>
        <LogoutButtonText>Sair</LogoutButtonText>
      </LogoutButtonContainer>
    </Container>
  );
};