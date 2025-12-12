import React, { useState, createContext, useContext } from 'react';
import Login from './pages/Login';
import MainLayout from './layouts/MainLayout';
import Dashboard from './pages/Dashboard';
import Workers from './pages/Workers';
import WorkerDetails from './pages/WorkerDetails';
import Tasks from './pages/Tasks';
import Settings from './pages/Settings';
import Alerts from './pages/Alerts';
import Profile from './pages/Profile';
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
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [selectedWorker, setSelectedWorker] = useState(null);
  
  // Global Language and Theme State
  const [lang, setLang] = useState('en');
  const [theme, setTheme] = useState('light');
  
  // User State
  const [userPhoto, setUserPhoto] = useState(null);
  const [userName, setUserName] = useState('Ram Kumar');

  // Helper function to determine if dark mode
  const isDark = theme === 'dark';

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
        return <Tasks />;
      
      case 'alerts':
        return <Alerts />;
      
      case 'settings':
        return (
          <Settings 
            theme={theme}
            setTheme={setTheme}
            lang={lang}
            setLang={setLang}
          />
        );
      
      case 'profile':
        return (
          <Profile
            theme={theme}
            lang={lang}
            userName={userName}
            userPhoto={userPhoto}
            setUserName={setUserName}
            setUserPhoto={setUserPhoto}
            onBackClick={() => setCurrentPage('settings')}
          />
        );
      
      default:
        return <Dashboard selectedWorker={selectedWorker} />;
    }
  };

  const handleLogin = () => {
    setIsAuthenticated(true);
    setCurrentPage('dashboard');
  };

  const handleLogout = () => {
    alert(lang === 'en' ? 'Logged out successfully!' : 'यशस्वीरित्या लॉग आउट झाले!');
    setIsAuthenticated(false);
    setCurrentPage('dashboard');
  };

  // If not authenticated, show login page
  if (!isAuthenticated) {
    return (
      <Login 
        onLogin={handleLogin}
        lang={lang}
        setLang={setLang}
        theme={theme}
        setTheme={setTheme}
      />
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
    <AppContext.Provider value={{ lang, setLang, theme, setTheme, isDark }}>
      <div className={`min-h-screen ${themeClasses.bg} ${themeClasses.text}`}>
        <MainLayout 
          currentPage={currentPage} 
          setCurrentPage={setCurrentPage}
          userName={userName}
          userPhoto={userPhoto}
          setUserPhoto={setUserPhoto}
          setUserName={setUserName}
          theme={theme}
          setTheme={setTheme}
          lang={lang}
          setLang={setLang}
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