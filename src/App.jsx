import React, { useState } from 'react';
import MainLayout from './layouts/MainLayout';
import Dashboard from './pages/Dashboard';
import Workers from './pages/Workers';
import WorkerDetails from './pages/WorkerDetails';
import Tasks from './pages/Tasks';
import Alerts from './pages/Alerts';
import SettingsPage from './pages/Settings';
import Profile from './pages/Profile';
import AuthPage from './pages/Login';
import './index.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [selectedWorker, setSelectedWorker] = useState(null);
  const [lang, setLang] = useState('en');
  const [userPhoto, setUserPhoto] = useState(null);
  const [userName, setUserName] = useState('Admin User');

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard selectedWorker={selectedWorker} lang={lang} setLang={setLang} />;
      
      case 'workers':
        return (
          <Workers 
            setSelectedWorker={setSelectedWorker} 
            setCurrentPage={setCurrentPage}
            lang={lang}
          />
        );
      
      case 'worker-details':
        return (
          <WorkerDetails 
            selectedWorker={selectedWorker} 
            setCurrentPage={setCurrentPage} 
            setSelectedWorker={setSelectedWorker}
            lang={lang}
          />
        );
      
      case 'tasks':
        return <Tasks lang={lang} />;
      
      case 'alerts':
        return <Alerts lang={lang} />;
      
      case 'settings':
        return (
          <SettingsPage 
            lang={lang}
            userPhoto={userPhoto}
            setUserPhoto={setUserPhoto}
            userName={userName}
            setUserName={setUserName}
          />
        );
      
      case 'profile':
        return (
          <Profile 
            lang={lang}
            userPhoto={userPhoto}
            setUserPhoto={setUserPhoto}
            userName={userName}
            setUserName={setUserName}
            onBackClick={() => setCurrentPage('settings')}
          />
        );
      
      default:
        return <Dashboard selectedWorker={selectedWorker} lang={lang} />;
    }
  };

  const handleLogout = () => {
    alert(lang === 'en' ? 'Logged out successfully!' : 'यशस्वीरित्या लॉग आउट झाले!');
    setIsAuthenticated(false);
  };

  // If not authenticated, show login page
  if (!isAuthenticated) {
    return <AuthPage setIsAuthenticated={setIsAuthenticated} />;
  }

  // If authenticated, show main app
  return (
    <div className="min-h-screen bg-gray-50">
      <MainLayout 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage}
        lang={lang}
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
  );
}

export default App;