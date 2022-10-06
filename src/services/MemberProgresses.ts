import { api } from './api';

interface IMemberProgress {
  current_progress: number;
  month: {
    name: string;
  };
}

export async function getMonthMemberProgresses() {
  const { data } = await api.get('/memberMonthsDayProgressRoutes-member');
  return data.memberMonthsDayProgresses.map((item: IMemberProgress) => ({
    progress: item.current_progress,
    month: item.month.name,
  }));
}
