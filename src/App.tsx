import React, { useState } from 'react';
import "../src/styles/index.css"
import { LoginPage } from './components/auth/LoginPage';
import { Header } from './components/layout/Header';
import { NavigationCards } from './components/layout/NavegationCards';
import { DashboardView } from './components/views/DashboardView';
import { NutritionistView } from './components/views/NutritionistView';
import { PersonalTrainerView } from './components/views/PersonalTrainerView';
import { userData, nutritionistData, personalData } from './data/mockData';


const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [activeSection, setActiveSection] = useState('dashboard');

  const handleLogin = () => {
    if (username === 'adm55' && password === 'adm55') {
      setIsLoggedIn(true);
      setError('');
    } else {
      setError('Usuário ou senha incorretos');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleLogin();
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
    setPassword('');
    setActiveSection('dashboard');
  };

  if (!isLoggedIn) {
    return ( 
      <LoginPage
        username={username}
        password={password}
        error={error}
        onUsernameChange={setUsername}
        onPasswordChange={setPassword}
        onLogin={handleLogin}
        onKeyPress={handleKeyPress}
      />
    );
  }

  return (
    <div className="min-h-screen bg-linear-to-r from-emerald-50 via-teal-50 to-cyan-50">
      <Header onLogout={handleLogout} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <NavigationCards
          activeSection={activeSection}
          onSectionChange={setActiveSection}
        />

        {activeSection === 'dashboard' && <DashboardView userData={userData} />}
        {activeSection === 'nutritionist' && <NutritionistView nutritionistData={nutritionistData} />}
        {activeSection === 'personal' && <PersonalTrainerView personalData={personalData} />}
      </div>
    </div>
  );
};

export default App;
