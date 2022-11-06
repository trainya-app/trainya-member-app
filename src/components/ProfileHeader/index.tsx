import { useContext } from 'react';

import {
  Header,
  ProfileImageContainer,
  ProfilePhoto,
  ProfileInfoContainer,
  Username,
  GymText,
  GymName,
} from './styles';

import { Button } from '../Button';
import { AuthContext } from '../../contexts/AuthContext';

interface ProfileHeaderProps {
  onPressEditInfo: () => void;
  type: 'config' | 'profile';
}
export const ProfileHeader = ({
  onPressEditInfo,
  type,
}: ProfileHeaderProps) => {
  const { user } = useContext(AuthContext);

  return (
    <Header>
      <ProfileImageContainer>
        <ProfilePhoto source={{ uri: user.avatar_url }} />
        {/* <ChangePhotoIconContainer onPress={handleChoosePhoto}>
          <ChangePhotoIcon />
        </ChangePhotoIconContainer> */}
      </ProfileImageContainer>
      <ProfileInfoContainer>
        <Username>{user.name}</Username>
        {type === 'profile' ? (
          <>
            <GymText>Minha academia</GymText>
            <GymName>{user.gym}</GymName>
          </>
        ) : (
          <Button
            title="Editar informações"
            width={70}
            height={36}
            style={{ marginTop: 12 }}
            fontSize={11}
            onPress={onPressEditInfo}
          />
        )}
      </ProfileInfoContainer>
    </Header>
  );
};
