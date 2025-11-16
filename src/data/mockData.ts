import type{ UserData, NutritionistData, PersonalData, Training } from '../types/index.ts';

export const userData: UserData = {
  name: 'João Silva',
  photo: 'https://api.dicebear.com/7.x/avataaars/svg?seed=John',
  goal: 'Perda de Peso e Definição Muscular',
  currentWeight: 85,
  targetWeight: 78,
  height: 175,
  age: 28,
  startDate: '15/09/2024',
  measurements: {
    chest: 98,
    waist: 88,
    hips: 95,
    arms: 35,
    thighs: 58
  },
  progress: 65
};

export const nutritionistData: NutritionistData = {
  name: 'Dra. Maria Oliveira',
  specialty: 'Nutricionista Esportiva',
  photo: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Maria',
  nextAppointment: '10/11/2024 - 14:00',
  mealPlan: {
    calories: 2200,
    protein: 165,
    carbs: 220,
    fats: 73
  },
  notes: 'Aumentar ingestão de proteínas no pós-treino'
};

export const personalData: PersonalData = {
  name: 'Prof. Carlos Santos',
  specialty: 'Personal Trainer',
  photo: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Carlos',
  nextSession: '06/11/2024 - 07:00',
  currentProgram: 'Hipertrofia - Fase 2',
  weeklyWorkouts: 5,
  notes: 'Foco em membros inferiores esta semana'
};

export const weekDays = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'];

export const weeklyTraining: Training[] = [
  { day: 'Segunda', focus: 'Peito e Tríceps', duration: '60 min' },
  { day: 'Terça', focus: 'Costas e Bíceps', duration: '65 min' },
  { day: 'Quarta', focus: 'Pernas (Foco)', duration: '75 min' },
  { day: 'Quinta', focus: 'Ombros e Core', duration: '55 min' },
  { day: 'Sexta', focus: 'Pernas e Glúteos', duration: '70 min' },
  { day: 'Sábado', focus: 'Cardio HIIT', duration: '30 min' },
  { day: 'Domingo', focus: 'Descanso Ativo', duration: '---' }
];
