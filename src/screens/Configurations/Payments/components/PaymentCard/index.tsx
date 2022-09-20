import { Button } from '../../../../../components/Button';
import {
  Container,
  Header,
  Date,
  Label,
  PaymentValue,
  PaymentStatus,
  BoxRow,
  Wrapper,
} from './styles';

interface PaymentCardProps {
  date: string;
  paymentValue: number;
  paymentStatus: 'paid' | 'pending';
}

export const PaymentCard = ({
  date,
  paymentValue,
  paymentStatus,
}: PaymentCardProps) => (
  <Container>
    <Header>
      <Date>{date}</Date>
    </Header>
    <Wrapper>
      <Label>Total:</Label>
      <PaymentValue paymentStatus={paymentStatus}>{`R$${paymentValue
        .toFixed(2)
        .replace('.', ',')}`}</PaymentValue>
    </Wrapper>

    <BoxRow>
      <Wrapper>
        <Label>Situação</Label>
        <PaymentStatus paymentStatus={paymentStatus}>
          {paymentStatus === 'paid' ? 'Pago' : 'Pendente'}
        </PaymentStatus>
      </Wrapper>
      <Button
        fontSize={12}
        title="Comprovante"
        height={36}
        width={36}
        style={{ marginRight: 24, borderRadius: 12 }}
      />
    </BoxRow>
  </Container>
);
