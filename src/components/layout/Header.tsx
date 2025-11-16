import React from 'react';
import { Dumbbell, LogOut } from 'lucide-react';

interface HeaderProps {
  onLogout: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onLogout }) => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50 border-b-2 border-emerald-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-linear-to-r from-emerald-400 to-teal-500 rounded-xl p-2 shadow-lg">
              <Dumbbell className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-linear-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                AppFit
              </h1>
              <p className="text-xs text-gray-500">Plataforma Integrada</p>
            </div>
          </div>

          <button
            onClick={onLogout}
            className="flex items-center space-x-2 px-4 py-2 bg-red-50 text-red-600 rounded-xl hover:bg-red-100 transition"
          >
            <LogOut className="w-4 h-4" />
            <span className="hidden sm:inline">Sair</span>
          </button>
        </div>
      </div>
    </header>
  );
};