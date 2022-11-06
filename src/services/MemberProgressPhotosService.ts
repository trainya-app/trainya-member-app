import { api } from './api';

class MemberProgressPhotosService {
  async uploadFirstPhoto(firstPhoto: string, month: number) {
    const formData = new FormData();

    formData.append('photo', {
      uri: firstPhoto,
      name: 'image.jpg',
      type: 'image/jpeg',
    });

    await api.put(`/member-upLoadFirstPhoto/${month}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  }

  async uploadSecondPhoto(secondPhoto: string, month: number) {
    const formData = new FormData();

    formData.append('photo', {
      uri: secondPhoto,
      name: 'image.jpg',
      type: 'image/jpeg',
    });

    await api.put(`/member-upLoadSecondPhoto/${month}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  }

  async uploadThirdPhoto(thirdPhoto: string, month: number) {
    const formData = new FormData();

    formData.append('photo', {
      uri: thirdPhoto,
      name: 'image.jpg',
      type: 'image/jpeg',
    });

    await api.put(`/member-upLoadThirdPhoto/${month}`, formData, {
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
    const month = new Date().getMonth() + 1;
    await this.uploadFirstPhoto(firstPhoto, month);
    await this.uploadSecondPhoto(secondPhoto, month);
    await this.uploadThirdPhoto(thirdPhoto, month);
  }
}

export default new MemberProgressPhotosService();
