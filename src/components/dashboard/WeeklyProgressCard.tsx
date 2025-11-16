import React from 'react';
import { TrendingUp } from 'lucide-react';

export const WeeklyProgressCard: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
        <TrendingUp className="w-6 h-6 mr-2 text-blue-500" />
        Evolução Semanal
      </h3>
      
      <div className="space-y-4">
        <div className="p-4 bg-bg-linear-to-r from-blue-50 to-indigo-50 rounded-xl">
          <p className="text-sm text-gray-600 mb-2">Peso perdido</p>
          <p className="text-2xl font-bold text-blue-600">-2.5 kg</p>
          <p className="text-xs text-gray-500 mt-1">Últimas 4 semanas</p>
        </div>
        
        <div className="p-4 bg-bg-linear-to-r from-emerald-50 to-teal-50 rounded-xl">
          <p className="text-sm text-gray-600 mb-2">Treinos realizados</p>
          <p className="text-2xl font-bold text-emerald-600">18 de 20</p>
          <p className="text-xs text-gray-500 mt-1">Taxa de conclusão: 90%</p>
        </div>
        
        <div className="p-4 bg-bg-linear-to-r from-amber-50 to-orange-50 rounded-xl">
          <p className="text-sm text-gray-600 mb-2">Aderência à dieta</p>
          <p className="text-2xl font-bold text-amber-600">87%</p>
          <p className="text-xs text-gray-500 mt-1">Últimos 7 dias</p>
        </div>
      </div>
    </div>
  );
};