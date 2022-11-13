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

export interface IWorkoutPlan {
  id: number;
  employee_id: number;
  goal: string;
  workoutPlanWorkout: IWorkoutPlanWorkout[];
}

export interface IMemberWorkoutPlan {
  memberWorkoutPlan: {
    id: number;
    member_id: number;
    workouts_plan_id: number;
    started_at: Date;
    finished_at: Date;
    workoutPlan: IWorkoutPlan;
  };
}

interface IMemberWorkoutPlanData {
  data: IMemberWorkoutPlan;
}

export interface IMemberPhotosProgress {
  month: {
    name: string;
  };
  firstPhoto_url: string;
  secondPhoto_url: string;
  thirdPhoto_url: string;
}

interface IMemberPhotosProgressData {
  data: {
    memberPhotosProgress: IMemberPhotosProgress[];
  };
}

interface IWorkoutsFinished {
  id: number;
  is_complete: boolean;
  workoutPlanWorkoutId: number;
}

interface IWorkoutsFinishedData {
  data: {
    finishedWorkouts: IWorkoutsFinished[];
  };
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

  async listAllMemberPhotoProgress() {
    const { data }: IMemberPhotosProgressData = await api.get(
      '/member-photos-progress'
    );
    return data.memberPhotosProgress;
  }

  async editMemberProfileInfo(
    memberId: number,
    name: string,
    email: string,
    phone: string,
    weight: number,
    height: number
  ) {
    const { data } = await api.put(`/members/${memberId}`, {
      name,
      email,
      phone,
      weight,
      height,
    });

    return data;
  }

  async getWorkoutPlanWorkoutsFinished() {
    const { data }: IWorkoutsFinishedData = await api.get(
      '/member-finished-workouts'
    );

    return data.finishedWorkouts.map((item) => ({
      workoutPlanWorkoutId: item.workoutPlanWorkoutId,
      isTrained: item.is_complete,
    }));
  }
}

export default new MembersService();
