import { Dispatch, SetStateAction, useState } from 'react';
import {
  Switcher,
  SwitcherButton,
  SwitcherIndicator,
  SwitcherText,
} from './styles';

interface ScreenSwitcherProps {
  toggleIsActive: Dispatch<SetStateAction<boolean>>;
}

export const ScreenSwitcher = ({ toggleIsActive }: ScreenSwitcherProps) => {
  // if active, free workouts is showing, else, workouts plan is showing
  const [isActive, setIsActive] = useState(false);

  function toggleSwitcher() {
    setIsActive(!isActive);
    toggleIsActive(!isActive);
  }

  return (
    <Switcher>
      <SwitcherButton onPress={toggleSwitcher}>
        <SwitcherText isBlack={!isActive}>Plano de treino</SwitcherText>
      </SwitcherButton>
      <SwitcherButton onPress={toggleSwitcher}>
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
