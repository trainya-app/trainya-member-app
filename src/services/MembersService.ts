import { api } from './api';

interface IMemberProgress {
  current_progress: number;
  month: {
    name: string;
  };
}
class MembersService {
  async getAllMemberWorkouts() {
    const { data } = await api.get('/member-workouts');
    return data.memberWorkouts.workoutPlan.workoutPlanWorkout;
  }

  async getMonthMemberProgresses() {
    const { data } = await api.get('/memberMonthsDayProgressRoutes-member');
    return data.memberMonthsDayProgresses.map((item: IMemberProgress) => ({
      progress: item.current_progress,
      month: item.month.name,
    }));
  }

  async getGymByMemberId() {
    const { data } = await api.get('/gyms-member');
    return data;
  }

  async getMemberScheduledClasses() {
    const { data } = await api.get('/member-classes');
    return data.classes;
  }

  async updateAvatar(imageUri: string) {
    const formData = new FormData();

    formData.append('avatar', {
      uri: imageUri,
      name: 'image.jpg',
      type: 'image/jpeg',
    });

    const { data } = await api.put('/members-avatar', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    console.log(data);
  }
}

export default new MembersService();
