import { Heading } from '../../../components/Heading';
import {
  OptionsContainer,
  OptionsContainerItem as Item,
} from '../../../components/OptionsContainer';
import { NavigationProps } from '../../../types/NavigationProps';
import { ToggleButton } from '../components/ToggleButton';
import { Container, ShareIcon, TermsIcon, PrivacyPolicyIcon } from './styles';

export const Privacy = ({ navigation }: NavigationProps) => (
  <>
    <Heading title="Privacidade" onGoBack={() => navigation.goBack()} />
    <Container>
      <OptionsContainer label="Informações">
        <Item
          icon={<ShareIcon />}
          title="Compartilhar dados"
          actionComponent={<ToggleButton />}
          isLastOption
        />
      </OptionsContainer>
      <OptionsContainer label="Saiba mais">
        <Item icon={<TermsIcon />} title="Termos e condições" />
        <Item
          icon={<PrivacyPolicyIcon />}
          title="Políticas de privacidade"
          isLastOption
        />
      </OptionsContainer>
    </Container>
  </>
);
