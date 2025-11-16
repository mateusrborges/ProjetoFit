import React from 'react';
import { Target, Apple, Dumbbell, type LucideIcon } from 'lucide-react';
import clsx from "clsx"

interface NavigationCardsProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

interface Section {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  colors: string;
  iconColor: string;
}

export const NavigationCards: React.FC<NavigationCardsProps> = ({
  activeSection,
  onSectionChange
}) => {
  const sections: Section[] = [
    {
      id: 'dashboard',
      icon: Target,
      title: 'Dashboard',
      description: 'Visão geral dos seus dados',
      colors: 'from-emerald-500 to-teal-500',
      iconColor: 'text-emerald-500'
    },
    {
      id: 'nutritionist',
      icon: Apple,
      title: 'Nutricionista',
      description: 'Plano alimentar e consultas',
      colors: 'from-amber-500 to-orange-500',
      iconColor: 'text-amber-500'
    },
    {
      id: 'personal',
      icon: Dumbbell,
      title: 'Personal Trainer',
      description: 'Treinos e acompanhamento',
      colors: 'from-blue-500 to-indigo-500',
      iconColor: 'text-blue-500'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      {sections.map((section) => {
        const Icon = section.icon;
        const isActive = activeSection === section.id;

        return (
          <button
            key={section.id}
            onClick={() => onSectionChange(section.id)}
            className={clsx(
              "p-6 rounded-2xl shadow-lg transition transform hover:scale-105",
              isActive
                ? ["bg-linear-to-r", section.colors, "text-white"]
                : "bg-white text-gray-700 hover:shadow-xl"
            )}
          >
            <Icon
              className={clsx(
                "w-8 h-8 mb-3",
                isActive ? "text-white" : section.iconColor
              )}
            />

            <h3 className="text-lg font-bold">{section.title}</h3>

            <p
              className={clsx(
                "text-sm mt-1",
                isActive ? "text-white text-opacity-80" : "text-gray-500"
              )}
            >
              {section.description}
            </p>
          </button>
        );
      })}
    </div>
  );
};
