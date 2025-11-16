import React from 'react';
import { Camera } from 'lucide-react';
import type { UserData } from '../../types';

interface UserProfileCardProps {
    userData: UserData;
}

export const UserProfileCard: React.FC<UserProfileCardProps> = ({ userData }) => {
    return (
        <div className="bg-red-100 rounded-2xl shadow-lg p-6">
            <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
                <div className="relative">
                    <img
                        src={userData.photo}
                        alt="Profile"
                        className="w-24 h-24 rounded-2xl border-4 border-emerald-100 shadow-lg"
                    />
                    <button className="absolute -bottom-2 -right-2 bg-emerald-500 p-2 rounded-xl shadow-lg hover:bg-emerald-600 transition">
                        <Camera className="w-4 h-4 text-white" />
                    </button>
                </div>

                <div className="flex-1 text-center sm:text-left">
                    <h2 className="text-3xl font-bold text-gray-800 mb-1">{userData.name}</h2>
                    <p className="text-gray-500 mb-4">Membro desde {userData.startDate}</p>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                        <div className="bg-linear-to-r from-emerald-50 to-teal-50 rounded-xl p-3">
                            <p className="text-xs text-gray-600 mb-1">Peso Atual</p>
                            <p className="text-xl font-bold text-emerald-600">{userData.currentWeight}kg</p>
                        </div>
                        <div className="bg-linear-to-r from-blue-50 to-indigo-50 rounded-xl p-3">
                            <p className="text-xs text-gray-600 mb-1">Meta</p>
                            <p className="text-xl font-bold text-blue-600">{userData.targetWeight}kg</p>
                        </div>
                        <div className="bg-linear-to-r from-purple-50 to-pink-50 rounded-xl p-3">
                            <p className="text-xs text-gray-600 mb-1">Altura</p>
                            <p className="text-xl font-bold text-purple-600">{userData.height}cm</p>
                        </div>
                        <div className="bg-linear-to-r from-amber-50 to-orange-50 rounded-xl p-3">
                            <p className="text-xs text-gray-600 mb-1">Idade</p>
                            <p className="text-xl font-bold text-amber-600">{userData.age} anos</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};