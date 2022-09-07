import { useState } from 'react';
import { Container, ButtonContainer, ButtonIndicator } from './styles';

export const ToggleButton = () => {
  const [isActive, setIsActive] = useState(true);

  function handleToggleButton() {
    setIsActive((prevState) => !prevState);
  }

  return (
    <Container onPress={handleToggleButton}>
      <ButtonContainer isActive={isActive}>
        <ButtonIndicator
          from={{ left: isActive ? '0%' : '36%' }}
          animate={{ left: isActive ? '36%' : '0%' }}
          transition={{
            type: 'timing',
            duration: 200,
          }}
        />
      </ButtonContainer>
    </Container>
  );
};
