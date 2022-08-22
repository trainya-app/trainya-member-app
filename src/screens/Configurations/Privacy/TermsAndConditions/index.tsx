import {
  Container,
  Scroll,
  Label,
  PrivacyPolicyContent,
  PrivacyPolicyContentText,
} from './styles';
import { Heading } from '../../../../components/Heading';

import { NavigationProps } from '../../../../types/NavigationProps';

export const TermsAndConditions = ({ navigation }: NavigationProps) => (
  <>
    <Heading
      title="Privacidade"
      onGoBack={() => navigation.goBack()}
      onPressConfig={() => navigation.navigate('Configurations')}
    />
    <Container>
      <PrivacyPolicyContent>
        <Scroll>
          <Label>Termos e Condições</Label>
          <PrivacyPolicyContentText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Sem
            fringilla ut morbi tincidunt augue interdum. Sed cras ornare arcu
            dui vivamus arcu felis bibendum ut. Phasellus faucibus scelerisque
            eleifend donec. Ut faucibus pulvinar elementum integer enim neque
            volutpat ac tincidunt. Dapibus ultrices in iaculis nunc sed augue
            lacus. A scelerisque purus semper eget duis at tellus at. Cras
            ornare arcu dui vivamus arcu felis bibendum. Id diam vel quam
            elementum pulvinar etiam non quam lacus. Tempus quam pellentesque
            nec nam aliquam sem et. Vel facilisis volutpat est velit egestas dui
            id ornare arcu. Scelerisque fermentum dui faucibus in ornare quam
            viverra orci sagittis. Eget nunc scelerisque viverra mauris. Tortor
            at auctor urna nunc id cursus metus aliquam. At risus viverra
            adipiscing at in tellus integer. Dolor sit amet consectetur
            adipiscing elit ut. Urna porttitor rhoncus dolor purus non enim
            praesent elementum facilisis. Auctor elit sed vulputate mi sit amet
            mauris commodo. Ultricies lacus sed turpis tincidunt. Gravida rutrum
            quisque non tellus orci ac. Donec adipiscing tristique risus nec
            feugiat in fermentum. Magna fringilla urna porttitor rhoncus.
            Ullamcorper sit amet risus nullam eget felis eget nunc. Nunc vel
            risus commodo viverra. Facilisi cras fermentum odio eu feugiat
            pretium. Vulputate sapien nec sagittis aliquam malesuada. Mi proin
            sed libero enim sed. Est pellentesque elit ullamcorper dignissim
            cras tincidunt lobortis feugiat. Nisl condimentum id venenatis a
            condimentum vitae sapien. Tincidunt tortor aliquam nulla facilisi
            cras. Tellus id interdum velit laoreet id donec ultrices tincidunt.
            Pretium quam vulputate dignissim suspendisse in. Tristique et
            egestas quis ipsum. Nulla facilisi etiam dignissim diam quis enim
            lobortis scelerisque fermentum. Mi tempus imperdiet nulla malesuada
            pellentesque. In fermentum posuere urna nec tincidunt praesent. Nibh
            ipsum consequat nisl vel. Ut consequat semper viverra nam libero
            justo. Quam vulputate dignissim suspendisse in est ante. Nunc
            consequat interdum varius sit amet mattis. Felis eget velit aliquet
            sagittis id consectetur purus ut. Eu augue ut lectus arcu bibendum
            at varius vel pharetra. Est pellentesque elit ullamcorper dignissim
            cras tincidunt lobortis feugiat. Et magnis dis parturient montes
            nascetur ridiculus mus mauris vitae. Quisque id diam vel quam. Et
            pharetra pharetra massa massa ultricies mi quis. Eu lobortis
            elementum nibh tellus molestie nunc non blandit. Et netus et
            malesuada fames. Commodo ullamcorper a lacus vestibulum sed arcu non
            odio euismod. Urna neque viverra justo nec ultrices dui sapien.
            Cursus turpis massa tincidunt dui ut ornare. Est ultricies integer
            quis auctor elit. Erat pellentesque adipiscing commodo elit at
            imperdiet. Etiam non quam lacus suspendisse faucibus interdum
            posuere. Viverra aliquet eget sit amet tellus cras. Posuere morbi
            leo urna molestie at. Neque sodales ut etiam sit amet. Habitasse
            platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper
            dignissim. Vitae auctor eu augue ut lectus arcu bibendum. Elit duis
            tristique sollicitudin nibh sit amet commodo. Ipsum dolor sit amet
            consectetur adipiscing elit. Egestas quis ipsum suspendisse ultrices
            gravida dictum fusce.
          </PrivacyPolicyContentText>
        </Scroll>
      </PrivacyPolicyContent>
    </Container>
  </>
);
