import { useState } from 'react';
import {
  Switcher,
  SwitcherButton,
  SwitcherIndicator,
  SwitcherText,
} from './styles';

export const ScreenSwitcher = () => {
  // if active, free workouts is showing, else, workouts plan is showing
  const [isActive, setIsActive] = useState(false);

  return (
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
          duration: 100,
        }}
      />
    </Switcher>
  );
};
