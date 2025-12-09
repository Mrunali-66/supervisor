import React, { useState } from 'react';
import { User, LogOut, Settings, LayoutDashboard, Users, CheckSquare, Bell, Sliders, Globe, Moon, Sun } from 'lucide-react';
import { useAppContext } from '../App';

const MainLayout = ({ 
  currentPage, 
  setCurrentPage,
  userName,
  userPhoto,
  setUserPhoto,
  setUserName,
  onProfileClick,
  onLogout,
  children 
}) => {
  const { lang, setLang, isDark, setIsDark } = useAppContext();
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const translations = {
    en: {
      ministry: 'Ministry of Health and Family Welfare',
      govt: 'Government of India',
      asha: 'ASHA Supervisor',
      mainMenu: 'Main Menu',
      dashboard: 'Dashboard',
      workers: 'Workers',
      tasks: 'Tasks',
      alerts: 'Alerts',
      settings: 'Settings',
      logout: 'Logout',
      language: 'Language',
      theme: 'Theme',
      lightMode: 'Light',
      darkMode: 'Dark'
    },
    mr: {
      ministry: 'आरोग्य आणि कुटुंब कल्याण मंत्रालय',
      govt: 'भारत सरकार',
      asha: 'आशा पर्यवेक्षक',
      mainMenu: 'मुख्य मेनू',
      dashboard: 'डॅशबोर्ड',
      workers: 'कार्यकर्ते',
      tasks: 'कार्ये',
      alerts: 'सूचना',
      settings: 'सेटिंग्ज',
      logout: 'लॉग आउट',
      language: 'भाषा',
      theme: 'थीम',
      lightMode: 'प्रकाश',
      darkMode: 'गडद'
    }
  };

  const t = (key) => translations[lang][key] || key;

  const navItems = [
    { id: 'dashboard', label: t('dashboard'), icon: LayoutDashboard },
    { id: 'workers', label: t('workers'), icon: Users },
    { id: 'tasks', label: t('tasks'), icon: CheckSquare },
    { id: 'alerts', label: t('alerts'), icon: Bell },
    { id: 'settings', label: t('settings'), icon: Sliders }
  ];

  // Theme Colors
  const headerBg = isDark ? 'bg-gray-900 border-gray-800' : 'bg-gradient-to-r from-blue-800 to-blue-700';
  const sidebarBg = isDark ? 'bg-gray-800' : 'bg-gradient-to-b from-blue-950 via-blue-900 to-blue-850';
  const cardBg = isDark ? 'bg-gray-800' : 'bg-white';
  const textPrimary = isDark ? 'text-gray-100' : 'text-gray-900';
  const textSecondary = isDark ? 'text-gray-400' : 'text-gray-600';
  const borderColor = isDark ? 'border-gray-700' : 'border-gray-300';

  return (
    <div className="flex flex-col min-h-screen">
      {/* Government Header - Top Blue Bar */}
      <div className={`${isDark ? 'bg-gray-950' : 'bg-blue-900'} text-white py-2 px-8 text-xs font-semibold`}>
        <div className="flex justify-between items-center">
          <span>{t('ministry')}</span>
          <span>{t('govt')}</span>
        </div>
      </div>

      {/* Main Header */}
      <div className={`${headerBg} px-8 py-5 shadow-md border-b-4 border-orange-400`}>
        <div className="flex items-center justify-between">
          {/* Logo and Title */}
          <div className="flex items-center gap-5">
            <div className={`w-16 h-16 ${isDark ? 'bg-gray-700' : 'bg-white'} rounded-lg flex items-center justify-center shadow-md border-2 border-orange-400`}>
              <span className={`${isDark ? 'text-white' : 'text-blue-900'} font-bold text-2xl`}>🇮🇳</span>
            </div>
            <div className="border-l-2 border-blue-500 pl-5">
              <p className="text-blue-100 text-sm font-semibold uppercase tracking-wider">ASHA Workers Management</p>
              <h1 className="text-white text-2xl font-bold mt-1">आशा कार्यकर्ता व्यवस्थापन</h1>
              <p className="text-blue-200 text-xs mt-1">Ministry of Health and Family Welfare</p>
            </div>
          </div>

          {/* Language, Theme, and Admin Profile */}
          <div className="flex items-center gap-6">
            {/* Language Toggle */}
            <div className={`flex gap-1 items-center ${isDark ? 'bg-gray-700' : 'bg-blue-700'} rounded-lg p-2`}>
              <Globe size={18} className="text-white" />
              <button 
                onClick={() => setLang('en')} 
                className={`px-3 py-1 rounded font-bold transition-all ${lang === 'en' ? 'bg-white text-blue-900' : 'bg-transparent text-white hover:bg-blue-600'}`}
              >
                EN
              </button>
              <button 
                onClick={() => setLang('mr')} 
                className={`px-3 py-1 rounded font-bold transition-all ${lang === 'mr' ? 'bg-white text-blue-900' : 'bg-transparent text-white hover:bg-blue-600'}`}
              >
                मर
              </button>
            </div>

            {/* Theme Toggle */}
            <div className={`flex gap-1 items-center ${isDark ? 'bg-gray-700' : 'bg-blue-700'} rounded-lg p-2`}>
              {isDark ? <Moon size={18} className="text-blue-200" /> : <Sun size={18} className="text-yellow-300" />}
              <button 
                onClick={() => setIsDark(false)} 
                className={`px-3 py-1 rounded font-bold transition-all ${!isDark ? 'bg-white text-blue-900' : 'bg-transparent text-white hover:bg-blue-600'}`}
              >
                ☀️
              </button>
              <button 
                onClick={() => setIsDark(true)} 
                className={`px-3 py-1 rounded font-bold transition-all ${isDark ? 'bg-white text-blue-900' : 'bg-transparent text-white hover:bg-blue-600'}`}
              >
                🌙
              </button>
            </div>

            {/* Admin Profile */}
            <div className="flex items-center gap-6 border-l-2 border-blue-500 pl-6">
              <div className="text-right">
                <p className="text-white font-bold text-sm">{userName}</p>
                <p className="text-blue-200 text-xs font-medium mt-1">Senior ASHA Supervisor</p>
              </div>
              <div className="relative">
                <button
                  onClick={() => setShowProfileMenu(!showProfileMenu)}
                  className="w-14 h-14 rounded-lg border-3 border-white overflow-hidden flex items-center justify-center bg-white hover:shadow-lg transition-shadow flex-shrink-0"
                >
                  {userPhoto ? (
                    <img src={userPhoto} alt="Profile" className="w-full h-full object-cover" />
                  ) : (
                    <User size={28} className="text-blue-900" />
                  )}
                </button>

                {/* Profile Dropdown Menu */}
                {showProfileMenu && (
                  <div className={`absolute right-0 mt-2 w-56 ${cardBg} border border-gray-300 shadow-xl z-50 rounded-sm`}>
                    <div className={`px-4 py-4 border-b ${borderColor} ${isDark ? 'bg-gray-700' : 'bg-gray-50'}`}>
                      <p className={`text-sm font-bold ${isDark ? 'text-white' : 'text-blue-900'}`}>{userName}</p>
                      <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-blue-700'} mt-1`}>Senior ASHA Supervisor</p>
                    </div>
                    <button
                      onClick={() => {
                        onProfileClick();
                        setShowProfileMenu(false);
                      }}
                      className={`w-full text-left px-4 py-3 hover:${isDark ? 'bg-gray-700' : 'bg-blue-50'} flex items-center gap-3 ${isDark ? 'text-white' : 'text-gray-700'} font-semibold text-sm border-b ${borderColor} transition-colors`}
                    >
                      <Settings size={18} className="text-blue-900" />
                      {t('settings')}
                    </button>
                    <button
                      onClick={() => {
                        onLogout();
                        setShowProfileMenu(false);
                      }}
                      className={`w-full text-left px-4 py-3 hover:${isDark ? 'bg-red-900 bg-opacity-30' : 'bg-red-50'} flex items-center gap-3 text-red-600 font-semibold text-sm transition-colors`}
                    >
                      <LogOut size={18} />
                      {t('logout')}
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex flex-1">
        {/* Sidebar Navigation */}
        <div className={`w-72 ${sidebarBg} shadow-2xl flex flex-col sticky top-20`}>
          {/* Menu Header */}
          <div className={`px-6 py-4 border-b ${borderColor} ${isDark ? 'bg-gray-900' : 'bg-blue-900'}`}>
            <h3 className="text-white font-bold text-sm uppercase tracking-wide">{t('mainMenu')}</h3>
          </div>

          {/* Menu Items */}
          <div className="p-0 flex-1 overflow-y-auto">
            <nav className="space-y-1">
              {navItems.map((item) => {
                const IconComponent = item.icon;
                const isActive = currentPage === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setCurrentPage(item.id)}
                    className={`w-full flex items-center gap-4 px-6 py-4 font-semibold text-sm transition-colors duration-200 border-l-4 ${
                      isActive
                        ? 'bg-orange-500 text-white border-l-orange-600'
                        : isDark ? 'text-blue-100 hover:bg-gray-700 border-l-gray-700' : 'text-blue-100 hover:bg-blue-700 border-l-blue-800'
                    }`}
                  >
                    <IconComponent size={20} className="flex-shrink-0" />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Logout Button at Bottom */}
          <div className={`p-4 border-t ${borderColor} ${isDark ? 'bg-gray-900' : 'bg-blue-900'}`}>
            <button
              onClick={() => {
                onLogout();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-red-600 hover:bg-red-700 text-white font-bold text-sm transition-colors rounded-sm shadow-md"
            >
              <LogOut size={18} />
              {t('logout')}
            </button>
          </div>

          {/* Footer */}
          <div className={`px-4 py-3 text-center border-t ${borderColor} ${isDark ? 'bg-gray-950' : 'bg-blue-950'}`}>
            <p className="text-blue-300 text-xs leading-relaxed">© 2024 Ministry of Health &</p>
            <p className="text-blue-300 text-xs">Family Welfare, Govt. of India</p>
          </div>
        </div>

        {/* Main Content */}
        <div className={`flex-1 overflow-auto`}>
          {children}
        </div>
      </div>

      {/* Bottom Footer */}
      <div className={`${isDark ? 'bg-gray-900 border-gray-800' : 'bg-blue-900 border-blue-800'} text-blue-200 text-xs py-3 px-8 border-t text-center`}>
        <p>© 2024 All Rights Reserved. Ministry of Health and Family Welfare, Government of India</p>
      </div>
    </div>
  );
};

export default MainLayout;