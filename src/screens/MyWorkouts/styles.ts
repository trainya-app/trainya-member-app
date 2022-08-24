import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.shape};
  padding: 0 24px;
  align-items: center;
`;

export const Separator = styled.View`
  background-color: ${({ theme }) => theme.colors.blue[300]};
  height: 1px;
  width: 100%;
`;
