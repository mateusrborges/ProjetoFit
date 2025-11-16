import React from 'react';
import type { UserData } from '../../types';
import { UserProfileCard } from '../dashboard/UserProfileCard';
import { GoalProgressCard } from '../dashboard/GoalProgressCard';
import { BodyMeasurementsCard } from '../dashboard/BodyMeasurementsCard';
import { WeeklyProgressCard } from '../dashboard/WeeklyProgressCard';

interface DashboardViewProps {
  userData: UserData;
}

export const DashboardView: React.FC<DashboardViewProps> = ({ userData }) => {
  return (
    <div className="space-y-6">
      <UserProfileCard userData={userData} />
      <GoalProgressCard userData={userData} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <BodyMeasurementsCard measurements={userData.measurements} />
        <WeeklyProgressCard />
      </div>
    </div>
  );
};
