import React, { useState } from 'react';
import { User, LogOut, Settings, LayoutDashboard, Users, CheckSquare, Bell, Sliders, Menu, X } from 'lucide-react';

const MainLayout = ({ 
  currentPage, 
  setCurrentPage,
  lang,
  userName,
  userPhoto,
  setUserPhoto,
  setUserName,
  onProfileClick,
  onLogout,
  children 
}) => {
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const translations = {
    en: {
      dashboard: 'Dashboard',
      workers: 'Workers',
      tasks: 'Tasks',
      alerts: 'Alerts',
      settings: 'Settings',
      menu: 'Menu',
      logout: 'Logout',
      asha: 'ASHA Supervisor',
      ministry: 'Ministry of Health and Family Welfare',
      govt: 'Government of India'
    },
    mr: {
      dashboard: 'डॅशबोर्ड',
      workers: 'कार्यकर्ते',
      tasks: 'कार्ये',
      alerts: 'सूचना',
      settings: 'सेटिंग्ज',
      menu: 'मेनू',
      logout: 'लॉग आउट',
      asha: 'आशा पर्यवेक्षक',
      ministry: 'आरोग्य आणि कुटुंब कल्याण मंत्रालय',
      govt: 'भारत सरकार'
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

  return (
    <div className="flex flex-col min-h-screen bg-white overflow-x-hidden">
      {/* Government Header - Top Blue Bar */}
      <div className="bg-blue-900 text-white py-2 px-4 md:px-8 text-xs font-semibold w-full">
        <div className="flex justify-between items-center max-w-full">
          <span className="truncate flex-1">{t('ministry')}</span>
          <span className="hidden sm:block ml-2">{t('govt')}</span>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-gradient-to-r from-blue-800 to-blue-700 px-4 md:px-8 py-4 md:py-5 shadow-md border-b-4 border-orange-400 w-full">
        <div className="flex items-center justify-between max-w-full gap-2">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setShowMobileMenu(!showMobileMenu)}
            className="md:hidden p-2 text-white hover:bg-blue-600 rounded-lg transition-colors flex-shrink-0"
          >
            {showMobileMenu ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Logo and Title */}
          <div className="flex items-center gap-3 md:gap-5 flex-1 md:flex-initial min-w-0">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-lg flex items-center justify-center shadow-md border-2 border-orange-400 flex-shrink-0">
              <span className="text-blue-900 font-bold text-xl md:text-2xl">🇮🇳</span>
            </div>
            <div className="border-l-2 border-blue-500 pl-3 md:pl-5 min-w-0">
              <p className="text-blue-100 text-xs md:text-sm font-semibold uppercase tracking-wider hidden sm:block">ASHA Workers Management</p>
              <h1 className="text-white text-base md:text-2xl font-bold mt-0 md:mt-1 truncate">आशा कार्यकर्ता व्यवस्थापन</h1>
              <p className="text-blue-200 text-xs mt-1 hidden lg:block">Ministry of Health and Family Welfare</p>
            </div>
          </div>

          {/* Admin Profile on Right */}
          <div className="flex items-center gap-3 md:gap-6 md:border-l-2 md:border-blue-500 md:pl-6 flex-shrink-0">
            <div className="text-right hidden lg:block">
              <p className="text-white font-bold text-sm">{userName}</p>
              <p className="text-blue-200 text-xs font-medium mt-1">Senior ASHA Supervisor</p>
            </div>
            <div className="relative">
              <button
                onClick={() => setShowProfileMenu(!showProfileMenu)}
                className="w-10 h-10 md:w-14 md:h-14 rounded-lg border-2 md:border-3 border-white overflow-hidden flex items-center justify-center bg-white hover:shadow-lg transition-shadow flex-shrink-0"
              >
                {userPhoto ? (
                  <img src={userPhoto} alt="Profile" className="w-full h-full object-cover" />
                ) : (
                  <User size={20} className="md:w-7 md:h-7 text-blue-900" />
                )}
              </button>

              {/* Profile Dropdown Menu */}
              {showProfileMenu && (
                <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-300 shadow-xl z-50 rounded-sm">
                  <div className="px-4 py-4 border-b border-gray-200 bg-gray-50">
                    <p className="text-sm font-bold text-blue-900">{userName}</p>
                    <p className="text-xs text-blue-700 mt-1">Senior ASHA Supervisor</p>
                  </div>
                  <button
                    onClick={() => {
                      onProfileClick();
                      setShowProfileMenu(false);
                    }}
                    className="w-full text-left px-4 py-3 hover:bg-blue-50 flex items-center gap-3 text-gray-700 font-semibold text-sm border-b border-gray-200 transition-colors"
                  >
                    <Settings size={18} className="text-blue-900" />
                    {t('settings')}
                  </button>
                  <button
                    onClick={() => {
                      onLogout();
                      setShowProfileMenu(false);
                    }}
                    className="w-full text-left px-4 py-3 hover:bg-red-50 flex items-center gap-3 text-red-700 font-semibold text-sm transition-colors"
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

      {/* Main Content Area */}
      <div className="flex flex-1 relative overflow-hidden w-full">
        {/* Mobile Menu Overlay */}
        {showMobileMenu && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
            onClick={() => setShowMobileMenu(false)}
          />
        )}

        {/* Sidebar Navigation */}
        <div className={`
          fixed md:static inset-y-0 left-0 z-50
          w-64 bg-blue-800 shadow-lg flex flex-col border-r border-blue-900
          transform transition-transform duration-300 ease-in-out
          ${showMobileMenu ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        `}>
          {/* Menu Header */}
          <div className="px-6 py-4 border-b border-blue-700 bg-blue-900 flex items-center justify-between">
            <h3 className="text-white font-bold text-sm uppercase tracking-wide">Main Menu</h3>
            <button
              onClick={() => setShowMobileMenu(false)}
              className="md:hidden text-white hover:bg-blue-800 p-1 rounded"
            >
              <X size={20} />
            </button>
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
                    onClick={() => {
                      setCurrentPage(item.id);
                      setShowMobileMenu(false);
                    }}
                    className={`w-full flex items-center gap-4 px-6 py-4 font-semibold text-sm transition-colors duration-200 border-l-4 ${
                      isActive
                        ? 'bg-orange-500 text-white border-l-orange-600'
                        : 'text-blue-100 hover:bg-blue-700 hover:text-white border-l-blue-800'
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
          <div className="p-4 border-t border-blue-700 bg-blue-900">
            <button
              onClick={() => {
                onLogout();
                setShowMobileMenu(false);
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-red-600 hover:bg-red-700 text-white font-bold text-sm transition-colors rounded-sm shadow-md"
            >
              <LogOut size={18} />
              {t('logout')}
            </button>
          </div>

          {/* Footer */}
          <div className="px-4 py-3 text-center border-t border-blue-700 bg-blue-950">
            <p className="text-blue-300 text-xs leading-relaxed">© 2025 Ministry of Health &</p>
            <p className="text-blue-300 text-xs">Family Welfare, Govt. of India</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-auto bg-gray-50 w-full min-w-0">
          <div className="w-full max-w-full">
            {children}
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-blue-900 text-blue-200 text-xs py-3 px-4 md:px-8 border-t border-blue-800 text-center">
        <p className="leading-relaxed">© 2025 All Rights Reserved. Ministry of Health and Family Welfare, Government of India</p>
      </div>
    </div>
  );
};

export default MainLayout;