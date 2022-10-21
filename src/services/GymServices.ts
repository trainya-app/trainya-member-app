import { api } from './api';

class GymsService {
  async getGymData(gymId: number) {
    const { data } = await api.get(`/gyms/${gymId}`);
    return data;
  }
}

export default new GymsService();
