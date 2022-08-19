import { NavigationProps } from '../../../types/NavigationProps';
import {
  OptionsContainer,
  OptionsContainerItem as Item,
} from '../../../components/OptionsContainer';

import { Heading } from '../../../components/Heading';
import { Container } from './styles';
import { ToggleButton } from '../components/ToggleButton';

export const NotificationsConfig = ({ navigation }: NavigationProps) => (
  <>
    <Heading title="Notificações" onGoBack={() => navigation.goBack()} />
    <Container>
      <OptionsContainer label="Notificações do sistema">
        <Item title="Novidades do app" actionComponent={<ToggleButton />} />
        <Item title="Ofertas" actionComponent={<ToggleButton />} isLastOption />
      </OptionsContainer>
      <OptionsContainer label="Notificações de treinos">
        <Item title="Relatórios semanais" actionComponent={<ToggleButton />} />
        <Item title="Lembretes de treinos" actionComponent={<ToggleButton />} />
        <Item
          title="Progressos"
          actionComponent={<ToggleButton />}
          isLastOption
        />
      </OptionsContainer>
    </Container>
  </>
);
