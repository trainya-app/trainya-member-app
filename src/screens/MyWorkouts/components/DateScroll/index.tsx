import { useState } from 'react';
import { Container, Scroll, DateWrapper, Day, DayNumber } from './styles';

export const DateScroll = () => {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth() + 1;

  const dayNumber = 5;

  const daysInMonth: number = new Date(currentYear, currentMonth, 0).getDate();

  interface Props {
    weekDay: string;
    day: number;
  }

  const data: Props[] = [];

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i <= daysInMonth; i++) {
    const weekDayNumber = new Date(currentYear, currentMonth - 1, i).getDay();

    let day = '';

    switch (weekDayNumber) {
      case 0:
        day = 'dom';
        break;

      case 1:
        day = 'seg';
        break;

      case 2:
        day = 'ter';
        break;

      case 3:
        day = 'qua';
        break;

      case 4:
        day = 'qui';
        break;

      case 5:
        day = 'sex';
        break;

      default:
        day = 'sab';
        break;
    }

    data.push({
      weekDay: day,
      day: i,
    });
  }

  return (
    <Container>
      <Scroll contentOffset={{ x: dayNumber * 60 - 180, y: 0 }}>
        {data.map(
          (date: Props) =>
            date.day !== 0 && (
              <DateWrapper
                key={date.day}
                isActive={date.day === dayNumber && true}
              >
                <Day isActive={date.day === dayNumber && true}>
                  {date.weekDay}
                </Day>
                <DayNumber isActive={date.day === dayNumber && true}>
                  {date.day}
                </DayNumber>
              </DateWrapper>
            )
        )}
      </Scroll>
    </Container>
  );
};
