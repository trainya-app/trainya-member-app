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
}

export const WarningModal = ({
  visible,
  toggleModalActive,
}: WarningModalProps) => (
  <Modal visible={visible}>
    <Background>
      <Container>
        <Top>
          <Title>Avisos!</Title>
          <CloseIcon onPress={() => toggleModalActive()} />
        </Top>
        <Bottom>
          <WarningText>Cuidado para não bater o queixo na barra</WarningText>
          <WarningText>Segure na barra com o pulso reto</WarningText>
        </Bottom>
      </Container>
    </Background>
  </Modal>
);
