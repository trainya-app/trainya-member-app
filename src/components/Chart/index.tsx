import { useState, useEffect } from 'react';
import {
  Container,
  Title,
  Scroll,
  BarContainer,
  VerticalBarWrapper,
  VerticalBarShadow,
  VerticalBar,
  Label,
} from './styles';

import * as MemberProgresses from '../../services/MemberProgresses';

interface IChartData {
  month: string;
  progress: number;
}

export const Chart = () => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await MemberProgresses.getMonthMemberProgresses();
      setChartData(data);
    })();
  }, []);

  const maxValue = Math.max(
    ...chartData.map((item: IChartData) => item.progress)
  );

  return (
    <Container>
      {maxValue !== 0 ? (
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
      ) : (
        <Title>Não há dados para exibir</Title>
      )}
    </Container>
  );
};
