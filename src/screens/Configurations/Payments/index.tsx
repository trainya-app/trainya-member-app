import { Container, Scroll } from './styles';
import { Heading } from '../../../components/Heading';
import { NavigationProps } from '../../../types/NavigationProps';
import { PaymentCard } from './components/PaymentCard';

export const Payments = ({ navigation }: NavigationProps) => {
  const PaymentsData = [
    {
      id: 1,
      date: '29 de Agosto de 2022',
      value: 109.9,
      status: 'waiting',
    },
    {
      id: 2,
      date: '29 de Maio de 2022',
      value: 109.9,
      status: 'paid',
    },
  ];

  return (
    <>
      <Heading
        title="Pagamentos"
        onGoBack={() => navigation.goBack()}
        onPressConfig={() => navigation.navigate('Configurations')}
      />
      <Container>
        <Scroll>
          {PaymentsData.map((payment) => (
            <PaymentCard
              key={payment.id}
              date={payment.date}
              paymentValue={payment.value}
              paymentStatus={payment.status}
            />
          ))}
        </Scroll>
      </Container>
    </>
  );
};
