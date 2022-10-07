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
  Bottom,
} from './styles';

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
        </ClassContainer>
        <Bottom>
          <Button fontSize={12} height={32} title="Anterior" width={40} />
          <Button fontSize={12} height={32} title="Próximo" width={40} />
        </Bottom>
      </Container>
    </>
  );
}
