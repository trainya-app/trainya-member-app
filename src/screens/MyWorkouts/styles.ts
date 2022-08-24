import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.shape};
  padding: 24px;
  align-items: center;
`;

export const Separator = styled.View`
  background-color: ${({ theme }) => theme.colors.blue[300]};
  height: 1px;
  width: 100%;
  margin-bottom: 16px;
`;

export const WorkoutsContainer = styled.View`
  width: 100%;
  flex: 0.75;
`;

export const Scroll = styled.ScrollView.attrs({
  overScrollMode: 'never',
  showsVerticalScrollIndicator: false,
})`
  width: 100%;
`;
