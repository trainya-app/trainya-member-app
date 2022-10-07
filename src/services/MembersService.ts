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
}

export default new MembersService();
