import { Heading } from '../../components/Heading';
import { useCustomTheme } from '../../hooks/useCustomTheme';
import { NavigationProps } from '../../types/NavigationProps';
import { Container, StarIcon, StrongText, Text } from './styles';

export const Favorites = ({ navigation }: NavigationProps) => {
  const { colorMode } = useCustomTheme();
  return (
    <Container>
      <Heading title="Favoritos" onGoBack={() => navigation.goBack()} />
      <StarIcon />
      <StrongText>Você ainda não tem nenhum treino salvo.</StrongText>
      <Text>
        Aqui ficam salvos os seus treinos, aulas e planos de treinos preferidos
      </Text>
    </Container>
  );
};
