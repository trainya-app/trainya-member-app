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
  onPressEditInfo: () => void;
}
export const ProfileHeader = ({ onPressEditInfo }: ProfileHeaderProps) => {
  const { user } = useContext(AuthContext);
  return (
    <Header>
      <ProfileImageContainer>
        <ProfilePhoto source={{ uri: user.avatar_url }} />
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
          onPress={onPressEditInfo}
        />
      </ProfileInfoContainer>
    </Header>
  );
};
