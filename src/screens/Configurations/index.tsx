import { StatusBar } from 'react-native';
import { useTheme } from 'styled-components/native';

import { Container, LogoutButtonContainer, LogoutButtonText } from './styles';

import { Heading } from '../../components/Heading';
import {
  OptionsContainer,
  OptionsContainerItem as Item,
} from '../../components/OptionsContainer';

export const Configurations = () => {
  const theme = useTheme();

  return (
    <Container>
      <StatusBar backgroundColor={theme.colors.blue[100]} />
      <Heading title="Configurações" />
      <OptionsContainer label="Conteúdo">
        <Item title="Editar Perfil" />
        <Item title="Minha Conta" />
        <Item title="Favoritos" lastOption />
      </OptionsContainer>
      <OptionsContainer label="Preferências">
        <Item title="Tema" />
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
