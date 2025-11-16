import React from 'react';
import { Calendar, Apple } from 'lucide-react';
import type { NutritionistData } from '../../types';
import { weekDays } from '../../data/mockData';

interface NutritionistViewProps {
  nutritionistData: NutritionistData;
}

export const NutritionistView: React.FC<NutritionistViewProps> = ({ nutritionistData }) => {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6 mb-6">
          <img
            src={nutritionistData.photo}
            alt="Nutritionist"
            className="w-24 h-24 rounded-2xl border-4 border-amber-100 shadow-lg"
          />
          
          <div className="flex-1 text-center sm:text-left">
            <h2 className="text-2xl font-bold text-gray-800 mb-1">{nutritionistData.name}</h2>
            <p className="text-amber-600 font-semibold mb-3">{nutritionistData.specialty}</p>
            
            <div className="flex items-center justify-center sm:justify-start space-x-2 bg-amber-50 px-4 py-2 rounded-xl">
              <Calendar className="w-4 h-4 text-amber-600" />
              <span className="text-sm font-medium text-gray-700">
                Próxima consulta: {nutritionistData.nextAppointment}
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
          <div className="bg-gradient-r from-red-50 to-pink-50 rounded-xl p-4 text-center">
            <p className="text-sm text-gray-600 mb-1">Calorias</p>
            <p className="text-2xl font-bold text-red-600">{nutritionistData.mealPlan.calories}</p>
            <p className="text-xs text-gray-500">kcal/dia</p>
          </div>
          <div className="bg-gradientr from-blue-50 to-indigo-50 rounded-xl p-4 text-center">
            <p className="text-sm text-gray-600 mb-1">Proteínas</p>
            <p className="text-2xl font-bold text-blue-600">{nutritionistData.mealPlan.protein}g</p>
            <p className="text-xs text-gray-500">por dia</p>
          </div>
          <div className="bg-gradient-r from-amber-50 to-orange-50 rounded-xl p-4 text-center">
            <p className="text-sm text-gray-600 mb-1">Carboidratos</p>
            <p className="text-2xl font-bold text-amber-600">{nutritionistData.mealPlan.carbs}g</p>
            <p className="text-xs text-gray-500">por dia</p>
          </div>
          <div className="bg-gradient-r from-emerald-50 to-teal-50 rounded-xl p-4 text-center">
            <p className="text-sm text-gray-600 mb-1">Gorduras</p>
            <p className="text-2xl font-bold text-emerald-600">{nutritionistData.mealPlan.fats}g</p>
            <p className="text-xs text-gray-500">por dia</p>
          </div>
        </div>

        <div className="bg-gradient-r from-amber-50 to-orange-50 border-l-4 border-amber-500 rounded-xl p-4">
          <h4 className="font-bold text-gray-800 mb-2 flex items-center">
            <Apple className="w-5 h-5 mr-2 text-amber-600" />
            Observações do Nutricionista
          </h4>
          <p className="text-gray-700">{nutritionistData.notes}</p>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Plano Alimentar Semanal</h3>
        <div className="space-y-3">
          {weekDays.map((day, idx) => (
            <div key={idx} className="p-4 bg-gradient-r from-amber-50 to-orange-50 rounded-xl hover:shadow-md transition cursor-pointer">
              <div className="flex justify-between items-center">
                <span className="font-semibold text-gray-800">{day}</span>
                <span className="text-sm text-amber-600 font-medium">Ver detalhes →</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};