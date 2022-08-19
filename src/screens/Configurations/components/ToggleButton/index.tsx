import { useState } from 'react';
import { Dimensions } from 'react-native';
import { Container, ButtonContainer, ButtonIndicator } from './styles';

export const ToggleButton = () => {
  const [isActive, setIsActive] = useState(true);

  function getSpacingLeft() {
    const spacingLeft = Dimensions.get('window').width;
    return spacingLeft > 400 ? '43%' : '36%';
  }

  function handleToggleButton() {
    setIsActive((prevState) => !prevState);
  }

  return (
    <Container onPress={handleToggleButton}>
      <ButtonContainer isActive={isActive}>
        <ButtonIndicator
          from={{ left: isActive ? '0%' : getSpacingLeft() }}
          animate={{ left: isActive ? getSpacingLeft() : '0%' }}
          transition={{
            type: 'timing',
            duration: 200,
          }}
        />
      </ButtonContainer>
    </Container>
  );
};
