import styled from 'styled-components/native';

export const Container = styled.ImageBackground`
  flex: 1;
  background-color: #2176ff;
`;

export const Loading = styled.ActivityIndicator.attrs({
  size: 40,
  color: '#fff',
})`
  position: absolute;
  margin-top: 12px;
  bottom: 20%;
  align-self: center;
  opacity: 0.7;
`;
