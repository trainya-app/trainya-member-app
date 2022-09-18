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

interface ProfileHeaderProps {
  onPressChangePhoto: () => void;
}
export const ProfileHeader= ({ onPressChangePhoto }: ProfileHeaderProps) => (
    <Header>
          <ProfileImageContainer>
            <ProfilePhoto source={{ uri: 'https://i.imgur.com/nRsfy96.png' }} />
            <ChangePhotoIconContainer>
              <ChangePhotoIcon />
            </ChangePhotoIconContainer>
          </ProfileImageContainer>
          <ProfileInfoContainer>
            <Username>Mariana Santos</Username>
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
  )

export default ProfileHeader;
