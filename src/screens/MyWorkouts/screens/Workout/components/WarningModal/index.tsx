import {
  Modal,
  Background,
  Container,
  Title,
  Top,
  CloseIcon,
  Bottom,
  WarningText,
} from './styles';

interface WarningModalProps {
  visible: boolean;
  toggleModalActive: () => void;
  warning: string;
}

export const WarningModal = ({
  visible,
  toggleModalActive,
  warning,
}: WarningModalProps) => (
  <Modal visible={visible} animationType="slide">
    <Background>
      <Container>
        <Top>
          <Title>Avisos!</Title>
          <CloseIcon onPress={() => toggleModalActive()} />
        </Top>
        <Bottom>
          <WarningText>{warning}</WarningText>
        </Bottom>
      </Container>
    </Background>
  </Modal>
);
