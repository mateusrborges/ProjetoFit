export interface UserData {
  name: string;
  photo: string;
  goal: string;
  currentWeight: number;
  targetWeight: number;
  height: number;
  age: number;
  startDate: string;
  measurements: {
    chest: number;
    waist: number;
    hips: number;
    arms: number;
    thighs: number;
  };
  progress: number;
}

export interface NutritionistData {
  name: string;
  specialty: string;
  photo: string;
  nextAppointment: string;
  mealPlan: {
    calories: number;
    protein: number;
    carbs: number;
    fats: number;
  };
  notes: string;
}

export interface PersonalData {
  name: string;
  specialty: string;
  photo: string;
  nextSession: string;
  currentProgram: string;
  weeklyWorkouts: number;
  notes: string;
}

export interface Training {
  day: string;
  focus: string;
  duration: string;
}
