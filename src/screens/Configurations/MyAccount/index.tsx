import { NavigationProps } from '../../../types/NavigationProps';
import { Container, UserIcon, PaymentsIcon } from './styles';

import { Heading } from '../../../components/Heading';
import {
  OptionsContainer,
  OptionsContainerItem as Item,
} from '../../../components/OptionsContainer';

export const MyAccount = ({ navigation }: NavigationProps) => (
  <>
    <Heading title="Minha Conta" onGoBack={() => navigation.goBack()} />
    <Container>
      <OptionsContainer label="Conteúdo">
        <Item
          icon={<UserIcon />}
          title="Informações pessoais"
          onPress={() => navigation.navigate('AccountInfos')}
        />
        <Item
          icon={<PaymentsIcon />}
          title="Pagamentos"
          onPress={() => navigation.navigate('Payments')}
          isLastOption
        />
      </OptionsContainer>
    </Container>
  </>
);
