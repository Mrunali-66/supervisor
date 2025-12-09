import React, { useState, createContext, useContext } from 'react';
import MainLayout from './layouts/MainLayout';
import Dashboard from './pages/Dashboard';
import Workers from './pages/Workers';
import WorkerDetails from './pages/WorkerDetails';
import './index.css';

// Create Global Context for Language and Theme
const AppContext = createContext();

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within AppProvider');
  }
  return context;
};

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [selectedWorker, setSelectedWorker] = useState(null);
  
  // Global Language and Theme State
  const [lang, setLang] = useState('en');
  const [isDark, setIsDark] = useState(false);
  
  // User State
  const [userPhoto, setUserPhoto] = useState(null);
  const [userName, setUserName] = useState('Ram Kumar');

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard selectedWorker={selectedWorker} />;
      
      case 'workers':
        return (
          <Workers
            setSelectedWorker={setSelectedWorker}
            setCurrentPage={setCurrentPage}
          />
        );
      
      case 'worker-details':
        return (
          <WorkerDetails
            selectedWorker={selectedWorker}
            setCurrentPage={setCurrentPage}
            setSelectedWorker={setSelectedWorker}
          />
        );
      
      case 'tasks':
        return (
          <div className={`p-8 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
            <h2 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Tasks Page
            </h2>
            <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>Tasks list coming soon...</p>
          </div>
        );
      
      case 'alerts':
        return (
          <div className={`p-8 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
            <h2 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Alerts Page
            </h2>
            <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>Alerts list coming soon...</p>
          </div>
        );
      
      case 'settings':
        return (
          <div className={`p-8 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
            <h2 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Settings Page
            </h2>
            <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>Settings coming soon...</p>
          </div>
        );
      
      case 'profile':
        return (
          <div className={`p-8 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
            <h2 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Profile Page
            </h2>
            <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>Profile settings coming soon...</p>
          </div>
        );
      
      default:
        return <Dashboard selectedWorker={selectedWorker} />;
    }
  };

  const handleLogout = () => {
    alert(lang === 'en' ? 'Logged out successfully!' : 'यशस्वीरित्या लॉग आउट झाले!');
    setIsAuthenticated(false);
  };

  // If not authenticated, show simple login
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-r from-blue-900 to-blue-800 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
          <h1 className="text-2xl font-bold text-blue-900 mb-6">Login</h1>
          <button 
            onClick={() => setIsAuthenticated(true)}
            className="w-full bg-blue-900 hover:bg-blue-800 text-white font-bold py-3 px-4 rounded"
          >
            {lang === 'en' ? 'Click to Login' : 'लॉगिन करण्यासाठी क्लिक करा'}
          </button>
        </div>
      </div>
    );
  }

  // Theme Classes
  const themeClasses = {
    bg: isDark ? 'bg-gray-900' : 'bg-gray-50',
    text: isDark ? 'text-gray-100' : 'text-gray-900',
    card: isDark ? 'bg-gray-800' : 'bg-white',
    border: isDark ? 'border-gray-700' : 'border-gray-300',
  };

  // If authenticated, show main app
  return (
    <AppContext.Provider value={{ lang, setLang, isDark, setIsDark }}>
      <div className={`min-h-screen ${themeClasses.bg} ${themeClasses.text}`}>
        <MainLayout 
          currentPage={currentPage} 
          setCurrentPage={setCurrentPage}
          userName={userName}
          userPhoto={userPhoto}
          setUserPhoto={setUserPhoto}
          setUserName={setUserName}
          onProfileClick={() => setCurrentPage('profile')}
          onLogout={handleLogout}
        >
          {renderPage()}
        </MainLayout>
      </div>
    </AppContext.Provider>
  );
}

export default App;