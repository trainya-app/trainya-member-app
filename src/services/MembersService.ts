import { api } from './api';

interface IMemberProgress {
  current_progress: number;
  month: {
    name: string;
  };
}

export interface IWorkoutExercise {
  id: number;
  workout_id: number;
  exercise_id: number;
  sets: number;
  repetitions: number;
  duration: number;
  exercise: {
    id: number;
    name: string;
    comment: string;
    needs_equipment: boolean;
  };
}

export interface IWorkout {
  id: number;
  employee_id: number;
  title: string;
  description: string;
  type: string;
  preview_image_url: string;
  video_url: string;
  level: number;
  duration: string;
  workoutExercise: IWorkoutExercise[];
}

export interface IWorkoutPlanWorkout {
  id: number;
  workout_id: number;
  workout: IWorkout;
}

export interface IMemberWorkoutPlan {
  memberWorkoutPlan: {
    id: number;
    member_id: number;
    workouts_plan_id: number;
    started_at: Date;
    finished_at: Date;
    workoutPlan: {
      id: number;
      employee_id: number;
      goal: string;
      workoutPlanWorkout: IWorkoutPlanWorkout[];
    };
  };
}

interface IMemberWorkoutPlanData {
  data: IMemberWorkoutPlan;
}

class MembersService {
  async getAllMemberWorkoutPlans(user_id: number) {
    const { data }: IMemberWorkoutPlanData = await api.get(
      `/memberWorkoutPlans/${user_id}`
    );
    return data.memberWorkoutPlan;
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

    await api.put('/members-avatar', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  }
}

export default new MembersService();
