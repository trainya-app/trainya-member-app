import { useState, useEffect } from 'react';
import { Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import MembersService from '../../services/MembersService';
import {
  Container,
  Title,
  Scroll,
  Pressable,
  IndicatorWrapper,
  Indicator,
  MonthLabelWrapper,
  MonthLabel,
} from './styles';

interface IChartData {
  month: string;
  progress: number;
}

const { width } = Dimensions.get('window');

export const Chart = () => {
  const [chartData, setChartData] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1);

  const chartConfig = {
    backgroundGradientFrom: '#fff',
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: '#fff',
    backgroundGradientToOpacity: 0.5,

    fillShadowGradient: '#bed7ff',
    fillShadowGradientOpacity: 0.3,
    color: (opacity = 1) => `#609DFF`,
    labelColor: (opacity = 1) => `#333`,
    strokeWidth: 8,

    useShadowColorFromDataset: false,
    decimalPlaces: 0,
    propsForLabels: {
      opacity: 0,
    },
  };

  useEffect(() => {
    (async () => {
      const data = await MembersService.getMonthMemberProgresses();
      setChartData(data);
    })();
  }, []);

  return (
    <Container>
      {chartData.length !== 0 ? (
        <>
          {/* <ChartContainer>
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
          </ChartContainer> */}

          <Scroll>
            <MonthLabelWrapper
              style={{
                marginLeft: 12.3,
              }}
            >
              <MonthLabel>{''}</MonthLabel>
              {chartData.map((item: IChartData) => (
                <MonthLabel key={item.month}>
                  {item.month.slice(' ', 3)}
                </MonthLabel>
              ))}
              <MonthLabel>{''}</MonthLabel>
            </MonthLabelWrapper>
            <LineChart
              data={{
                labels: [
                  ' ',
                  ...chartData.map((item: IChartData) => item.month),
                  ' ',
                ],
                datasets: [
                  {
                    data: [
                      0,
                      ...chartData.map((item: IChartData) => item.progress),
                      0,
                    ],
                  },
                ],
              }}
              width={(width / 6) * 12}
              height={200}
              bezier
              chartConfig={chartConfig}
              withVerticalLines={false}
              withHorizontalLines={false}
              fromZero
              getDotProps={(value, index) => ({
                r: '10',
                strokeWidth: '6',
                stroke: '#ffffff',
                opacity: index === selectedMonth ? 1 : 0,
              })}
              onDataPointClick={(value) => {
                setSelectedMonth(value.index);
              }}
              style={{
                marginLeft: width / 2 - 50 * 4.5,
              }}
              hidePointsAtIndex={[0, chartData.length + 1]}
            />
            <IndicatorWrapper>
              <Indicator opacity={0} />
              {chartData.map((item: IChartData, index: number) => (
                <Pressable
                  key={item.month}
                  onPress={() => setSelectedMonth(index + 1)}
                >
                  <Indicator opacity={index + 1 === selectedMonth ? 1 : 0} />
                </Pressable>
              ))}
              <Indicator opacity={0} />
            </IndicatorWrapper>
          </Scroll>
        </>
      ) : (
        <Title>Não há dados para exibir</Title>
      )}
    </Container>
  );
};
