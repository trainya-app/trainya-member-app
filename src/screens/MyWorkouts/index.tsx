import { useState } from 'react';
import { StatusBar } from 'react-native';
import { Heading } from '../../components/Heading';
import { NavigationProps } from '../../types/NavigationProps';
import {
  Container,
  Switcher,
  SwitcherButton,
  SwitcherIndicator,
  SwitcherText,
} from './styles';

export const MyWorkouts = ({ navigation }: NavigationProps) => {
  // if active, free workouts is showing, else, workouts plan is showing
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <StatusBar backgroundColor="#EBF2FF" />
      <Heading
        title="Meus treinos"
        onGoBack={() => navigation.goBack()}
        onPressConfig={() => navigation.navigate('Configurations')}
      />
      <Container>
        <Switcher>
          <SwitcherButton onPress={() => setIsActive(false)}>
            <SwitcherText isBlack={!isActive}>Plano de treino</SwitcherText>
          </SwitcherButton>
          <SwitcherButton onPress={() => setIsActive(true)}>
            <SwitcherText isBlack={isActive}>Treinos livres</SwitcherText>
          </SwitcherButton>
          <SwitcherIndicator
            from={{ left: isActive ? '2%' : '53%' }}
            animate={{ left: isActive ? '53%' : '2%' }}
            transition={{
              type: 'timing',
              duration: 200,
            }}
          />
        </Switcher>
      </Container>
    </>
  );
};
