import { useContext } from 'react';
import { ActivityIndicator } from 'react-native';

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
        <Title>para liberar a sua entrada e/ou saída</Title>
        <QRContainer>
          {user ? (
            <QR value={String(user?.id)} size={RFValue(250)} />
          ) : (
            <ActivityIndicator color="#2176ff" size="large" />
          )}
        </QRContainer>
      </Container>
    </>
  );
};
