import { api } from './api';

class MemberProgressPhotosService {
  getMonth() {
    return new Date().getMonth() + 1;
  }

  async uploadFirstPhoto(firstPhoto: string) {
    const formData = new FormData();

    formData.append('photo', {
      uri: firstPhoto,
      name: 'image.jpg',
      type: 'image/jpeg',
    });

    await api.put(`/member-upLoadThirdPhoto/${this.getMonth()}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  }

  async uploadSecondPhoto(secondPhoto: string) {
    const formData = new FormData();

    formData.append('photo', {
      uri: secondPhoto,
      name: 'image.jpg',
      type: 'image/jpeg',
    });

    await api.put(`/member-upLoadSecondPhoto/${this.getMonth()}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  }

  async uploadThirdPhoto(thirdPhoto: string) {
    const formData = new FormData();

    formData.append('photo', {
      uri: thirdPhoto,
      name: 'image.jpg',
      type: 'image/jpeg',
    });

    await api.put(`/member-upLoadThirdPhoto/${this.getMonth()}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  }

  async uploadPhotos(
    firstPhoto: string,
    secondPhoto: string,
    thirdPhoto: string
  ) {
    await this.uploadFirstPhoto(firstPhoto);
    await this.uploadSecondPhoto(secondPhoto);
    await this.uploadThirdPhoto(thirdPhoto);
  }
}

export default new MemberProgressPhotosService();
