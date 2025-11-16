import React from 'react';
import { Target } from 'lucide-react';
import type { UserData } from '../../types';

interface GoalProgressCardProps {
  userData: UserData;
}

export const GoalProgressCard: React.FC<GoalProgressCardProps> = ({ userData }) => {
  return (
    <div className="bg-linear-to-r from-emerald-500 to-teal-500 rounded-2xl shadow-lg p-6 text-white">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-xl font-bold mb-2 flex items-center">
            <Target className="w-6 h-6 mr-2" />
            Objetivo Atual
          </h3>
          <p className="text-emerald-50 text-lg">{userData.goal}</p>
        </div>
        <div className="bg-white bg-opacity-20 rounded-xl px-4 py-2 backdrop-blur-sm">
          <p className="text-2xl text-black font-bold">{userData.progress}%</p>
          <p className="text-xs text-emerald-50">Progresso</p>
        </div>
      </div>
      
      <div className="bg-white bg-opacity-20 rounded-full h-3 overflow-hidden backdrop-blur-sm">
        <div
          className="bg-white h-full rounded-full transition-all duration-1000 shadow-lg"
          style={{ width: `${userData.progress}%` }}
        ></div>
      </div>
    </div>
  );
};