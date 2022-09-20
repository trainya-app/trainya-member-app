import { useState } from 'react';

import { Heading } from '../../../../components/Heading';
import { NavigationProps } from '../../../../types/NavigationProps';
import { 
    Container,
    WorkoutProgress,
    WorkoutCard,
    Top,
    WorkoutVideo,
    CheckboxContainer,
    CheckboxText,
    Checkbox,
    CheckActive,
    WorkoutInfo,
    WorkoutName,
    Row,
    Sets,
    Reps,
    Label,
    Text,
    CounterContainer,
    CurrentTitle,
    Timer,
    PlayContainer,
} from './styles';

import PlayIcon from '../../../../assets/play.svg';

export const Workout = ({ navigation }: NavigationProps) => {
    const [finished, setFinished] = useState(false);
    return (
    <>
        <Heading title="Treino Atual" onGoBack={() => navigation.goBack()} onPressConfig={() => false} hideConfigIcon/>
        <Container>
            <WorkoutProgress>0 de 6 concluidos</WorkoutProgress>
            <WorkoutCard>
                <Top>
                    <WorkoutVideo source={{uri: 'https://i.imgur.com/b3Gblmw.png'}}/>
                    <CheckboxContainer>
                        <CheckboxText>Terminou?</CheckboxText>
                        <Checkbox isChecked={finished} onPress={() => setFinished(prev => !prev)}/>
                    </CheckboxContainer>
                </Top>

                <WorkoutInfo>
                    <WorkoutName>Barra Fixa</WorkoutName>
                    <Row>
                        <Sets>
                            <Label>Série</Label>
                            <Text>3x</Text>
                        </Sets>
                        <Reps>
                            <Label>Repetições</Label>
                            <Text>20</Text>
                        </Reps>
                    </Row>
                    <CounterContainer>
                        <CurrentTitle>Repouso</CurrentTitle>
                        <Timer>00:50</Timer>
                        <PlayContainer>
                            <PlayIcon />
                        </PlayContainer>
                    </CounterContainer>
                </WorkoutInfo>
            </WorkoutCard>
        </Container>
    </>
);
}