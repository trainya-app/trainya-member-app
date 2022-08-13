import { StatusBar } from 'react-native';
import { useTheme } from 'styled-components/native';

import { Container, LogoutButtonContainer, LogoutButtonText } from './styles';

import { Heading } from '../../components/Heading';
import {
  OptionsContainer,
  OptionsContainerItem as Item,
} from '../../components/OptionsContainer';
import { NavigationProps } from '../../types/NavigationProps';
import { ToggleThemeButton } from './ToggleThemeButton';

export const Configurations = ({ navigation }: NavigationProps) => {
  const theme = useTheme();

  return (
    <Container>
      <StatusBar backgroundColor={theme.colors.blue[100]} />
      <Heading title="Configurações" onGoBack={() => navigation.goBack()} />
      <OptionsContainer label="Conteúdo">
        <Item title="Editar Perfil" />
        <Item title="Minha Conta" />
        <Item title="Favoritos" lastOption />
      </OptionsContainer>
      <OptionsContainer label="Preferências">
        <Item title="Tema" actionComponent={<ToggleThemeButton />} />
        <Item title="Privacidade" />
        <Item title="Segurança" />
        <Item title="Notificações" lastOption />
      </OptionsContainer>
      <LogoutButtonContainer>
        <LogoutButtonText>Sair</LogoutButtonText>
      </LogoutButtonContainer>
    </Container>
  );
};
