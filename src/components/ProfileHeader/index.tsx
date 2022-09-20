import { useContext } from 'react';
import {
  Header,
  ProfileImageContainer,
  ProfilePhoto,
  ChangePhotoIconContainer,
  ChangePhotoIcon,
  ProfileInfoContainer,
  Username,
} from './styles';

import { Button } from '../Button';
import { AuthContext } from '../../contexts/AuthContext';

interface ProfileHeaderProps {
  onPressChangePhoto: () => void;
}
export const ProfileHeader = ({ onPressChangePhoto }: ProfileHeaderProps) => {
  const { user } = useContext(AuthContext);
  return (
    <Header>
      <ProfileImageContainer>
        <ProfilePhoto source={{ uri: 'https://i.imgur.com/nRsfy96.png' }} />
        <ChangePhotoIconContainer>
          <ChangePhotoIcon />
        </ChangePhotoIconContainer>
      </ProfileImageContainer>
      <ProfileInfoContainer>
        <Username>{user.name}</Username>
        <Button
          title="Editar informações"
          width={70}
          height={36}
          style={{ marginTop: 12 }}
          fontSize={11}
          onPress={onPressChangePhoto}
        />
      </ProfileInfoContainer>
    </Header>
  );
};
