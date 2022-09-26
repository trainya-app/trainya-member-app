import { api } from '../services/api';

export async function listWorkoutPlanByMemberId(memberId: string) {
  const { data } = await api.get(`memberWorkoutPlans/${memberId}`);
  return data;
}
