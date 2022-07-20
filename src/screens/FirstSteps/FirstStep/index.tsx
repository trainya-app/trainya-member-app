import { ScrollView } from 'react-native';
import { Heading } from '../../../components/Heading';
import { TextInput } from '../components/TextInput';

import {
  Container,
  Text,
  ProgressBar,
  Label,
  Button,
  TextButton,
} from './styles';

// this screen will appear only when the user is opening the app for the first time
export const FirstStep = () => {
  const user = 'Mariana';
  // TODO: Grab the username from the database

  return (
    <Container>
      <Text>OLÁ, {user.toUpperCase()}</Text>
      <Heading isBlack>VAMOS INICIAR</Heading>
      <ProgressBar />

      <ScrollView>
        <Label>GÊNERO</Label>
        <TextInput
          placeholder="Selecione..."
          onChangeText={(heightText) => console.log(heightText)}
        />
        <Label>ALTURA</Label>
        <TextInput
          placeholder="165cm"
          onChangeText={(heightText) => console.log(heightText)}
        />
        <Label>PESO</Label>
        <TextInput
          placeholder="65kg"
          onChangeText={(heightText) => console.log(heightText)}
        />
      </ScrollView>
      <Button>
        <TextButton>Próximo</TextButton>
      </Button>
    </Container>
  );
};
