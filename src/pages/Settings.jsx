import React, { useState } from 'react';
import { Settings, Save, AlertCircle, CheckCircle, Eye, EyeOff, Lock } from 'lucide-react';

const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [showPassword, setShowPassword] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);

  const [profileData, setProfileData] = useState({
    firstName: 'Ram',
    lastName: 'Kumar',
    email: 'ram.kumar@health.gov.in',
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
    ipWhitelisting: false,
  });

  const [systemSettings, setSystemSettings] = useState({
    theme: 'light',
    language: 'english',
    dateFormat: 'dd/mm/yyyy',
    timezone: 'IST (UTC+5:30)',
    autoRefresh: true,
    refreshInterval: '5',
  });

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
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 3000);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="border-b-4 border-orange-400 bg-gradient-to-r from-blue-900 to-blue-800 px-6 py-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-orange-400 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">⚙️</span>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white">Settings & Configuration</h1>
              <p className="text-blue-100 text-sm mt-1">Ministry of Health and Family Welfare, Government of India</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Page Title */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-blue-900 mb-2">System Settings & User Preferences</h2>
          <p className="text-gray-700 mb-4">Configure your account, notifications, security, and system preferences</p>
          <div className="h-1 w-24 bg-orange-400"></div>
        </div>

        {/* Success Message */}
        {saveSuccess && (
          <div className="border-2 border-green-600 bg-green-50 px-6 py-4 mb-6 flex items-center gap-3">
            <CheckCircle size={24} className="text-green-600" />
            <p className="text-green-800 font-semibold">Settings saved successfully!</p>
          </div>
        )}

        {/* Tabs */}
        <div className="border-2 border-gray-300 bg-white mb-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
            {['profile', 'notifications', 'security', 'system'].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-4 font-bold border-b-4 transition-colors text-center ${
                  activeTab === tab
                    ? 'bg-blue-50 border-b-4 border-blue-900 text-blue-900'
                    : 'bg-gray-50 border-b-2 border-gray-300 text-gray-700 hover:bg-gray-100'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Profile Tab */}
        {activeTab === 'profile' && (
          <div className="border-2 border-gray-300 bg-white p-8 space-y-6">
            <div>
              <h3 className="text-xl font-bold text-blue-900 mb-6">Personal Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">First Name</label>
                  <input
                    type="text"
                    value={profileData.firstName}
                    onChange={(e) => handleProfileChange('firstName', e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-300 focus:border-blue-900 focus:outline-none text-gray-700"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Last Name</label>
                  <input
                    type="text"
                    value={profileData.lastName}
                    onChange={(e) => handleProfileChange('lastName', e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-300 focus:border-blue-900 focus:outline-none text-gray-700"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    value={profileData.email}
                    onChange={(e) => handleProfileChange('email', e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-300 focus:border-blue-900 focus:outline-none text-gray-700"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    value={profileData.phone}
                    onChange={(e) => handleProfileChange('phone', e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-300 focus:border-blue-900 focus:outline-none text-gray-700"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Designation</label>
                  <input
                    type="text"
                    value={profileData.designation}
                    disabled
                    className="w-full px-4 py-3 border-2 border-gray-300 bg-gray-100 text-gray-700"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Assigned Region</label>
                  <input
                    type="text"
                    value={profileData.region}
                    disabled
                    className="w-full px-4 py-3 border-2 border-gray-300 bg-gray-100 text-gray-700"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Office Location</label>
                  <input
                    type="text"
                    value={profileData.officeLocation}
                    onChange={(e) => handleProfileChange('officeLocation', e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-300 focus:border-blue-900 focus:outline-none text-gray-700"
                  />
                </div>
              </div>
            </div>
            <div className="border-t-2 border-gray-300 pt-6">
              <button
                onClick={handleSave}
                className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-3 px-8 flex items-center gap-2 transition-colors"
              >
                <Save size={20} /> Save Changes
              </button>
            </div>
          </div>
        )}

        {/* Notifications Tab */}
        {activeTab === 'notifications' && (
          <div className="border-2 border-gray-300 bg-white p-8 space-y-6">
            <div>
              <h3 className="text-xl font-bold text-blue-900 mb-6">Notification Preferences</h3>
              <div className="space-y-4">
                {[
                  { key: 'emailAlerts', label: 'Email Alerts', description: 'Receive alerts via email' },
                  { key: 'smsAlerts', label: 'SMS Alerts', description: 'Receive alerts via SMS' },
                  { key: 'pushNotifications', label: 'Push Notifications', description: 'Receive push notifications' },
                  { key: 'dailyDigest', label: 'Daily Digest', description: 'Receive daily summary digest' },
                  { key: 'taskReminders', label: 'Task Reminders', description: 'Get reminders for pending tasks' },
                  { key: 'performanceUpdates', label: 'Performance Updates', description: 'Receive worker performance reports' },
                ].map(setting => (
                  <div key={setting.key} className="flex items-center justify-between p-4 border-2 border-gray-300 bg-gray-50 hover:bg-gray-100">
                    <div>
                      <p className="font-semibold text-gray-800">{setting.label}</p>
                      <p className="text-sm text-gray-600">{setting.description}</p>
                    </div>
                    <div className="relative">
                      <input
                        type="checkbox"
                        checked={notificationSettings[setting.key]}
                        onChange={() => handleNotificationChange(setting.key)}
                        className="w-6 h-6 accent-blue-900 cursor-pointer"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="border-t-2 border-gray-300 pt-6">
              <button
                onClick={handleSave}
                className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-3 px-8 flex items-center gap-2 transition-colors"
              >
                <Save size={20} /> Save Preferences
              </button>
            </div>
          </div>
        )}

        {/* Security Tab */}
        {activeTab === 'security' && (
          <div className="border-2 border-gray-300 bg-white p-8 space-y-6">
            <div className="bg-blue-50 border-l-4 border-blue-900 px-6 py-4 flex items-start gap-3">
              <AlertCircle size={24} className="text-blue-900 flex-shrink-0" />
              <div>
                <p className="font-bold text-blue-900">Security Alert</p>
                <p className="text-sm text-blue-800 mt-1">Last login: 2024-01-18 at 10:30 AM from IP 192.168.1.1</p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-blue-900 mb-6">Security Settings</h3>
              <div className="space-y-6">
                <div className="border-2 border-gray-300 p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-bold text-gray-800">Change Password</p>
                      <p className="text-sm text-gray-600 mt-1">Update your account password regularly</p>
                    </div>
                    <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 transition-colors">
                      Change Password
                    </button>
                  </div>
                </div>

                <div className="border-2 border-gray-300 p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="font-bold text-gray-800">Two-Factor Authentication</p>
                      <p className="text-sm text-gray-600 mt-1">Add an extra layer of security to your account</p>
                    </div>
                    <input
                      type="checkbox"
                      checked={securitySettings.twoFactorAuth}
                      onChange={(e) => handleSecurityChange('twoFactorAuth', e.target.checked)}
                      className="w-6 h-6 accent-blue-900 cursor-pointer"
                    />
                  </div>
                </div>

                <div className="border-2 border-gray-300 p-6">
                  <label className="block font-bold text-gray-800 mb-3">Session Timeout (Minutes)</label>
                  <select
                    value={securitySettings.sessionTimeout}
                    onChange={(e) => handleSecurityChange('sessionTimeout', e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-300 focus:border-blue-900 focus:outline-none text-gray-700 bg-white"
                  >
                    <option>15</option>
                    <option>30</option>
                    <option>60</option>
                    <option>120</option>
                  </select>
                </div>

                <div className="border-2 border-gray-300 p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-bold text-gray-800">Login Alerts</p>
                      <p className="text-sm text-gray-600 mt-1">Get notified of new login attempts</p>
                    </div>
                    <input
                      type="checkbox"
                      checked={securitySettings.loginAlerts}
                      onChange={(e) => handleSecurityChange('loginAlerts', e.target.checked)}
                      className="w-6 h-6 accent-blue-900 cursor-pointer"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t-2 border-gray-300 pt-6">
              <button
                onClick={handleSave}
                className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-3 px-8 flex items-center gap-2 transition-colors"
              >
                <Save size={20} /> Save Security Settings
              </button>
            </div>
          </div>
        )}

        {/* System Tab */}
        {activeTab === 'system' && (
          <div className="border-2 border-gray-300 bg-white p-8 space-y-6">
            <div>
              <h3 className="text-xl font-bold text-blue-900 mb-6">System Preferences</h3>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Theme</label>
                    <select
                      value={systemSettings.theme}
                      onChange={(e) => handleSystemChange('theme', e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-300 focus:border-blue-900 focus:outline-none text-gray-700 bg-white"
                    >
                      <option value="light">Light Mode</option>
                      <option value="dark">Dark Mode</option>
                      <option value="auto">Auto (System)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Language</label>
                    <select
                      value={systemSettings.language}
                      onChange={(e) => handleSystemChange('language', e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-300 focus:border-blue-900 focus:outline-none text-gray-700 bg-white"
                    >
                      <option value="english">English</option>
                      <option value="hindi">Hindi</option>
                      <option value="marathi">Marathi</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Date Format</label>
                    <select
                      value={systemSettings.dateFormat}
                      onChange={(e) => handleSystemChange('dateFormat', e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-300 focus:border-blue-900 focus:outline-none text-gray-700 bg-white"
                    >
                      <option value="dd/mm/yyyy">DD/MM/YYYY</option>
                      <option value="mm/dd/yyyy">MM/DD/YYYY</option>
                      <option value="yyyy-mm-dd">YYYY-MM-DD</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Timezone</label>
                    <input
                      type="text"
                      value={systemSettings.timezone}
                      disabled
                      className="w-full px-4 py-3 border-2 border-gray-300 bg-gray-100 text-gray-700"
                    />
                  </div>
                </div>

                <div className="border-t-2 border-gray-300 pt-6">
                  <div className="flex items-center justify-between p-4 border-2 border-gray-300 bg-gray-50">
                    <div>
                      <p className="font-bold text-gray-800">Auto-Refresh Dashboard</p>
                      <p className="text-sm text-gray-600 mt-1">Automatically refresh dashboard data</p>
                    </div>
                    <input
                      type="checkbox"
                      checked={systemSettings.autoRefresh}
                      onChange={(e) => handleSystemChange('autoRefresh', e.target.checked)}
                      className="w-6 h-6 accent-blue-900 cursor-pointer"
                    />
                  </div>
                  {systemSettings.autoRefresh && (
                    <div className="mt-4">
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Refresh Interval (Minutes)</label>
                      <select
                        value={systemSettings.refreshInterval}
                        onChange={(e) => handleSystemChange('refreshInterval', e.target.value)}
                        className="w-full px-4 py-3 border-2 border-gray-300 focus:border-blue-900 focus:outline-none text-gray-700 bg-white"
                      >
                        <option value="1">1 Minute</option>
                        <option value="5">5 Minutes</option>
                        <option value="10">10 Minutes</option>
                        <option value="15">15 Minutes</option>
                      </select>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="border-t-2 border-gray-300 pt-6">
              <button
                onClick={handleSave}
                className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-3 px-8 flex items-center gap-2 transition-colors"
              >
                <Save size={20} /> Save System Settings
              </button>
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="border-t-4 border-orange-400 bg-gray-50 px-6 py-4 text-center text-xs text-gray-600 mt-12">
          <p>© 2025 Ministry of Health and Family Welfare, Government of India | System Version: 2.1.0</p>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;