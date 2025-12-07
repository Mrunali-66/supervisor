import React, { useState } from 'react';
import { Save, AlertCircle, CheckCircle, Globe, Camera } from 'lucide-react';

const SettingsPage = () => {
  const [lang, setLang] = useState('en');
  const [activeTab, setActiveTab] = useState('profile');
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [profilePhoto, setProfilePhoto] = useState('https://images.unsplash.com/photo-1583623025817-d180a2221d0a?w=400&h=400&fit=crop');
  const [tempProfilePhoto, setTempProfilePhoto] = useState(null);

  const [profileData, setProfileData] = useState({
    firstName: 'Priya',
    lastName: 'Sharma',
    email: 'priya.sharma@health.gov.in',
    phone: '+91 9876543210',
    designation: 'Senior ASHA Supervisor',
    region: 'Northern Region - State A',
    officeLocation: 'District Health Office, Delhi',
  });

  const [notificationSettings, setNotificationSettings] = useState({
    emailAlerts: true,
    smsAlerts: true,
    pushNotifications: true,
    dailyDigest: true,
    taskReminders: true,
    performanceUpdates: true,
  });

  const [securitySettings, setSecuritySettings] = useState({
    twoFactorAuth: false,
    sessionTimeout: '30',
    loginAlerts: true,
  });

  const [systemSettings, setSystemSettings] = useState({
    theme: 'light',
    language: 'english',
    dateFormat: 'dd/mm/yyyy',
    timezone: 'IST (UTC+5:30)',
    autoRefresh: true,
    refreshInterval: '5',
  });

  const translations = {
    en: {
      pageTitle: 'Settings & Configuration',
      pageSubtitle: 'Ministry of Health and Family Welfare, Government of India',
      systemSettings: 'System Settings & User Preferences',
      configure: 'Configure your account, notifications, security, and system preferences',
      savedSuccess: 'Settings saved successfully!',
      profile: 'Profile',
      profilePhoto: 'Profile Photo',
      uploadPhoto: 'Upload Photo',
      changePhoto: 'Change Photo',
      notifications: 'Notifications',
      security: 'Security',
      system: 'System',
      personalInfo: 'Personal Information',
      firstName: 'First Name',
      lastName: 'Last Name',
      email: 'Email Address',
      phone: 'Phone Number',
      designation: 'Designation',
      region: 'Assigned Region',
      officeLocation: 'Office Location',
      saveChanges: 'Save Changes',
      notificationPrefs: 'Notification Preferences',
      emailAlerts: 'Email Alerts',
      emailAlertsDesc: 'Receive alerts via email',
      smsAlerts: 'SMS Alerts',
      smsAlertsDesc: 'Receive alerts via SMS',
      pushNotifications: 'Push Notifications',
      pushDesc: 'Receive push notifications',
      dailyDigest: 'Daily Digest',
      dailyDigestDesc: 'Receive daily summary digest',
      taskReminders: 'Task Reminders',
      taskRemindersDesc: 'Get reminders for pending tasks',
      performanceUpdates: 'Performance Updates',
      performanceDesc: 'Receive worker performance reports',
      savePreferences: 'Save Preferences',
      securitySettings: 'Security Settings',
      securityAlert: 'Security Alert',
      lastLogin: 'Last login: 2024-01-18 at 10:30 AM from IP 192.168.1.1',
      changePassword: 'Change Password',
      changePasswordDesc: 'Update your account password regularly',
      twoFactor: 'Two-Factor Authentication',
      twoFactorDesc: 'Add an extra layer of security to your account',
      sessionTimeout: 'Session Timeout (Minutes)',
      loginAlerts: 'Login Alerts',
      loginAlertsDesc: 'Get notified of new login attempts',
      saveSecuritySettings: 'Save Security Settings',
      systemPrefs: 'System Preferences',
      theme: 'Theme',
      lightMode: 'Light Mode',
      darkMode: 'Dark Mode',
      autoSystem: 'Auto (System)',
      language: 'Language',
      english: 'English',
      hindi: 'Hindi',
      marathi: 'Marathi',
      dateFormat: 'Date Format',
      timezone: 'Timezone',
      autoRefresh: 'Auto-Refresh Dashboard',
      autoRefreshDesc: 'Automatically refresh dashboard data',
      refreshInterval: 'Refresh Interval (Minutes)',
      minute: 'Minute',
      minutes: 'Minutes',
      saveSystemSettings: 'Save System Settings',
      copyright: '© 2025 Ministry of Health and Family Welfare, Government of India | System Version: 2.1.0'
    },
    mr: {
      pageTitle: 'सेटिंग्ज आणि कॉन्फिगरेशन',
      pageSubtitle: 'आरोग्य आणि कुटुंब कल्याण मंत्रालय, भारत सरकार',
      systemSettings: 'प्रणाली सेटिंग्ज आणि वापरकर्ता प्राधान्य',
      configure: 'आपल्या खाते, सूचना, सुरक्षा आणि प्रणाली प्राधान्य कॉन्फिगर करा',
      savedSuccess: 'सेटिंग्ज यशस्वीरित्या सेव केली गेली!',
      profile: 'प्रोफाइल',
      profilePhoto: 'प्रोफाइल फोटो',
      uploadPhoto: 'फोटो अपलोड करा',
      changePhoto: 'फोटो बदला',
      notifications: 'सूचना',
      security: 'सुरक्षा',
      system: 'प्रणाली',
      personalInfo: 'व्यक्तिगत माहिती',
      firstName: 'पहिले नाव',
      lastName: 'शेवटचे नाव',
      email: 'ईमेल पत्ता',
      phone: 'फोन क्रमांक',
      designation: 'पद',
      region: 'नियुक्त क्षेत्र',
      officeLocation: 'कार्यालय स्थान',
      saveChanges: 'बदल सेव करा',
      notificationPrefs: 'सूचना प्राधान्य',
      emailAlerts: 'ईमेल सतर्कता',
      emailAlertsDesc: 'ईमेल द्वारे सतर्कता प्राप्त करा',
      smsAlerts: 'SMS सतर्कता',
      smsAlertsDesc: 'SMS द्वारे सतर्कता प्राप्त करा',
      pushNotifications: 'पुश सूचना',
      pushDesc: 'पुश सूचना प्राप्त करा',
      dailyDigest: 'दैनिक सारांश',
      dailyDigestDesc: 'दैनिक सारांश सारांश प्राप्त करा',
      taskReminders: 'कार्य अनुस्मारक',
      taskRemindersDesc: 'प्रलंबित कार्यांसाठी अनुस्मारक मिळवा',
      performanceUpdates: 'कार्यक्षमता अपडेट',
      performanceDesc: 'कार्यकर्ता कार्यक्षमता अहवाल प्राप्त करा',
      savePreferences: 'प्राधान्य सेव करा',
      securitySettings: 'सुरक्षा सेटिंग्ज',
      securityAlert: 'सुरक्षा सतर्कता',
      lastLogin: 'शेवटचा लॉगिन: 2024-01-18 दोपहर 10:30 AM IP 192.168.1.1 वरून',
      changePassword: 'पासवर्ड बदला',
      changePasswordDesc: 'आपल्या खाते पासवर्ड नियमितपणे अपडेट करा',
      twoFactor: 'दोन-घटक प्रमाणीकरण',
      twoFactorDesc: 'आपल्या खात्यामध्ये सुरक्षाची अतिरिक्त परत जोडा',
      sessionTimeout: 'सेशन टाइमआउट (मिनिटे)',
      loginAlerts: 'लॉगिन सतर्कता',
      loginAlertsDesc: 'नवीन लॉगिन प्रयत्नांची सूचना मिळवा',
      saveSecuritySettings: 'सुरक्षा सेटिंग्ज सेव करा',
      systemPrefs: 'प्रणाली प्राधान्य',
      theme: 'थीम',
      lightMode: 'प्रकाश मोड',
      darkMode: 'गडद मोड',
      autoSystem: 'स्वचालित (प्रणाली)',
      language: 'भाषा',
      english: 'English',
      hindi: 'हिंदी',
      marathi: 'मराठी',
      dateFormat: 'तारीख स्वरूप',
      timezone: 'वेळ क्षेत्र',
      autoRefresh: 'डॅशबोर्ड स्वचालित रीफ्रेश करा',
      autoRefreshDesc: 'डॅशबोर्ड डेटा स्वचालितपणे रीफ्रेश करा',
      refreshInterval: 'रीफ्रेश इंटरव्हल (मिनिटे)',
      minute: 'मिनिट',
      minutes: 'मिनिटे',
      saveSystemSettings: 'प्रणाली सेटिंग्ज सेव करा',
      copyright: '© 2025 आरोग्य आणि कुटुंब कल्याण मंत्रालय, भारत सरकार | प्रणाली संस्करण: 2.1.0'
    }
  };

  const t = (key) => translations[lang][key] || key;

  const handleProfileChange = (field, value) => {
    setProfileData({ ...profileData, [field]: value });
  };

  const handleNotificationChange = (field) => {
    setNotificationSettings({ ...notificationSettings, [field]: !notificationSettings[field] });
  };

  const handleSecurityChange = (field, value) => {
    setSecuritySettings({ ...securitySettings, [field]: value });
  };

  const handleSystemChange = (field, value) => {
    setSystemSettings({ ...systemSettings, [field]: value });
  };

  const handleSave = () => {
    if (tempProfilePhoto) {
      setProfilePhoto(tempProfilePhoto);
      setTempProfilePhoto(null);
    }
    if (activeTab === 'system') {
      setLang(systemSettings.language === 'english' ? 'en' : 'mr');
    }
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 3000);
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setTempProfilePhoto(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className={`min-h-screen ${systemSettings.theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
      {/* Header */}
      <div className={`border-b-4 border-orange-400 ${systemSettings.theme === 'dark' ? 'bg-gradient-to-r from-gray-800 to-gray-900' : 'bg-gradient-to-r from-blue-900 to-blue-800'} px-6 py-6`}>
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-orange-400 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">⚙️</span>
              </div>
              <div>
                <h1 className="text-3xl font-bold text-white">{t('pageTitle')}</h1>
                <p className="text-blue-100 text-sm mt-1">{t('pageSubtitle')}</p>
              </div>
            </div>
            <div className="flex gap-2 items-center bg-blue-800 rounded-lg p-2">
              <Globe size={20} className="text-white" />
              <button onClick={() => setLang('en')} className={`px-3 py-1 rounded font-bold transition-all ${lang === 'en' ? 'bg-white text-blue-900' : 'bg-transparent text-white hover:bg-blue-700'}`}>
                English
              </button>
              <button onClick={() => setLang('mr')} className={`px-3 py-1 rounded font-bold transition-all ${lang === 'mr' ? 'bg-white text-blue-900' : 'bg-transparent text-white hover:bg-blue-700'}`}>
                मराठी
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className={`max-w-7xl mx-auto px-6 py-8 ${systemSettings.theme === 'dark' ? 'text-white' : ''}`}>
        {/* Page Title */}
        <div className="mb-8">
          <h2 className={`text-2xl font-bold ${systemSettings.theme === 'dark' ? 'text-blue-300' : 'text-blue-900'} mb-2`}>{t('systemSettings')}</h2>
          <p className={`${systemSettings.theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} mb-4`}>{t('configure')}</p>
          <div className="h-1 w-24 bg-orange-400"></div>
        </div>

        {/* Success Message */}
        {saveSuccess && (
          <div className="border-2 border-green-600 bg-green-50 px-6 py-4 mb-6 flex items-center gap-3">
            <CheckCircle size={24} className="text-green-600" />
            <p className="text-green-800 font-semibold">{t('savedSuccess')}</p>
          </div>
        )}

        {/* Tabs */}
        <div className={`border-2 ${systemSettings.theme === 'dark' ? 'border-gray-700 bg-gray-800' : 'border-gray-300 bg-white'} mb-8`}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
            {['profile', 'notifications', 'security', 'system'].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-4 font-bold border-b-4 transition-colors text-center ${
                  activeTab === tab
                    ? systemSettings.theme === 'dark'
                      ? 'bg-gray-700 border-b-4 border-blue-400 text-blue-300'
                      : 'bg-blue-50 border-b-4 border-blue-900 text-blue-900'
                    : systemSettings.theme === 'dark'
                      ? 'bg-gray-800 border-b-2 border-gray-700 text-gray-300 hover:bg-gray-700'
                      : 'bg-gray-50 border-b-2 border-gray-300 text-gray-700 hover:bg-gray-100'
                }`}
              >
                {t(tab)}
              </button>
            ))}
          </div>
        </div>

        {/* Profile Tab */}
        {activeTab === 'profile' && (
          <div className={`border-2 ${systemSettings.theme === 'dark' ? 'border-gray-700 bg-gray-800' : 'border-gray-300 bg-white'} p-8 space-y-6`}>
            <div>
              <h3 className={`text-xl font-bold ${systemSettings.theme === 'dark' ? 'text-blue-300' : 'text-blue-900'} mb-6`}>{t('profilePhoto')}</h3>
              <div className="flex items-center gap-8">
                <div className="relative">
                  <img src={tempProfilePhoto || profilePhoto} alt="Profile" className={`w-32 h-32 rounded-full border-4 ${systemSettings.theme === 'dark' ? 'border-blue-400' : 'border-blue-900'} object-cover`} />
                  <label className="absolute bottom-0 right-0 bg-orange-500 hover:bg-orange-600 rounded-full p-3 cursor-pointer transition-colors">
                    <Camera size={20} className="text-white" />
                    <input type="file" accept="image/*" onChange={handlePhotoChange} className="hidden" />
                  </label>
                </div>
                <div>
                  <p className={`font-semibold ${systemSettings.theme === 'dark' ? 'text-gray-200' : 'text-gray-800'} mb-2`}>{profileData.firstName} {profileData.lastName}</p>
                  <p className={`text-sm ${systemSettings.theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} mb-4`}>{profileData.designation}</p>
                  <label className={`${systemSettings.theme === 'dark' ? 'bg-blue-700 hover:bg-blue-600' : 'bg-blue-900 hover:bg-blue-800'} text-white font-bold py-2 px-6 inline-flex items-center gap-2 cursor-pointer transition-colors`}>
                    <Camera size={16} />
                    {t('changePhoto')}
                    <input type="file" accept="image/*" onChange={handlePhotoChange} className="hidden" />
                  </label>
                  {tempProfilePhoto && (
                    <p className="text-sm text-orange-500 mt-2">⚠️ Click "Save Changes" to update photo</p>
                  )}
                </div>
              </div>
            </div>
            <div className={`border-t-2 ${systemSettings.theme === 'dark' ? 'border-gray-700' : 'border-gray-300'} pt-6`}>
              <h3 className={`text-xl font-bold ${systemSettings.theme === 'dark' ? 'text-blue-300' : 'text-blue-900'} mb-6`}>{t('personalInfo')}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className={`block text-sm font-semibold ${systemSettings.theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} mb-2`}>{t('firstName')}</label>
                  <input type="text" value={profileData.firstName} onChange={(e) => handleProfileChange('firstName', e.target.value)} className={`w-full px-4 py-3 border-2 ${systemSettings.theme === 'dark' ? 'border-gray-700 bg-gray-900 text-white focus:border-blue-400' : 'border-gray-300 bg-white text-gray-700 focus:border-blue-900'} focus:outline-none`} />
                </div>
                <div>
                  <label className={`block text-sm font-semibold ${systemSettings.theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} mb-2`}>{t('lastName')}</label>
                  <input type="text" value={profileData.lastName} onChange={(e) => handleProfileChange('lastName', e.target.value)} className={`w-full px-4 py-3 border-2 ${systemSettings.theme === 'dark' ? 'border-gray-700 bg-gray-900 text-white focus:border-blue-400' : 'border-gray-300 bg-white text-gray-700 focus:border-blue-900'} focus:outline-none`} />
                </div>
                <div>
                  <label className={`block text-sm font-semibold ${systemSettings.theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} mb-2`}>{t('email')}</label>
                  <input type="email" value={profileData.email} onChange={(e) => handleProfileChange('email', e.target.value)} className={`w-full px-4 py-3 border-2 ${systemSettings.theme === 'dark' ? 'border-gray-700 bg-gray-900 text-white focus:border-blue-400' : 'border-gray-300 bg-white text-gray-700 focus:border-blue-900'} focus:outline-none`} />
                </div>
                <div>
                  <label className={`block text-sm font-semibold ${systemSettings.theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} mb-2`}>{t('phone')}</label>
                  <input type="tel" value={profileData.phone} onChange={(e) => handleProfileChange('phone', e.target.value)} className={`w-full px-4 py-3 border-2 ${systemSettings.theme === 'dark' ? 'border-gray-700 bg-gray-900 text-white focus:border-blue-400' : 'border-gray-300 bg-white text-gray-700 focus:border-blue-900'} focus:outline-none`} />
                </div>
                <div>
                  <label className={`block text-sm font-semibold ${systemSettings.theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} mb-2`}>{t('designation')}</label>
                  <input type="text" value={profileData.designation} disabled className={`w-full px-4 py-3 border-2 ${systemSettings.theme === 'dark' ? 'border-gray-700 bg-gray-800 text-gray-400' : 'border-gray-300 bg-gray-100 text-gray-700'}`} />
                </div>
                <div>
                  <label className={`block text-sm font-semibold ${systemSettings.theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} mb-2`}>{t('region')}</label>
                  <input type="text" value={profileData.region} disabled className={`w-full px-4 py-3 border-2 ${systemSettings.theme === 'dark' ? 'border-gray-700 bg-gray-800 text-gray-400' : 'border-gray-300 bg-gray-100 text-gray-700'}`} />
                </div>
                <div className="md:col-span-2">
                  <label className={`block text-sm font-semibold ${systemSettings.theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} mb-2`}>{t('officeLocation')}</label>
                  <input type="text" value={profileData.officeLocation} onChange={(e) => handleProfileChange('officeLocation', e.target.value)} className={`w-full px-4 py-3 border-2 ${systemSettings.theme === 'dark' ? 'border-gray-700 bg-gray-900 text-white focus:border-blue-400' : 'border-gray-300 bg-white text-gray-700 focus:border-blue-900'} focus:outline-none`} />
                </div>
              </div>
            </div>
            <div className={`border-t-2 ${systemSettings.theme === 'dark' ? 'border-gray-700' : 'border-gray-300'} pt-6`}>
              <button onClick={handleSave} className={`${systemSettings.theme === 'dark' ? 'bg-blue-700 hover:bg-blue-600' : 'bg-blue-900 hover:bg-blue-800'} text-white font-bold py-3 px-8 flex items-center gap-2 transition-colors`}>
                <Save size={20} /> {t('saveChanges')}
              </button>
            </div>
          </div>
        )}

        {/* Notifications Tab */}
        {activeTab === 'notifications' && (
          <div className={`border-2 ${systemSettings.theme === 'dark' ? 'border-gray-700 bg-gray-800' : 'border-gray-300 bg-white'} p-8 space-y-6`}>
            <div>
              <h3 className={`text-xl font-bold ${systemSettings.theme === 'dark' ? 'text-blue-300' : 'text-blue-900'} mb-6`}>{t('notificationPrefs')}</h3>
              <div className="space-y-4">
                {[
                  { key: 'emailAlerts', label: t('emailAlerts'), desc: t('emailAlertsDesc') },
                  { key: 'smsAlerts', label: t('smsAlerts'), desc: t('smsAlertsDesc') },
                  { key: 'pushNotifications', label: t('pushNotifications'), desc: t('pushDesc') },
                  { key: 'dailyDigest', label: t('dailyDigest'), desc: t('dailyDigestDesc') },
                  { key: 'taskReminders', label: t('taskReminders'), desc: t('taskRemindersDesc') },
                  { key: 'performanceUpdates', label: t('performanceUpdates'), desc: t('performanceDesc') },
                ].map(setting => (
                  <div key={setting.key} className={`flex items-center justify-between p-4 border-2 ${systemSettings.theme === 'dark' ? 'border-gray-700 bg-gray-900 hover:bg-gray-700' : 'border-gray-300 bg-gray-50 hover:bg-gray-100'}`}>
                    <div>
                      <p className={`font-semibold ${systemSettings.theme === 'dark' ? 'text-gray-200' : 'text-gray-800'}`}>{setting.label}</p>
                      <p className={`text-sm ${systemSettings.theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>{setting.desc}</p>
                    </div>
                    <input type="checkbox" checked={notificationSettings[setting.key]} onChange={() => handleNotificationChange(setting.key)} className={`w-6 h-6 ${systemSettings.theme === 'dark' ? 'accent-blue-400' : 'accent-blue-900'} cursor-pointer`} />
                  </div>
                ))}
              </div>
            </div>
            <div className={`border-t-2 ${systemSettings.theme === 'dark' ? 'border-gray-700' : 'border-gray-300'} pt-6`}>
              <button onClick={handleSave} className={`${systemSettings.theme === 'dark' ? 'bg-blue-700 hover:bg-blue-600' : 'bg-blue-900 hover:bg-blue-800'} text-white font-bold py-3 px-8 flex items-center gap-2 transition-colors`}>
                <Save size={20} /> {t('savePreferences')}
              </button>
            </div>
          </div>
        )}

        {/* Security Tab */}
        {activeTab === 'security' && (
          <div className={`border-2 ${systemSettings.theme === 'dark' ? 'border-gray-700 bg-gray-800' : 'border-gray-300 bg-white'} p-8 space-y-6`}>
            <div className={`${systemSettings.theme === 'dark' ? 'bg-gray-900 border-l-4 border-blue-400' : 'bg-blue-50 border-l-4 border-blue-900'} px-6 py-4 flex items-start gap-3`}>
              <AlertCircle size={24} className={`${systemSettings.theme === 'dark' ? 'text-blue-400' : 'text-blue-900'} flex-shrink-0`} />
              <div>
                <p className={`font-bold ${systemSettings.theme === 'dark' ? 'text-blue-300' : 'text-blue-900'}`}>{t('securityAlert')}</p>
                <p className={`text-sm ${systemSettings.theme === 'dark' ? 'text-gray-300' : 'text-blue-800'} mt-1`}>{t('lastLogin')}</p>
              </div>
            </div>
            <div>
              <h3 className={`text-xl font-bold ${systemSettings.theme === 'dark' ? 'text-blue-300' : 'text-blue-900'} mb-6`}>{t('securitySettings')}</h3>
              <div className="space-y-6">
                <div className={`border-2 ${systemSettings.theme === 'dark' ? 'border-gray-700 bg-gray-900' : 'border-gray-300'} p-6`}>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className={`font-bold ${systemSettings.theme === 'dark' ? 'text-gray-200' : 'text-gray-800'}`}>{t('changePassword')}</p>
                      <p className={`text-sm ${systemSettings.theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} mt-1`}>{t('changePasswordDesc')}</p>
                    </div>
                    <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 transition-colors">
                      {t('changePassword')}
                    </button>
                  </div>
                </div>
                <div className={`border-2 ${systemSettings.theme === 'dark' ? 'border-gray-700 bg-gray-900' : 'border-gray-300'} p-6`}>
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className={`font-bold ${systemSettings.theme === 'dark' ? 'text-gray-200' : 'text-gray-800'}`}>{t('twoFactor')}</p>
                      <p className={`text-sm ${systemSettings.theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} mt-1`}>{t('twoFactorDesc')}</p>
                    </div>
                    <input type="checkbox" checked={securitySettings.twoFactorAuth} onChange={(e) => handleSecurityChange('twoFactorAuth', e.target.checked)} className={`w-6 h-6 ${systemSettings.theme === 'dark' ? 'accent-blue-400' : 'accent-blue-900'} cursor-pointer`} />
                  </div>
                </div>
                <div className={`border-2 ${systemSettings.theme === 'dark' ? 'border-gray-700 bg-gray-900' : 'border-gray-300'} p-6`}>
                  <label className={`block font-bold ${systemSettings.theme === 'dark' ? 'text-gray-200' : 'text-gray-800'} mb-3`}>{t('sessionTimeout')}</label>
                  <select value={securitySettings.sessionTimeout} onChange={(e) => handleSecurityChange('sessionTimeout', e.target.value)} className={`w-full px-4 py-3 border-2 ${systemSettings.theme === 'dark' ? 'border-gray-700 bg-gray-800 text-white focus:border-blue-400' : 'border-gray-300 bg-white text-gray-700 focus:border-blue-900'} focus:outline-none`}>
                    <option>15</option>
                    <option>30</option>
                    <option>60</option>
                    <option>120</option>
                  </select>
                </div>
                <div className={`border-2 ${systemSettings.theme === 'dark' ? 'border-gray-700 bg-gray-900' : 'border-gray-300'} p-6`}>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className={`font-bold ${systemSettings.theme === 'dark' ? 'text-gray-200' : 'text-gray-800'}`}>{t('loginAlerts')}</p>
                      <p className={`text-sm ${systemSettings.theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} mt-1`}>{t('loginAlertsDesc')}</p>
                    </div>
                    <input type="checkbox" checked={securitySettings.loginAlerts} onChange={(e) => handleSecurityChange('loginAlerts', e.target.checked)} className={`w-6 h-6 ${systemSettings.theme === 'dark' ? 'accent-blue-400' : 'accent-blue-900'} cursor-pointer`} />
                  </div>
                </div>
              </div>
            </div>
            <div className={`border-t-2 ${systemSettings.theme === 'dark' ? 'border-gray-700' : 'border-gray-300'} pt-6`}>
              <button onClick={handleSave} className={`${systemSettings.theme === 'dark' ? 'bg-blue-700 hover:bg-blue-600' : 'bg-blue-900 hover:bg-blue-800'} text-white font-bold py-3 px-8 flex items-center gap-2 transition-colors`}>
                <Save size={20} /> {t('saveSecuritySettings')}
              </button>
            </div>
          </div>
        )}

        {/* System Tab */}
        {activeTab === 'system' && (
          <div className={`border-2 ${systemSettings.theme === 'dark' ? 'border-gray-700 bg-gray-800' : 'border-gray-300 bg-white'} p-8 space-y-6`}>
            <div>
              <h3 className={`text-xl font-bold ${systemSettings.theme === 'dark' ? 'text-blue-300' : 'text-blue-900'} mb-6`}>{t('systemPrefs')}</h3>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className={`block text-sm font-semibold ${systemSettings.theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} mb-2`}>{t('theme')}</label>
                    <select value={systemSettings.theme} onChange={(e) => handleSystemChange('theme', e.target.value)} className={`w-full px-4 py-3 border-2 ${systemSettings.theme === 'dark' ? 'border-gray-700 bg-gray-900 text-white focus:border-blue-400' : 'border-gray-300 bg-white text-gray-700 focus:border-blue-900'} focus:outline-none`}>
                      <option value="light">{t('lightMode')}</option>
                      <option value="dark">{t('darkMode')}</option>
                      <option value="auto">{t('autoSystem')}</option>
                    </select>
                  </div>
                  <div>
                    <label className={`block text-sm font-semibold ${systemSettings.theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} mb-2`}>{t('language')}</label>
                    <select value={systemSettings.language} onChange={(e) => handleSystemChange('language', e.target.value)} className={`w-full px-4 py-3 border-2 ${systemSettings.theme === 'dark' ? 'border-gray-700 bg-gray-900 text-white focus:border-blue-400' : 'border-gray-300 bg-white text-gray-700 focus:border-blue-900'} focus:outline-none`}>
                      <option value="english">{t('english')}</option>
                      <option value="hindi">{t('hindi')}</option>
                      <option value="marathi">{t('marathi')}</option>
                    </select>
                  </div>
                  <div>
                    <label className={`block text-sm font-semibold ${systemSettings.theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} mb-2`}>{t('dateFormat')}</label>
                    <select value={systemSettings.dateFormat} onChange={(e) => handleSystemChange('dateFormat', e.target.value)} className={`w-full px-4 py-3 border-2 ${systemSettings.theme === 'dark' ? 'border-gray-700 bg-gray-900 text-white focus:border-blue-400' : 'border-gray-300 bg-white text-gray-700 focus:border-blue-900'} focus:outline-none`}>
                      <option value="dd/mm/yyyy">DD/MM/YYYY</option>
                      <option value="mm/dd/yyyy">MM/DD/YYYY</option>
                      <option value="yyyy-mm-dd">YYYY-MM-DD</option>
                    </select>
                  </div>
                  <div>
                    <label className={`block text-sm font-semibold ${systemSettings.theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} mb-2`}>{t('timezone')}</label>
                    <input type="text" value={systemSettings.timezone} disabled className={`w-full px-4 py-3 border-2 ${systemSettings.theme === 'dark' ? 'border-gray-700 bg-gray-800 text-gray-400' : 'border-gray-300 bg-gray-100 text-gray-700'}`} />
                  </div>
                </div>
                <div className={`border-t-2 ${systemSettings.theme === 'dark' ? 'border-gray-700' : 'border-gray-300'} pt-6`}>
                  <div className={`flex items-center justify-between p-4 border-2 ${systemSettings.theme === 'dark' ? 'border-gray-700 bg-gray-900' : 'border-gray-300 bg-gray-50'}`}>
                    <div>
                      <p className={`font-bold ${systemSettings.theme === 'dark' ? 'text-gray-200' : 'text-gray-800'}`}>{t('autoRefresh')}</p>
                      <p className={`text-sm ${systemSettings.theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} mt-1`}>{t('autoRefreshDesc')}</p>
                    </div>
                    <input type="checkbox" checked={systemSettings.autoRefresh} onChange={(e) => handleSystemChange('autoRefresh', e.target.checked)} className={`w-6 h-6 ${systemSettings.theme === 'dark' ? 'accent-blue-400' : 'accent-blue-900'} cursor-pointer`} />
                  </div>
                  {systemSettings.autoRefresh && (
                    <div className="mt-4">
                      <label className={`block text-sm font-semibold ${systemSettings.theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} mb-2`}>{t('refreshInterval')}</label>
                      <select value={systemSettings.refreshInterval} onChange={(e) => handleSystemChange('refreshInterval', e.target.value)} className={`w-full px-4 py-3 border-2 ${systemSettings.theme === 'dark' ? 'border-gray-700 bg-gray-900 text-white focus:border-blue-400' : 'border-gray-300 bg-white text-gray-700 focus:border-blue-900'} focus:outline-none`}>
                        <option value="1">1 {lang === 'mr' ? t('minute') : t('minute')}</option>
                        <option value="5">5 {lang === 'mr' ? t('minutes') : t('minutes')}</option>
                        <option value="10">10 {lang === 'mr' ? t('minutes') : t('minutes')}</option>
                        <option value="15">15 {lang === 'mr' ? t('minutes') : t('minutes')}</option>
                      </select>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className={`border-t-2 ${systemSettings.theme === 'dark' ? 'border-gray-700' : 'border-gray-300'} pt-6`}>
              <button onClick={handleSave} className={`${systemSettings.theme === 'dark' ? 'bg-blue-700 hover:bg-blue-600' : 'bg-blue-900 hover:bg-blue-800'} text-white font-bold py-3 px-8 flex items-center gap-2 transition-colors`}>
                <Save size={20} /> {t('saveSystemSettings')}
              </button>
            </div>
          </div>
        )}

        {/* Footer */}
        <div className={`border-t-4 border-orange-400 ${systemSettings.theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'} px-6 py-4 text-center text-xs ${systemSettings.theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} mt-12`}>
          <p>{t('copyright')}</p>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;