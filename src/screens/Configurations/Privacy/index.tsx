import { Heading } from '../../../components/Heading';
import {
  OptionsContainer,
  OptionsContainerItem as Item,
} from '../../../components/OptionsContainer';
import { NavigationProps } from '../../../types/NavigationProps';
import { ToggleButton } from '../components/ToggleButton';
import { Container } from './styles';

export const Privacy = ({ navigation }: NavigationProps) => (
  <>
    <Heading title="Privacidade" onGoBack={() => navigation.goBack()} />
    <Container>
      <OptionsContainer label="Informações">
        <Item
          title="Compartilhar dados"
          isLastOption
          actionComponent={<ToggleButton />}
        />
      </OptionsContainer>
      <OptionsContainer label="Saiba mais">
        <Item title="Termos e condições" />
        <Item title="Políticas de privacidade" isLastOption />
      </OptionsContainer>
    </Container>
  </>
);
