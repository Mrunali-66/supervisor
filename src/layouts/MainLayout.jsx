import React, { useState } from 'react';
import { Menu, X, Bell, LogOut, Settings as SettingsIcon } from 'lucide-react';

const MainLayout = ({ children, currentPage, setCurrentPage }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navigationItems = [
    { id: 'dashboard', label: 'Dashboard', icon: '📊' },
    { id: 'workers', label: 'Workers', icon: '👥' },
    { id: 'tasks', label: 'Tasks', icon: '✅' },
    { id: 'alerts', label: 'Alerts', icon: '🔔' },
    { id: 'settings', label: 'Settings', icon: '⚙️' },
  ];

  const handleNavigation = (pageId) => {
    setCurrentPage(pageId);
    setSidebarOpen(false);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 w-72 bg-gradient-to-b from-blue-900 to-blue-800 border-r-4 border-orange-400 transform transition-transform duration-300 z-40 lg:relative lg:translate-x-0 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Sidebar Header */}
        <div className="border-b-4 border-orange-400 p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-orange-400 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">🔍</span>
            </div>
            <div>
              <h1 className="text-white font-bold text-lg">ASHA Supervisor</h1>
              <p className="text-blue-200 text-xs">v2.1.0</p>
            </div>
          </div>
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden text-white hover:text-orange-300"
          >
            <X size={24} />
          </button>
        </div>

        {/* Navigation Menu */}
        <nav className="mt-6 px-4 space-y-2">
          {navigationItems.map(item => (
            <button
              key={item.id}
              onClick={() => handleNavigation(item.id)}
              className={`w-full text-left px-6 py-4 rounded-none border-l-4 transition-all font-semibold flex items-center gap-3 ${
                currentPage === item.id
                  ? 'bg-orange-400 border-l-4 border-white text-white'
                  : 'bg-blue-700 border-l-4 border-transparent text-blue-100 hover:bg-blue-600'
              }`}
            >
              <span className="text-xl">{item.icon}</span>
              {item.label}
            </button>
          ))}
        </nav>

        {/* Sidebar Footer */}
        <div className="absolute bottom-0 left-0 right-0 border-t-4 border-orange-400 p-4 space-y-2">
          <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-none flex items-center justify-center gap-2 transition-colors">
            <LogOut size={20} /> Logout
          </button>
          <p className="text-blue-200 text-xs text-center mt-3">
            © 2024 Ministry of Health<br />Government of India
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Navigation Bar */}
        <div className="bg-white border-b-4 border-orange-400 shadow-md">
          <div className="flex items-center justify-between px-6 py-4">
            {/* Left Section */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="lg:hidden text-blue-900 hover:text-orange-500"
              >
                <Menu size={24} />
              </button>
              <div>
                <p className="text-sm text-gray-600">Ministry of Health and Family Welfare</p>
                <h2 className="text-xl font-bold text-blue-900">ASHA Worker Supervision System</h2>
              </div>
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-6">
              <div className="hidden md:flex items-center gap-4">
                <div className="text-right">
                  <p className="text-sm font-semibold text-gray-800">Ram Kumar</p>
                  <p className="text-xs text-gray-600">Senior ASHA Supervisor</p>
                </div>
              </div>
              <button className="relative text-gray-700 hover:text-blue-900 transition-colors">
                <Bell size={24} />
                <span className="absolute top-0 right-0 w-3 h-3 bg-red-600 rounded-full"></span>
              </button>
              <button className="text-gray-700 hover:text-blue-900 transition-colors">
                <SettingsIcon size={24} />
              </button>
            </div>
          </div>
        </div>

        {/* Page Content */}
        <div className="flex-1 overflow-y-auto">
          {children}
        </div>
      </div>

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 lg:hidden z-30"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default MainLayout;