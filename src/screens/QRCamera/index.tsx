import { useContext } from 'react';

import { RFValue } from 'react-native-responsive-fontsize';

import { Heading } from '../../components/Heading';
import { AuthContext } from '../../contexts/AuthContext';
import { NavigationProps } from '../../types/NavigationProps';
import { Container, Title, QRContainer, QR } from './styles';

export const QRCamera = ({ navigation }: NavigationProps) => {
  const { user } = useContext(AuthContext);

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
          <QR value={String(user.id)} size={RFValue(250)} />
        </QRContainer>
      </Container>
    </>
  );
};
