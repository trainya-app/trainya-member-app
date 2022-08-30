import { Container, Scroll, DateWrapper, Day, DayNumber } from './styles';

  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth() + 1;

  const dayNumber = new Date().getDay();
  

  const daysInMonth: Number = new Date(currentYear, currentMonth, 0).getDate();

  interface Props {
    weekDay: string;
    day: Number;
  }

  const data:Props[] = [];

  for(let i = 0; i <= daysInMonth; i++) {
    const weekDayNumber = new Date(currentYear, currentMonth - 1, i).getDay();

  let day = '';

  switch(weekDayNumber) {
    case 0:
      day = 'dom';
      break;
    
    case 1:
      day= 'seg';
      break; 
    
    case 2:
      day= 'ter';
      break; 

      case 3:
    day= 'qua';
    break; 

    case 4:
    day= 'qui';
    break; 

    case 5:
    day= 'sex';
    break; 

    case 6:
    day= 'sab';
    break; 
    }

  data.push({
    weekDay: day,
    day: i
  })
  }

  console.log(data);

  

  export const DateScroll = () => {
  
  return (
    <Container>
      <Scroll>
        
      </Scroll>
    </Container>
  );
};
