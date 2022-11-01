import { Dispatch, SetStateAction, useContext } from 'react';
import { View } from 'react-native';

import { Button } from '../../../../../../components/Button';
import { WorkoutContext } from '../../../../../../contexts/WorkoutContext';
import { Modal, Overlay, ModalContainer, Title, Subtitle, WorkoutName } from './styles';

interface IWorkoutAlreadyExistsModalProps {
    isModalActive: boolean;
    setIsModalActive: Dispatch<SetStateAction<boolean>>;
}

export const WorkoutAlreadyExistsModal = ({ isModalActive, setIsModalActive }: IWorkoutAlreadyExistsModalProps) => {
    const { prevWorkout, clearPrevWorkout } = useContext(WorkoutContext)
    
    return (
        (
            <Modal visible={isModalActive}>
                <Overlay>
                    <ModalContainer>
                        <View>
                            <Title>Epa, peraí!?</Title>
                            <Subtitle>Parece que voce já tem um treino em andamento </Subtitle>
                        </View>
        
                        <WorkoutName>{prevWorkout.title}</WorkoutName>
        
                        <View style={{ width: '100%' }}>
                            <Subtitle>Quer descartar o progresso do treino atual e iniciar um novo?</Subtitle>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Button title="Continuar" fontSize={12} height={32} width={45} style={{ marginTop: 12 }}/>  
                                <Button 
                                    title="Descartar" 
                                    fontSize={12} 
                                    height={32} 
                                    width={45} 
                                    color='#EF233C' 
                                    style={{ marginTop: 12, backgroundColor: '#FFF5F5' }}
                                    onPress={() => {
                                        setIsModalActive(false)
                                        clearPrevWorkout()
                                    }}
                                />  
                            </View> 
                        </View>
                    </ModalContainer>
                </Overlay>
            </Modal>
        )
    )
}