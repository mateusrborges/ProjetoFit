import React from 'react';
import { Scale } from 'lucide-react';
import type { UserData } from '../../types';

interface BodyMeasurementsCardProps {
  measurements: UserData['measurements'];
}

export const BodyMeasurementsCard: React.FC<BodyMeasurementsCardProps> = ({ measurements }) => {
  const measurementLabels: Record<keyof typeof measurements, string> = {
    chest: 'Peito',
    waist: 'Cintura',
    hips: 'Quadril',
    arms: 'Braços',
    thighs: 'Coxas'
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
        <Scale className="w-6 h-6 mr-2 text-emerald-500" />
        Medidas Corporais
      </h3>
      
      <div className="space-y-3">
        {Object.entries(measurements).map(([key, value]) => (
          <div key={key} className="flex justify-between items-center p-3 bg-gray-50 rounded-xl">
            <span className="text-gray-700 font-medium">
              {measurementLabels[key as keyof typeof measurements]}
            </span>
            <span className="text-emerald-600 font-bold">{value} cm</span>
          </div>
        ))}
      </div>
    </div>
  );
};