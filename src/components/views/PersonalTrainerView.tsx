import React from 'react';
import { Calendar, Dumbbell } from 'lucide-react';
import type { PersonalData } from '../../types';
import { weeklyTraining } from '../../data/mockData';

interface PersonalTrainerViewProps {
  personalData: PersonalData;
}

export const PersonalTrainerView: React.FC<PersonalTrainerViewProps> = ({ personalData }) => {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6 mb-6">
          <img
            src={personalData.photo}
            alt="Personal Trainer"
            className="w-24 h-24 rounded-2xl border-4 border-blue-100 shadow-lg"
          />
          
          <div className="flex-1 text-center sm:text-left">
            <h2 className="text-2xl font-bold text-gray-800 mb-1">{personalData.name}</h2>
            <p className="text-blue-600 font-semibold mb-3">{personalData.specialty}</p>
            
            <div className="flex items-center justify-center sm:justify-start space-x-2 bg-blue-50 px-4 py-2 rounded-xl">
              <Calendar className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-gray-700">
                Próximo treino: {personalData.nextSession}
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <div className="bg-linear-to-r from-blue-50 to-indigo-50 rounded-xl p-4 text-center">
            <p className="text-sm text-gray-600 mb-1">Programa Atual</p>
            <p className="text-lg font-bold text-blue-600">{personalData.currentProgram}</p>
          </div>
          <div className="bg-linear-to-r from-purple-50 to-pink-50 rounded-xl p-4 text-center">
            <p className="text-sm text-gray-600 mb-1">Treinos por Semana</p>
            <p className="text-3xl font-bold text-purple-600">{personalData.weeklyWorkouts}x</p>
          </div>
          <div className="bg-linear-to-r from-emerald-50 to-teal-50 rounded-xl p-4 text-center">
            <p className="text-sm text-gray-600 mb-1">Próxima Avaliação</p>
            <p className="text-lg font-bold text-emerald-600">12 dias</p>
          </div>
        </div>

        <div className="bg-linear-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 rounded-xl p-4">
          <h4 className="font-bold text-gray-800 mb-2 flex items-center">
            <Dumbbell className="w-5 h-5 mr-2 text-blue-600" />
            Observações do Personal
          </h4>
          <p className="text-gray-700">{personalData.notes}</p>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Treinos da Semana</h3>
        <div className="space-y-3">
          {weeklyTraining.map((training, idx) => (
            <div key={idx} className="p-4 bg-linear-to-r from-blue-50 to-indigo-50 rounded-xl hover:shadow-md transition cursor-pointer">
              <div className="flex justify-between items-center">
                <div>
                  <span className="font-semibold text-gray-800 block">{training.day}</span>
                  <span className="text-sm text-gray-600">{training.focus}</span>
                </div>
                <div className="text-right">
                  <span className="text-sm text-blue-600 font-medium block">{training.duration}</span>
                  {training.day !== 'Domingo' && (
                    <span className="text-xs text-gray-500">Ver exercícios →</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
