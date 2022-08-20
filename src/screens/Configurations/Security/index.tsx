import { Heading } from '../../../components/Heading';
import { NavigationProps } from '../../../types/NavigationProps';
import {
  Container,
  PasswordIcon,
  CellPhoneIcon,
  TwoFactorsIcon,
} from './styles';

import {
  OptionsContainer,
  OptionsContainerItem as Item,
} from '../../../components/OptionsContainer';
import { ToggleButton } from '../components/ToggleButton';

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
        />
        <Item
          icon={<CellPhoneIcon />}
          title="Dispositivos conectados"
          onPress={() => navigation.navigate('ConnectedDevices')}
        />
        <Item
          icon={<TwoFactorsIcon />}
          title="Login em duas etapas"
          actionComponent={<ToggleButton />}
          isLastOption
        />
      </OptionsContainer>
    </Container>
  </>
);
