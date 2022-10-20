import { Dispatch, SetStateAction, useState } from 'react';
import {
  Switcher,
  SwitcherButton,
  SwitcherIndicator,
  SwitcherText,
} from './styles';

interface ScreenSwitcherProps {
  firstName: string;
  secondName: string;
  toggleIsActive: Dispatch<SetStateAction<boolean>>;
  isAlreadyActive: boolean;
}

export const ScreenSwitcher = ({
  firstName,
  secondName,
  toggleIsActive,
  isAlreadyActive,
}: ScreenSwitcherProps) => {
  // if active, free workouts is showing, else, workouts plan is showing
  const [isActive, setIsActive] = useState(isAlreadyActive);

  function toggleWorkoutPlanScreen() {
    setIsActive(false);
    toggleIsActive(false);
  }

  function toggleFreeWorkoutsScreen() {
    setIsActive(true);
    toggleIsActive(true);
  }

  return (
    <Switcher>
      <SwitcherButton onPress={toggleWorkoutPlanScreen}>
        <SwitcherText isBlack={!isActive}>{firstName}</SwitcherText>
      </SwitcherButton>
      <SwitcherButton onPress={toggleFreeWorkoutsScreen}>
        <SwitcherText isBlack={isActive}>{secondName}</SwitcherText>
      </SwitcherButton>
      <SwitcherIndicator
        animate={{ left: isActive ? '53%' : '2%' }}
        transition={{
          type: 'timing',
          duration: 200,
        }}
      />
    </Switcher>
  );
};
