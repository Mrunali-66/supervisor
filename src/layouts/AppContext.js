// AppContext.js - Create this file to manage global state
import React, { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within AppProvider');
  }
  return context;
};

export const AppProvider = ({ children }) => {
  // Language State
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('language') || 'en';
  });

  // Theme State
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  // User State
  const [userName, setUserName] = useState(() => {
    return localStorage.getItem('userName') || 'Admin User';
  });

  const [userPhoto, setUserPhoto] = useState(() => {
    return localStorage.getItem('userPhoto') || null;
  });

  // Current Page State
  const [currentPage, setCurrentPage] = useState('dashboard');

  // Save to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  useEffect(() => {
    localStorage.setItem('theme', theme);
    // Apply theme to document
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('userName', userName);
  }, [userName]);

  useEffect(() => {
    if (userPhoto) {
      localStorage.setItem('userPhoto', userPhoto);
    }
  }, [userPhoto]);

  // Translation function
  const translations = {
    en: {
      // Layout translations
      dashboard: 'Dashboard',
      workers: 'Workers',
      tasks: 'Tasks',
      alerts: 'Alerts',
      settings: 'Settings',
      menu: 'Menu',
      logout: 'Logout',
      asha: 'ASHA Supervisor',
      ministry: 'Ministry of Health and Family Welfare',
      govt: 'Government of India',
      
      // Dashboard translations
      totalWorkers: 'Total ASHA Workers',
      activeTasks: 'Active Tasks',
      pendingAlerts: 'Pending Alerts',
      completionRate: 'Completion Rate',
      recentActivities: 'Recent Activities',
      quickActions: 'Quick Actions',
      addNewWorker: 'Add New Worker',
      createTask: 'Create Task',
      viewReports: 'View Reports',
      
      // Workers page translations
      searchWorkers: 'Search Workers',
      filterByDistrict: 'Filter by District',
      workerName: 'Worker Name',
      district: 'District',
      village: 'Village',
      contactNumber: 'Contact Number',
      status: 'Status',
      actions: 'Actions',
      active: 'Active',
      inactive: 'Inactive',
      
      // Settings translations
      languageSettings: 'Language Settings',
      themeSettings: 'Theme Settings',
      profileSettings: 'Profile Settings',
      selectLanguage: 'Select Language',
      selectTheme: 'Select Theme',
      lightMode: 'Light Mode',
      darkMode: 'Dark Mode',
      english: 'English',
      marathi: 'Marathi',
      save: 'Save',
      cancel: 'Cancel',
    },
    mr: {
      // Layout translations
      dashboard: 'डॅशबोर्ड',
      workers: 'कार्यकर्ते',
      tasks: 'कार्ये',
      alerts: 'सूचना',
      settings: 'सेटिंग्ज',
      menu: 'मेनू',
      logout: 'लॉग आउट',
      asha: 'आशा पर्यवेक्षक',
      ministry: 'आरोग्य आणि कुटुंब कल्याण मंत्रालय',
      govt: 'भारत सरकार',
      
      // Dashboard translations
      totalWorkers: 'एकूण आशा कार्यकर्ते',
      activeTasks: 'सक्रिय कार्ये',
      pendingAlerts: 'प्रलंबित सूचना',
      completionRate: 'पूर्णता दर',
      recentActivities: 'अलीकडील क्रियाकलाप',
      quickActions: 'द्रुत क्रिया',
      addNewWorker: 'नवीन कार्यकर्ता जोडा',
      createTask: 'कार्य तयार करा',
      viewReports: 'अहवाल पहा',
      
      // Workers page translations
      searchWorkers: 'कार्यकर्ते शोधा',
      filterByDistrict: 'जिल्ह्यानुसार फिल्टर करा',
      workerName: 'कार्यकर्त्याचे नाव',
      district: 'जिल्हा',
      village: 'गाव',
      contactNumber: 'संपर्क क्रमांक',
      status: 'स्थिती',
      actions: 'क्रिया',
      active: 'सक्रिय',
      inactive: 'निष्क्रिय',
      
      // Settings translations
      languageSettings: 'भाषा सेटिंग्ज',
      themeSettings: 'थीम सेटिंग्ज',
      profileSettings: 'प्रोफाइल सेटिंग्ज',
      selectLanguage: 'भाषा निवडा',
      selectTheme: 'थीम निवडा',
      lightMode: 'लाइट मोड',
      darkMode: 'डार्क मोड',
      english: 'इंग्रजी',
      marathi: 'मराठी',
      save: 'जतन करा',
      cancel: 'रद्द करा',
    }
  };

  const t = (key) => {
    return translations[language]?.[key] || key;
  };

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'mr' : 'en');
  };

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const value = {
    language,
    setLanguage,
    toggleLanguage,
    theme,
    setTheme,
    toggleTheme,
    userName,
    setUserName,
    userPhoto,
    setUserPhoto,
    currentPage,
    setCurrentPage,
    t, // Translation function
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};