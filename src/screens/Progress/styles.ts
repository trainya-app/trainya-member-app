import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.blue[100]}
  align-items: center;
  justify-content: center;
`;

export const Image = styled.Image`
  width: 100px;
  height: 100px;
`;
