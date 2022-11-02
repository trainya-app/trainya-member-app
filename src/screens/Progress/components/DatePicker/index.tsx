import { Entypo } from 'react-native-vector-icons';

import { Container, DateButton, DateText } from './styles';

export const DatePicker = () => {
  return (
    <Container>
      <DateButton>
        <DateText>Janeiro</DateText>
        <Entypo name="chevron-down" size={24} color="#fff" />
      </DateButton>
    </Container>
  );
};
