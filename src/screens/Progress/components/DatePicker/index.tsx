import { useState, Dispatch, SetStateAction } from 'react';
import Entypo from 'react-native-vector-icons/Entypo';

import {
  Container,
  DateButton,
  DateText,
  Scroll,
  DropDownContainer,
  DropDownDateButton,
} from './styles';

interface IDatePickerProps {
  selectedMonth: number;
  setSelectedMonth: Dispatch<SetStateAction<number>>;
}

export const DatePicker = ({
  selectedMonth,
  setSelectedMonth,
}: IDatePickerProps) => {
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
                <DateText isActive={month === months[selectedMonth]}>
                  {month}
                </DateText>
              </DropDownDateButton>
            ))}
          </Scroll>
        </DropDownContainer>
      )}
    </Container>
  );
};
