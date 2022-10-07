import { CardContainer, CardImage, CardTitle, FavoriteIcon } from './styles';

export const Card = () => (
  <CardContainer>
    <CardTitle>Natação</CardTitle>
    <CardImage source={{ uri: 'https://i.imgur.com/1gCjdZo.jpeg' }} />
    <FavoriteIcon />
  </CardContainer>
);
