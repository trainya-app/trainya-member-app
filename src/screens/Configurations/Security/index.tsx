import { Heading } from '../../../components/Heading';
import { NavigationProps } from '../../../types/NavigationProps';
import { Container, PasswordIcon } from './styles';

import {
  OptionsContainer,
  OptionsContainerItem as Item,
} from '../../../components/OptionsContainer';

export const Security = ({ navigation }: NavigationProps) => (
  <>
    <Heading
      title="Segurança"
      onGoBack={() => navigation.goBack()}
      onPressConfig={() => navigation.navigate('Configurations')}
    />
    <Container>
      <OptionsContainer label="Segurança e acesso à conta">
        <Item
          icon={<PasswordIcon />}
          title="Senha"
          onPress={() => navigation.navigate('ChangePassword')}
          isLastOption
        />
        {/* <Item
          icon={<TwoFactorsIcon />}
          title="Login em duas etapas"
          actionComponent={<ToggleButton />}
          isLastOption
        /> */}
      </OptionsContainer>
    </Container>
  </>
);
