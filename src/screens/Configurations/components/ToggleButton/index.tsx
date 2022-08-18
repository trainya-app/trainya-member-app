import { useState } from 'react';
import { Dimensions } from 'react-native';
import { Container, ButtonContainer, ButtonIndicator } from './styles';

export const ToggleTheme = () => {
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
      <ButtonContainer>
        <ButtonIndicator
          from={{ left: isActive ? getSpacingLeft() : '0%' }}
          animate={{ left: isActive ? '0%' : getSpacingLeft() }}
          transition={{
            type: 'timing',
            duration: 200,
          }}
        />
      </ButtonContainer>
    </Container>
  );
};
