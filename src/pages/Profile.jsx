import React, { useState } from 'react';
import { User, Mail, Phone, MapPin, Calendar, Edit2, Save, X, Upload } from 'lucide-react';

const Profile = ({ theme, lang, userPhoto, setUserPhoto, userName, setUserName, onBackClick }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(userName);
  const [editedEmail, setEditedEmail] = useState('admin@health.gov.in');
  const [editedPhone, setEditedPhone] = useState('+91 9876543210');
  const [editedArea, setEditedArea] = useState('Zone A');
  const [editedJoinDate, setEditedJoinDate] = useState('2022-01-15');
  const [photoPreview, setPhotoPreview] = useState(userPhoto);
  const [showPhotoModal, setShowPhotoModal] = useState(false);

  const translations = {
    en: {
      profile: 'Profile',
      personalInformation: 'Personal Information',
      editProfile: 'Edit Profile',
      saveChanges: 'Save Changes',
      cancel: 'Cancel',
      fullName: 'Full Name',
      email: 'Email Address',
      phone: 'Phone Number',
      area: 'Assigned Area',
      joinDate: 'Join Date',
      role: 'Role',
      ashaWorkerProfile: 'ASHA Worker Profile',
      supervisor: 'Supervisor',
      profilePhoto: 'Profile Photo',
      changePhoto: 'Change Photo',
      uploadPhoto: 'Upload Photo',
      selectFile: 'Select a file',
      uploadInstructions: 'Upload a JPG, PNG image (Max 5MB)',
      photoUploadedSuccessfully: 'Photo uploaded successfully!',
      save: 'Save',
      remove: 'Remove',
      changesUpdated: 'Profile changes updated successfully!',
      workInformation: 'Work Information',
      taskStatistics: 'Task Statistics',
      tasksCompleted: 'Tasks Completed',
      pendingTasks: 'Pending Tasks',
      completionRate: 'Completion Rate',
      performance: 'Performance Score',
      recentActivity: 'Recent Activity',
      noActivity: 'No recent activity',
      back: 'Back to Settings'
    },
    mr: {
      profile: 'प्रोफाईल',
      personalInformation: 'व्यक्तिगत माहिती',
      editProfile: 'प्रोफाईल संपादित करा',
      saveChanges: 'बदल जतन करा',
      cancel: 'रद्द करा',
      fullName: 'पूर्ण नाव',
      email: 'ईमेल पत्ता',
      phone: 'फोन क्रमांक',
      area: 'नियुक्त क्षेत्र',
      joinDate: 'सामील झाल्याची तारीख',
      role: 'भूमिका',
      ashaWorkerProfile: 'आशा कार्यकर्ता प्रोफाईल',
      supervisor: 'पर्यवेक्षक',
      profilePhoto: 'प्रोफाईल फोटो',
      changePhoto: 'फोटो बदला',
      uploadPhoto: 'फोटो अपलोड करा',
      selectFile: 'फाइल निवडा',
      uploadInstructions: 'JPG, PNG चित्र अपलोड करा (कमाल 5MB)',
      photoUploadedSuccessfully: 'फोटो यशस्वीरित्या अपलोड झाला!',
      save: 'जतन करा',
      remove: 'हटवा',
      changesUpdated: 'प्रोफाईल बदल यशस्वीरित्या अपडेट झाले!',
      workInformation: 'कार्य माहिती',
      taskStatistics: 'कार्य आंकडे',
      tasksCompleted: 'पूर्ण झालेली कार्य',
      pendingTasks: 'प्रलंबित कार्य',
      completionRate: 'पूर्णता दर',
      performance: 'कार्यक्षमता स्कोर',
      recentActivity: 'अलीकडील क्रियाकलाप',
      noActivity: 'कोणतीही अलीकडील क्रियाकलाप नाही',
      back: 'सेटिंग्जकडे परत'
    }
  };

  const t = (key) => translations[lang][key] || key;

  const isDark = theme === 'dark';
  const bgColor = isDark ? 'bg-gray-900' : 'bg-gray-50';
  const textColor = isDark ? 'text-gray-100' : 'text-gray-900';
  const cardBg = isDark ? 'bg-gray-800' : 'bg-white';
  const borderColor = isDark ? 'border-gray-700' : 'border-gray-300';
  const secondaryText = isDark ? 'text-gray-400' : 'text-gray-600';
  const labelText = isDark ? 'text-gray-300' : 'text-gray-600';
  const inputBg = isDark ? 'bg-gray-700 text-gray-100 border-gray-600' : 'bg-white text-gray-900 border-gray-300';
  const hoverBg = isDark ? 'hover:bg-gray-700' : 'hover:bg-blue-50';

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert(lang === 'en' ? 'File size too large. Maximum 5MB allowed.' : 'फाइल आकार खूप मोठा आहे. कमाल 5MB परवानगी आहे.');
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSavePhoto = () => {
    if (photoPreview) {
      setUserPhoto(photoPreview);
      setShowPhotoModal(false);
      alert(t('photoUploadedSuccessfully'));
    }
  };

  const handleSaveProfile = () => {
    setUserName(editedName);
    setIsEditing(false);
    alert(t('changesUpdated'));
  };

  const recentActivities = [
    { activity: lang === 'en' ? 'Completed task: Health Campaign' : 'पूर्ण कार्य: आरोग्य मोहिम', time: '2 hours ago' },
    { activity: lang === 'en' ? 'Updated profile photo' : 'प्रोफाईल फोटो अपडेट केला', time: '1 day ago' },
    { activity: lang === 'en' ? 'Attended training session' : 'प्रशिक्षण सत्रास उपस्थित राहिले', time: '3 days ago' },
    { activity: lang === 'en' ? 'Submitted task report' : 'कार्य अहवाल सादर केला', time: '5 days ago' }
  ];

  return (
    <div className={`w-full ${bgColor} ${textColor} p-6`}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className={`text-3xl font-bold ${isDark ? 'text-orange-400' : 'text-blue-900'}`}>{t('profile')}</h1>
          <button
            onClick={onBackClick}
            className={`${isDark ? 'bg-gray-700 hover:bg-gray-600 text-white' : 'bg-gray-300 hover:bg-gray-400 text-gray-800'} font-bold py-2 px-4 rounded transition-colors`}
          >
            {t('back')}
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Profile Photo & Basic Info */}
          <div className="lg:col-span-1">
            <div className={`border-2 ${borderColor} ${cardBg} p-6 rounded-lg`}>
              {/* Profile Photo */}
              <div className="text-center mb-6">
                <div className="relative inline-block">
                  {photoPreview ? (
                    <img 
                      src={photoPreview} 
                      alt="Profile" 
                      className={`w-40 h-40 rounded-full object-cover border-4 ${isDark ? 'border-orange-400' : 'border-blue-900'}`}
                    />
                  ) : (
                    <div className={`w-40 h-40 rounded-full ${isDark ? 'bg-gradient-to-br from-gray-700 to-gray-600' : 'bg-gradient-to-br from-blue-400 to-blue-600'} flex items-center justify-center border-4 ${isDark ? 'border-orange-400' : 'border-blue-900'}`}>
                      <User size={80} className="text-white" />
                    </div>
                  )}
                  <button
                    onClick={() => setShowPhotoModal(true)}
                    className="absolute bottom-0 right-0 bg-orange-400 hover:bg-orange-500 text-white p-3 rounded-full transition-colors shadow-lg"
                  >
                    <Upload size={20} />
                  </button>
                </div>
                <h2 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-blue-900'} mt-4`}>{editedName}</h2>
                <p className={`font-semibold ${secondaryText}`}>{t('supervisor')}</p>
              </div>

              {/* Quick Stats */}
              <div className={`space-y-4 border-t-2 ${borderColor} pt-4`}>
                <div className={`text-center pb-4 border-b-2 ${borderColor}`}>
                  <p className={`text-sm ${labelText} font-semibold mb-1`}>{t('performance')}</p>
                  <p className={`text-3xl font-bold ${isDark ? 'text-orange-400' : 'text-blue-900'}`}>92%</p>
                </div>
                <div className={`text-center pb-4 border-b-2 ${borderColor}`}>
                  <p className={`text-sm ${labelText} font-semibold mb-1`}>{t('completionRate')}</p>
                  <p className={`text-3xl font-bold ${isDark ? 'text-green-400' : 'text-green-600'}`}>89%</p>
                </div>
                <div className="text-center">
                  <p className={`text-sm ${labelText} font-semibold mb-1`}>{t('tasksCompleted')}</p>
                  <p className={`text-3xl font-bold ${isDark ? 'text-orange-400' : 'text-blue-900'}`}>45</p>
                </div>
              </div>
            </div>
          </div>

          {/* Personal Information */}
          <div className="lg:col-span-2 space-y-6">
            {/* Edit Profile Card */}
            <div className={`border-2 ${borderColor} ${cardBg} p-6 rounded-lg`}>
              <div className="flex items-center justify-between mb-6">
                <h3 className={`text-2xl font-bold ${isDark ? 'text-orange-400' : 'text-blue-900'}`}>{t('personalInformation')}</h3>
                <button
                  onClick={() => setIsEditing(!isEditing)}
                  className={`flex items-center gap-2 font-bold py-2 px-4 rounded transition-colors ${
                    isEditing 
                      ? isDark ? 'bg-red-700 hover:bg-red-600' : 'bg-red-500 hover:bg-red-600'
                      : isDark ? 'bg-orange-600 hover:bg-orange-700' : 'bg-blue-900 hover:bg-blue-800'
                  } text-white`}
                >
                  {isEditing ? (
                    <>
                      <X size={18} />
                      {t('cancel')}
                    </>
                  ) : (
                    <>
                      <Edit2 size={18} />
                      {t('editProfile')}
                    </>
                  )}
                </button>
              </div>

              <div className="space-y-4">
                {/* Full Name */}
                <div>
                  <label className={`block text-sm ${labelText} font-semibold mb-2`}>
                    <User size={16} className="inline mr-2" />
                    {t('fullName')}
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={editedName}
                      onChange={(e) => setEditedName(e.target.value)}
                      className={`w-full px-4 py-2 border-2 rounded focus:border-orange-400 outline-none ${inputBg}`}
                    />
                  ) : (
                    <p className={`${textColor} font-semibold text-lg`}>{editedName}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className={`block text-sm ${labelText} font-semibold mb-2`}>
                    <Mail size={16} className="inline mr-2" />
                    {t('email')}
                  </label>
                  {isEditing ? (
                    <input
                      type="email"
                      value={editedEmail}
                      onChange={(e) => setEditedEmail(e.target.value)}
                      className={`w-full px-4 py-2 border-2 rounded focus:border-orange-400 outline-none ${inputBg}`}
                    />
                  ) : (
                    <p className={`${textColor} font-semibold`}>{editedEmail}</p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label className={`block text-sm ${labelText} font-semibold mb-2`}>
                    <Phone size={16} className="inline mr-2" />
                    {t('phone')}
                  </label>
                  {isEditing ? (
                    <input
                      type="tel"
                      value={editedPhone}
                      onChange={(e) => setEditedPhone(e.target.value)}
                      className={`w-full px-4 py-2 border-2 rounded focus:border-orange-400 outline-none ${inputBg}`}
                    />
                  ) : (
                    <p className={`${textColor} font-semibold`}>{editedPhone}</p>
                  )}
                </div>

                {/* Area */}
                <div>
                  <label className={`block text-sm ${labelText} font-semibold mb-2`}>
                    <MapPin size={16} className="inline mr-2" />
                    {t('area')}
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={editedArea}
                      onChange={(e) => setEditedArea(e.target.value)}
                      className={`w-full px-4 py-2 border-2 rounded focus:border-orange-400 outline-none ${inputBg}`}
                    />
                  ) : (
                    <p className={`${textColor} font-semibold`}>{editedArea}</p>
                  )}
                </div>

                {/* Join Date */}
                <div>
                  <label className={`block text-sm ${labelText} font-semibold mb-2`}>
                    <Calendar size={16} className="inline mr-2" />
                    {t('joinDate')}
                  </label>
                  {isEditing ? (
                    <input
                      type="date"
                      value={editedJoinDate}
                      onChange={(e) => setEditedJoinDate(e.target.value)}
                      className={`w-full px-4 py-2 border-2 rounded focus:border-orange-400 outline-none ${inputBg}`}
                    />
                  ) : (
                    <p className={`${textColor} font-semibold`}>{new Date(editedJoinDate).toLocaleDateString('en-IN')}</p>
                  )}
                </div>
              </div>

              {/* Save Button */}
              {isEditing && (
                <button
                  onClick={handleSaveProfile}
                  className={`w-full mt-6 ${isDark ? 'bg-green-700 hover:bg-green-600' : 'bg-green-600 hover:bg-green-700'} text-white font-bold py-3 px-6 rounded transition-colors flex items-center justify-center gap-2`}
                >
                  <Save size={20} />
                  {t('saveChanges')}
                </button>
              )}
            </div>

            {/* Work Information */}
            <div className={`border-2 ${borderColor} ${cardBg} p-6 rounded-lg`}>
              <h3 className={`text-2xl font-bold ${isDark ? 'text-orange-400' : 'text-blue-900'} mb-6`}>{t('workInformation')}</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className={`border-l-4 ${isDark ? 'border-green-500 bg-green-900 bg-opacity-30' : 'border-green-600 bg-green-50'} px-4 py-4`}>
                  <p className={`text-sm ${labelText} font-semibold mb-2`}>{t('tasksCompleted')}</p>
                  <p className={`text-3xl font-bold ${isDark ? 'text-green-400' : 'text-green-700'}`}>45</p>
                </div>
                <div className={`border-l-4 ${isDark ? 'border-orange-500 bg-orange-900 bg-opacity-30' : 'border-orange-500 bg-orange-50'} px-4 py-4`}>
                  <p className={`text-sm ${labelText} font-semibold mb-2`}>{t('pendingTasks')}</p>
                  <p className={`text-3xl font-bold ${isDark ? 'text-orange-400' : 'text-orange-700'}`}>5</p>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className={`border-2 ${borderColor} ${cardBg} p-6 rounded-lg`}>
              <h3 className={`text-2xl font-bold ${isDark ? 'text-orange-400' : 'text-blue-900'} mb-6`}>{t('recentActivity')}</h3>
              
              <div className="space-y-3">
                {recentActivities.map((item, idx) => (
                  <div key={idx} className={`flex items-start gap-4 pb-4 border-b-2 ${borderColor} last:border-b-0`}>
                    <div className={`w-2 h-2 ${isDark ? 'bg-orange-400' : 'bg-blue-900'} rounded-full mt-2 flex-shrink-0`}></div>
                    <div className="flex-1">
                      <p className={`${textColor} font-semibold`}>{item.activity}</p>
                      <p className={`text-xs ${secondaryText}`}>{item.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Photo Upload Modal */}
      {showPhotoModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className={`${cardBg} rounded-lg border-4 border-orange-400 max-w-md w-full p-6`}>
            <h2 className={`text-2xl font-bold ${isDark ? 'text-orange-400' : 'text-blue-900'} mb-4`}>{t('uploadPhoto')}</h2>
            
            <div className="mb-6">
              <p className={`text-sm ${labelText} mb-4`}>{t('uploadInstructions')}</p>
              
              {photoPreview ? (
                <div className="mb-4">
                  <img 
                    src={photoPreview} 
                    alt="Preview" 
                    className={`w-full h-40 object-cover rounded border-2 ${borderColor}`}
                  />
                  <p className={`text-sm ${isDark ? 'text-green-400' : 'text-green-600'} font-semibold mt-2`}>✓ {t('photoUploadedSuccessfully')}</p>
                </div>
              ) : (
                <label className="block w-full">
                  <div className={`border-2 border-dashed ${isDark ? 'border-orange-400 hover:bg-gray-700' : 'border-blue-900 hover:bg-blue-50'} rounded-lg p-6 text-center cursor-pointer transition-colors`}>
                    <Upload size={32} className={`${isDark ? 'text-orange-400' : 'text-blue-900'} mx-auto mb-2`} />
                    <p className={`${isDark ? 'text-orange-400' : 'text-blue-900'} font-semibold`}>{t('selectFile')}</p>
                    <input 
                      type="file" 
                      accept="image/jpeg,image/png"
                      onChange={handlePhotoUpload}
                      className="hidden"
                    />
                  </div>
                </label>
              )}
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => {
                  setShowPhotoModal(false);
                  setPhotoPreview(userPhoto);
                }}
                className={`flex-1 ${isDark ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-300 hover:bg-gray-400'} ${isDark ? 'text-white' : 'text-gray-800'} font-bold py-2 px-4 transition-colors border-2 ${borderColor} rounded`}
              >
                {t('cancel')}
              </button>
              {photoPreview && (
                <button
                  onClick={handleSavePhoto}
                  className={`flex-1 ${isDark ? 'bg-green-700 hover:bg-green-600' : 'bg-green-600 hover:bg-green-700'} text-white font-bold py-2 px-4 transition-colors border-2 border-green-600 rounded`}
                >
                  {t('save')}
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;