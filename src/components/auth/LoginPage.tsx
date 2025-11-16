import React from 'react';
import { User, Dumbbell } from 'lucide-react';

interface LoginPageProps {
  username: string;
  password: string;
  error: string;
  onUsernameChange: (value: string) => void;
  onPasswordChange: (value: string) => void;
  onLogin: () => void;
  onKeyPress: (e: React.KeyboardEvent) => void;
}

export const LoginPage: React.FC<LoginPageProps> = ({
  username,
  password,
  error,
  onUsernameChange,
  onPasswordChange,
  onLogin,
  onKeyPress
}) => {
  return (
    <div className="min-h-screen bg-linear-to-r  from-emerald-50 via-teal-50 to-cyan-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iIzEwYjk4MSIgc3Ryb2tlLW9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-40"></div>
      
      <div className="w-full max-w-md relative">
        <div className="bg-white rounded-3xl shadow-2xl p-8 backdrop-blur-sm bg-opacity-95">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-linear-to-r  from-emerald-400 to-teal-500 rounded-2xl mb-4 shadow-lg">
              <Dumbbell className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold bg-linear-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-2">
              AppFit
            </h1>
            <p className="text-gray-600">Sua saúde integrada em um só lugar</p>
          </div>

          <div className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Usuário
              </label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  value={username}
                  onChange={(e) => onUsernameChange(e.target.value)}
                  onKeyPress={onKeyPress}
                  className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition"
                  placeholder="Digite seu usuário"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Senha
              </label>
              <div className="relative">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => onPasswordChange(e.target.value)}
                  onKeyPress={onKeyPress}
                  className="w-full pl-4 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition"
                  placeholder="Digite sua senha"
                />
              </div>
            </div>

            {error && (
              <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-lg">
                <p className="text-red-700 text-sm">{error}</p>
              </div>
            )}

            <button
              onClick={onLogin}
              className="w-full bg-linear-to-r from-emerald-500 to-teal-500 text-white py-3 rounded-xl font-semibold hover:from-emerald-600 hover:to-teal-600 transition shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Entrar
            </button>

            <div className="text-center text-sm text-gray-500 mt-4">
              Use: <span className="font-semibold text-emerald-600">adm55</span> / <span className="font-semibold text-emerald-600">adm55</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};