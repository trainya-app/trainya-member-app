import { Heading } from '../../../components/Heading';
import { NavigationProps } from '../../../types/NavigationProps';
import { Container } from './styles';

export const Privacy = ({ navigation }: NavigationProps) => (
  <>
    <Heading title="Privacidade" onGoBack={() => navigation.goBack()} />
    <Container />
  </>
);
