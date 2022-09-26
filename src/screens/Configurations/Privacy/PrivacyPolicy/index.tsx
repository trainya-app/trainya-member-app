import { useEffect, useState } from 'react';
import {
  Container,
  Scroll,
  Label,
  PrivacyPolicyContent,
  PrivacyPolicyContentText,
} from './styles';
import { Heading } from '../../../../components/Heading';
import { LoadingIndicator } from '../../../../components/Loading';

import { NavigationProps } from '../../../../types/NavigationProps';
import { api } from '../../../../services/api';

export const PrivacyPolicy = ({ navigation }: NavigationProps) => {
  const [privacyPolicy, setPrivacyPolicy] = useState('');

  useEffect(() => {
    (async () => {
      try {
        const { data } = await api.get('privacy');
        console.log(data);
      } catch (error: any) {
        console.log(error.response.data.message);
      }
    })();
  }, []);

  return (
    <>
      <Heading
        title="Privacidade"
        onGoBack={() => navigation.goBack()}
        onPressConfig={() => navigation.navigate('Configurations')}
      />
      <Container>
        <PrivacyPolicyContent>
          {privacyPolicy ? (
            <Scroll>
              <Label>Políticas de privacidade</Label>
              <PrivacyPolicyContentText>
                {privacyPolicy}
              </PrivacyPolicyContentText>
            </Scroll>
          ) : (
            <LoadingIndicator />
          )}
        </PrivacyPolicyContent>
      </Container>
    </>
  );
};
