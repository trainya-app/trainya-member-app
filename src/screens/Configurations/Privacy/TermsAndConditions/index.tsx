import { useEffect, useState } from 'react';
import {
  Container,
  Scroll,
  Label,
  PrivacyPolicyContent,
  PrivacyPolicyContentText,
} from './styles';
import { Heading } from '../../../../components/Heading';

import { NavigationProps } from '../../../../types/NavigationProps';
import { api } from '../../../../services/api';
import { LoadingIndicator } from '../../../../components/Loading';

export const TermsAndConditions = ({ navigation }: NavigationProps) => {
  const [termsAndConditions, setTermsAndConditions] = useState('');
  useEffect(() => {
    (async () => {
      try {
        const { data } = await api.get('terms');
        setTermsAndConditions(data.term.content);
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
          {termsAndConditions ? (
            <Scroll>
              <Label>Termos e condições</Label>
              <PrivacyPolicyContentText>
                {termsAndConditions}
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
