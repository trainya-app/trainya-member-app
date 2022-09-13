import { useContext } from 'react';
import { Heading } from '../../components/Heading';
import { AuthContext } from '../../contexts/AuthContext';
import { NavigationProps } from '../../types/NavigationProps';
import { Container, Title, QRContainer, QR } from './styles';

export const QRCamera = ({ navigation }: NavigationProps) => {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <>
      <Heading
        title="Seu QRCode"
        onGoBack={() => navigation.goBack()}
        onPressConfig={() => navigation.navigate('Configurations')}
      />
      <Container>
        <Title>Apresente esse código na academia</Title>
        <Title>para liberar a sua entrada</Title>
        <QRContainer>
          <QR value={String(user.email)} size={300} />
        </QRContainer>
      </Container>
    </>
  );
};
