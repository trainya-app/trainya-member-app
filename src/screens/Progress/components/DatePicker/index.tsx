import { useState } from 'react';
import Entypo from 'react-native-vector-icons/Entypo';

import {
  Container,
  DateButton,
  DateText,
  Scroll,
  DropDownContainer,
  DropDownDateButton,
} from './styles';

export const DatePicker = () => {
  const months = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ];

  const [selectedMonth, setSelectedMonth] = useState(0);
  const [isActive, setIsActive] = useState(false);
  return (
    <Container>
      <DateButton
        isActive={isActive}
        onPress={() => setIsActive((prev) => !prev)}
      >
        <DateText>{months[selectedMonth]}</DateText>
        <Entypo name="chevron-down" size={24} color="#fff" />
      </DateButton>

      {isActive && (
        <DropDownContainer>
          <Scroll>
            {months.map((month, index) => (
              <DropDownDateButton
                key={month}
                onPress={() => {
                  setSelectedMonth(index);
                  setIsActive(false);
                }}
              >
                <DateText>{month}</DateText>
              </DropDownDateButton>
            ))}
          </Scroll>
        </DropDownContainer>
      )}
    </Container>
  );
};
