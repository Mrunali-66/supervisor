import React, { useState } from 'react';
import MainLayout from './layouts/MainLayout';
import Dashboard from './pages/Dashboard';
import Workers from './pages/Workers';
import WorkerDetails from './pages/WorkerDetails';
import Tasks from './pages/Tasks';
import Alerts from './pages/Alerts';
import SettingsPage from './pages/Settings';
import AuthPage from './pages/Login';
import './index.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [selectedWorker, setSelectedWorker] = useState(null);

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard selectedWorker={selectedWorker} />;
      case 'workers':
        return <Workers setSelectedWorker={setSelectedWorker} setCurrentPage={setCurrentPage} />;
      case 'worker-details':
        return <WorkerDetails selectedWorker={selectedWorker} setCurrentPage={setCurrentPage} setSelectedWorker={setSelectedWorker} />;
      case 'tasks':
        return <Tasks />;
      case 'alerts':
        return <Alerts />;
      case 'settings':
        return <SettingsPage />;
      default:
        return <Dashboard selectedWorker={selectedWorker} />;
    }
  };

  // If not authenticated, show login page
  if (!isAuthenticated) {
    return <AuthPage setIsAuthenticated={setIsAuthenticated} />;
  }

  // If authenticated, show main app
  return (
    <MainLayout currentPage={currentPage} setCurrentPage={setCurrentPage}>
      {renderPage()}
    </MainLayout>
  );
}

export default App;