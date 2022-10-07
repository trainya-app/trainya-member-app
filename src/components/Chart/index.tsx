import { useState, useEffect } from 'react';
import MembersService from '../../services/MembersService';
import {
  Container,
  ChartContainer,
  Title,
  Scroll,
  BarContainer,
  VerticalBarWrapper,
  VerticalBarShadow,
  VerticalBar,
  Label,
} from './styles';

interface IChartData {
  month: string;
  progress: number;
}

export const Chart = () => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await MembersService.getMonthMemberProgresses();
      setChartData(data);
    })();
  }, []);

  return (
    <Container>
      {chartData.length !== 0 ? (
        <ChartContainer>
          <Scroll>
            {chartData.map((item: IChartData) => (
              <BarContainer key={item.month}>
                <VerticalBarWrapper>
                  <VerticalBarShadow>
                    <VerticalBar progress={item.progress} />
                  </VerticalBarShadow>
                </VerticalBarWrapper>
                <Label>{`${item.month.slice(0, 3)}.`}</Label>
              </BarContainer>
            ))}
          </Scroll>
        </ChartContainer>
      ) : (
        <Title>Não há dados para exibir</Title>
      )}
    </Container>
  );
};
