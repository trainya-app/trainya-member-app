import { Button } from '../../../../components/Button';
import { Heading } from '../../../../components/Heading';
import { NavigationProps } from '../../../../types/NavigationProps';
import { FavoriteIcon } from '../AvailableClasses/components/Card/styles';
import {
  Container,
  ClassContainer,
  Top,
  ClassImage,
  ClassTitleContainer,
  ClassTitle,
  DetailsContainer,
  Row,
  Bottom,
} from './styles';

import { Details } from './components/Details';

export function ScheduleClass({ navigation }: NavigationProps) {
  return (
    <>
      <Heading
        title="Aulas disponíveis"
        onGoBack={() => navigation.goBack()}
        onPressConfig={() => navigation.navigate('Configurations')}
      />
      <Container>
        <ClassContainer>
          <Top>
            <ClassImage source={{ uri: 'https://i.imgur.com/1gCjdZo.jpeg' }} />
            <ClassTitleContainer>
              <ClassTitle>Natação</ClassTitle>
            </ClassTitleContainer>
            <FavoriteIcon />
          </Top>
          <Button
            fontSize={16}
            height={32}
            title="Horários Disp."
            width={80}
            style={{ marginTop: 32, alignSelf: 'center' }}
          />
          <DetailsContainer>
            <Row>
              <Details title="Segunda-feira" detail="26/04" />
              <Details title="Horário" detail="12:00" />
            </Row>
            <Row>
              <Details title="Instrutor" detail="André" />
              <Details title="Alunos" detail="5 - 10" />
            </Row>
            <Button
              fontSize={20}
              height={40}
              title="Inscrever-se"
              width={80}
              isRounded
              style={{ alignSelf: 'center' }}
            />
          </DetailsContainer>
        </ClassContainer>
        <Bottom>
          <Button fontSize={12} height={32} title="Anterior" width={40} />
          <Button fontSize={12} height={32} title="Próximo" width={40} />
        </Bottom>
      </Container>
    </>
  );
}
