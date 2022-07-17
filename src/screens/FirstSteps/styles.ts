import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.blue[100]};
  padding: 48px 24px;
`;

export const Text = styled.Text`
  font-family: ${({ theme }) => theme.fonts.extrabold};
  color: ${({ theme }) => theme.colors.gray[500]};
`;
