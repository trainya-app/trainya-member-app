import Swiper from 'react-native-swiper';

import Entypo from 'react-native-vector-icons/Entypo';

import { Modal, Overlay, ConfirmPhotosContainer, Title, Photo } from './styles';

interface IConfirmUploadPhotosProps {
  visible: boolean;
  memberPhotos: string[];
}

export const ConfirmUploadPhotos = ({
  visible,
  memberPhotos,
}: IConfirmUploadPhotosProps) => {
  const a = 'a';
  return (
    <Modal transparent visible={visible}>
      <Overlay>
        <ConfirmPhotosContainer>
          <Title>Deseja enviar essas fotos?</Title>
          <Swiper
            style={{ height: '100%' }}
            loop={false}
            showsButtons
            showsPagination={false}
            nextButton={
              <Entypo name="chevron-right" size={32} color="#2176ff" />
            }
            prevButton={
              <Entypo name="chevron-left" size={32} color="#2176ff" />
            }
          >
            <Photo
              source={{
                uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGEAAACJCAMAAAALz6Z+AAAAY1BMVEX////+/v4AAABbW1tvb2+tra3Dw8P29vbg4OAODg60tLT7+/vp6enl5eXt7e0UFBRlZWXKysqKioogICBGRkbS0tKZmZl1dXVMTExgYGB8fHwyMjI7Ozu9vb2np6efn58nJyesJWUxAAAC/UlEQVRoge3a6ZKiMBAA4O5GBYlGUfE+9v2fcjtojQchBkiXs256/kwp5jOdUwiAcKA0EIUofKuAtqvfldBGUKp+ueIIJwCkuh4YUlgfZrVYbnQggb9qTtZYcPs4ivEXoCQ6DPPX2FJi7wGtBdBLoqL+8oYSZxU8BcWFbIkuUG/VQSgBEpNwSwxMllyf9RRgQbSzDrkQAvIfAytV/WcR+mYJedDuGUjtb4epw4ZomTb0yRBCyo28TZuGVV+BMzRdMaAaU91XQCgORBuFSkqAdTXx8BQdXuC8KJgMGBiaJmi8rofAE8SIM7Qq3RNbDwE0DzPaa3A0QjcBVZUUlXMFljk4U9RNUFWzZnMuf5C5PtpZ4FkCJzxNHE/aZ0B2ERBOM17OvMrvlqVUcwsnU8+JvUsd4ER0ath+BRJ4TzHBN12ojwBGmPoUHgWPy36E9ut0XbBtAe6CfB1CCAhpKSiYNGNyFhXMdmMoKADqLYkJZjmC7EhjQUFB8YdIsA6IZy5+LSSYDGle7ShXUgJniLeUxxJSqSylF67AfMLLnoTAb5TcSWcXHm4iwm1DZnZ8/IqAoNWQf9yOF1jtLiWEM7cw7TLurQKCUll1M+F4ur8WVsDqhyGdH2/1hK4Dt3JZTUmeQutVFK9r5uM7oVu6Hh8VhuJCEYVfISy+oLdGIQpR+DohxL37T9chClGIQhSiEIXPCHEV/TcFZXnM6ryTOLeU4BRQoSry56MfQ5ewejkjctJPjzktQnVyohbNQi2WJboFc3yll0B7eCPkROXkNRqOOoB+vVDvKHmTpXZPml5PTSHXaucW7nd0ER+e+zX1yNsF+BMwp527Ha53Q32rYIk5z1SPX8EqrDxHYnfhIi6MxIWmR2PhBPk6LMQFSsUF/zEdhd8r7NzC9TRF5/LxfR0qociuMZ1mbWOavBcyovEtZrNx6zCrqFtQ5vxenzhmj9sZ+24mK0bdozDHtpyC54GZ5nje0lkKM0AfA/HpeEfPr+sDRuE/ER73gzKhxAX8C9ieKeGUg8EDAAAAAElFTkSuQmCC',
              }}
            />
            <Photo
              source={{
                uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGEAAACJCAMAAAALz6Z+AAAAY1BMVEX////+/v4AAABbW1tvb2+tra3Dw8P29vbg4OAODg60tLT7+/vp6enl5eXt7e0UFBRlZWXKysqKioogICBGRkbS0tKZmZl1dXVMTExgYGB8fHwyMjI7Ozu9vb2np6efn58nJyesJWUxAAAC/UlEQVRoge3a6ZKiMBAA4O5GBYlGUfE+9v2fcjtojQchBkiXs256/kwp5jOdUwiAcKA0EIUofKuAtqvfldBGUKp+ueIIJwCkuh4YUlgfZrVYbnQggb9qTtZYcPs4ivEXoCQ6DPPX2FJi7wGtBdBLoqL+8oYSZxU8BcWFbIkuUG/VQSgBEpNwSwxMllyf9RRgQbSzDrkQAvIfAytV/WcR+mYJedDuGUjtb4epw4ZomTb0yRBCyo28TZuGVV+BMzRdMaAaU91XQCgORBuFSkqAdTXx8BQdXuC8KJgMGBiaJmi8rofAE8SIM7Qq3RNbDwE0DzPaa3A0QjcBVZUUlXMFljk4U9RNUFWzZnMuf5C5PtpZ4FkCJzxNHE/aZ0B2ERBOM17OvMrvlqVUcwsnU8+JvUsd4ER0ath+BRJ4TzHBN12ojwBGmPoUHgWPy36E9ut0XbBtAe6CfB1CCAhpKSiYNGNyFhXMdmMoKADqLYkJZjmC7EhjQUFB8YdIsA6IZy5+LSSYDGle7ShXUgJniLeUxxJSqSylF67AfMLLnoTAb5TcSWcXHm4iwm1DZnZ8/IqAoNWQf9yOF1jtLiWEM7cw7TLurQKCUll1M+F4ur8WVsDqhyGdH2/1hK4Dt3JZTUmeQutVFK9r5uM7oVu6Hh8VhuJCEYVfISy+oLdGIQpR+DohxL37T9chClGIQhSiEIXPCHEV/TcFZXnM6ryTOLeU4BRQoSry56MfQ5ewejkjctJPjzktQnVyohbNQi2WJboFc3yll0B7eCPkROXkNRqOOoB+vVDvKHmTpXZPml5PTSHXaucW7nd0ER+e+zX1yNsF+BMwp527Ha53Q32rYIk5z1SPX8EqrDxHYnfhIi6MxIWmR2PhBPk6LMQFSsUF/zEdhd8r7NzC9TRF5/LxfR0qociuMZ1mbWOavBcyovEtZrNx6zCrqFtQ5vxenzhmj9sZ+24mK0bdozDHtpyC54GZ5nje0lkKM0AfA/HpeEfPr+sDRuE/ER73gzKhxAX8C9ieKeGUg8EDAAAAAElFTkSuQmCC',
              }}
            />
            <Photo
              source={{
                uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGEAAACJCAMAAAALz6Z+AAAAY1BMVEX////+/v4AAABbW1tvb2+tra3Dw8P29vbg4OAODg60tLT7+/vp6enl5eXt7e0UFBRlZWXKysqKioogICBGRkbS0tKZmZl1dXVMTExgYGB8fHwyMjI7Ozu9vb2np6efn58nJyesJWUxAAAC/UlEQVRoge3a6ZKiMBAA4O5GBYlGUfE+9v2fcjtojQchBkiXs256/kwp5jOdUwiAcKA0EIUofKuAtqvfldBGUKp+ueIIJwCkuh4YUlgfZrVYbnQggb9qTtZYcPs4ivEXoCQ6DPPX2FJi7wGtBdBLoqL+8oYSZxU8BcWFbIkuUG/VQSgBEpNwSwxMllyf9RRgQbSzDrkQAvIfAytV/WcR+mYJedDuGUjtb4epw4ZomTb0yRBCyo28TZuGVV+BMzRdMaAaU91XQCgORBuFSkqAdTXx8BQdXuC8KJgMGBiaJmi8rofAE8SIM7Qq3RNbDwE0DzPaa3A0QjcBVZUUlXMFljk4U9RNUFWzZnMuf5C5PtpZ4FkCJzxNHE/aZ0B2ERBOM17OvMrvlqVUcwsnU8+JvUsd4ER0ath+BRJ4TzHBN12ojwBGmPoUHgWPy36E9ut0XbBtAe6CfB1CCAhpKSiYNGNyFhXMdmMoKADqLYkJZjmC7EhjQUFB8YdIsA6IZy5+LSSYDGle7ShXUgJniLeUxxJSqSylF67AfMLLnoTAb5TcSWcXHm4iwm1DZnZ8/IqAoNWQf9yOF1jtLiWEM7cw7TLurQKCUll1M+F4ur8WVsDqhyGdH2/1hK4Dt3JZTUmeQutVFK9r5uM7oVu6Hh8VhuJCEYVfISy+oLdGIQpR+DohxL37T9chClGIQhSiEIXPCHEV/TcFZXnM6ryTOLeU4BRQoSry56MfQ5ewejkjctJPjzktQnVyohbNQi2WJboFc3yll0B7eCPkROXkNRqOOoB+vVDvKHmTpXZPml5PTSHXaucW7nd0ER+e+zX1yNsF+BMwp527Ha53Q32rYIk5z1SPX8EqrDxHYnfhIi6MxIWmR2PhBPk6LMQFSsUF/zEdhd8r7NzC9TRF5/LxfR0qociuMZ1mbWOavBcyovEtZrNx6zCrqFtQ5vxenzhmj9sZ+24mK0bdozDHtpyC54GZ5nje0lkKM0AfA/HpeEfPr+sDRuE/ER73gzKhxAX8C9ieKeGUg8EDAAAAAElFTkSuQmCC',
              }}
            />
          </Swiper>
        </ConfirmPhotosContainer>
      </Overlay>
    </Modal>
  );
};
