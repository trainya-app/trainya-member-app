import { api } from './api';

export async function getAll() {
  const { data } = await api.get('/member-workouts');
  return data.memberWorkouts.workoutPlan.workoutPlanWorkout;
}
