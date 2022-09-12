import { useTheme } from 'styled-components';
import { Heading } from '../../../../components/Heading';
import { useCustomTheme } from '../../../../hooks/useCustomTheme';
import { Container, Scroll, ExerciseCard, Image, Wrapper, ExerciseName, ExerciseSets } from './styles';

interface Props {
    route: {
        params: {
            workoutTitle: string;
        };
    }
    navigation: {
        goBack: () => void;
    };
}

export const ExercisesList = ({ navigation, route }: Props) => {
    const theme = useTheme();
    const { colorMode } = useCustomTheme();

    return (
        <>
            <Heading 
                onGoBack={() => navigation.goBack()} 
                title={route.params.workoutTitle} 
                onPressConfig={() => false} 
                hideConfigIcon
                b={theme.colors.shape.main}
            />
            <Container>
                <Scroll>
                    <ExerciseCard>
                        <Image source={{uri: 'https://i.imgur.com/5awFGCT.png'}}/>
                        <Wrapper>
                            <ExerciseName colorMode={colorMode}>Barra FIxa</ExerciseName>
                            <ExerciseSets colorMode={colorMode}>3 x 15</ExerciseSets>
                        </Wrapper>
                    </ExerciseCard>
                </Scroll>
            </Container>

        </>
);
}