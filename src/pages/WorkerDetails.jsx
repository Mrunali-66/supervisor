import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ArrowLeft, Phone, Mail, MapPin, Calendar, CheckCircle, Clock, Globe, Upload, User } from 'lucide-react';

const WorkerDetails = ({ selectedWorker, setCurrentPage, setSelectedWorker }) => {
  const [lang, setLang] = useState('en');
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [photoPreview, setPhotoPreview] = useState(null);
  const [showUploadModal, setShowUploadModal] = useState(false);

  const translations = {
    en: {
      backToList: 'Back to Workers List',
      workerProfile: 'ASHA Worker Profile & Performance Report',
      workerName: 'Worker Name',
      currentStatus: 'Current Status',
      performanceRating: 'Performance Rating',
      active: 'Active',
      inactive: 'Inactive',
      contactInfo: 'Contact Information',
      emailAddress: 'Email Address',
      phoneNumber: 'Phone Number',
      assignedVillage: 'Assigned Village',
      joinDate: 'Join Date',
      taskStatistics: 'Task Statistics & Performance Metrics',
      tasksCompleted: 'Tasks Completed',
      successfulCompletions: 'Successful completions',
      pendingTasks: 'Pending Tasks',
      awaitingCompletion: 'Awaiting completion',
      totalTasks: 'Total Tasks',
      overallWorkload: 'Overall workload',
      completionRate: 'Completion Rate',
      successRatio: 'Success ratio',
      monthlyChart: 'Monthly Task Completion Chart (2024)',
      yearToDate: 'Year-to-date performance tracking',
      recentTasks: 'Recent Tasks Completed',
      activityLog: 'Activity Log',
      editDetails: 'Edit Worker Details',
      downloadReport: 'Download Report',
      addPhoto: 'Add Profile Photo',
      uploadPhoto: 'Upload Photo',
      changePhoto: 'Change Photo',
      removePhoto: 'Remove Photo',
      selectFile: 'Select a file',
      photoUploadedSuccessfully: 'Photo uploaded successfully!',
      uploadInstructions: 'Upload a JPG, PNG image (Max 5MB)',
      copyright: '© 2025 Ministry of Health and Family Welfare, Government of India | Report Generated: Today',
      cancel: 'Cancel',
      save: 'Save',
      noWorkerSelected: 'No worker selected',
      fileSizeTooLarge: 'File size too large. Maximum 5MB allowed.',
      photoSavedSuccessfully: 'Photo saved successfully!',
      recentTasksList: [
        { task: 'Health Campaign - Vaccination Drive', date: '3 days ago' },
        { task: 'Community Awareness Program', date: '5 days ago' },
        { task: 'Health Check-up Camp', date: '7 days ago' },
        { task: 'Maternal Health Training', date: '10 days ago' },
      ],
      activityLogList: [
        { activity: 'Task marked as completed', time: '2 hours ago' },
        { activity: 'New task assigned to worker', time: '5 hours ago' },
        { activity: 'Performance review conducted', time: '1 day ago' },
        { activity: 'Training session attended', time: '2 days ago' },
      ]
    },
    mr: {
      backToList: 'कार्यकर्त्यांच्या सूचीवर परत',
      workerProfile: 'आशा कार्यकर्ता प्रोफाइल आणि कार्यक्षमता अहवाल',
      workerName: 'कार्यकर्ता नाव',
      currentStatus: 'वर्तमान स्थिती',
      performanceRating: 'कार्यक्षमता रेटिंग',
      active: 'सक्रिय',
      inactive: 'निष्क्रिय',
      contactInfo: 'संपर्क माहिती',
      emailAddress: 'ईमेल पत्ता',
      phoneNumber: 'फोन क्रमांक',
      assignedVillage: 'नियुक्त गाव',
      joinDate: 'सामील होण्याची तारीख',
      taskStatistics: 'कार्य आंकडे आणि कार्यक्षमता मेट्रिक्स',
      tasksCompleted: 'पूर्ण झालेली कार्ये',
      successfulCompletions: 'यशस्वी पूर्णता',
      pendingTasks: 'प्रलंबित कार्ये',
      awaitingCompletion: 'पूर्णतेची प्रतीक्षा',
      totalTasks: 'एकूण कार्ये',
      overallWorkload: 'एकूण कामाचा भार',
      completionRate: 'पूर्णता दर',
      successRatio: 'यश अनुपात',
      monthlyChart: 'मासिक कार्य पूर्णता तक्ता (2024)',
      yearToDate: 'वर्षभरातील कार्यक्षमता ट्रॅकिंग',
      recentTasks: 'अलीकडील पूर्ण झालेली कार्ये',
      activityLog: 'क्रियाकलाप लॉग',
      editDetails: 'कार्यकर्ता तपशील संपादित करा',
      downloadReport: 'अहवाल डाउनलोड करा',
      addPhoto: 'प्रोफाइल फोटो जोडा',
      uploadPhoto: 'फोटो अपलोड करा',
      changePhoto: 'फोटो बदला',
      removePhoto: 'फोटो हटवा',
      selectFile: 'फाइल निवडा',
      photoUploadedSuccessfully: 'फोटो यशस्वीरित्या अपलोड झाला!',
      uploadInstructions: 'JPG, PNG चित्र अपलोड करा (कमाल 5MB)',
      copyright: '© 2025 आरोग्य आणि कुटुंब कल्याण मंत्रालय, भारत सरकार | अहवाल निर्माण: आज',
      cancel: 'रद्द करा',
      save: 'जतन करा',
      noWorkerSelected: 'कोणताही कार्यकर्ता निवडला नाही',
      fileSizeTooLarge: 'फाइल आकार खूप मोठा आहे. कमाल 5MB परवानगी आहे.',
      photoSavedSuccessfully: 'फोटो यशस्वीरित्या जतन झाला!',
      recentTasksList: [
        { task: 'आरोग्य मोहीम - लसीकरण मोहीम', date: '३ दिवसांपूर्वी' },
        { task: 'समाज जागरूकता कार्यक्रम', date: '५ दिवसांपूर्वी' },
        { task: 'आरोग्य तपासणी शिबिर', date: '७ दिवसांपूर्वी' },
        { task: 'मातृत्व आरोग्य प्रशिक्षण', date: '१० दिवसांपूर्वी' },
      ],
      activityLogList: [
        { activity: 'कार्य पूर्ण म्हणून चिन्हांकित केले', time: '२ तासांपूर्वी' },
        { activity: 'कार्यकर्त्याला नवीन कार्य नियुक्त केले', time: '५ तासांपूर्वी' },
        { activity: 'कार्यक्षमता समीक्षा आयोजित केली', time: '१ दिवसापूर्वी' },
        { activity: 'प्रशिक्षण सत्रास उपस्थित राहिले', time: '२ दिवसांपूर्वी' },
      ]
    }
  };

  const t = (key) => {
    if (typeof translations[lang][key] === 'object') {
      return translations[lang][key];
    }
    return translations[lang][key] || key;
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Check file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert(t('fileSizeTooLarge'));
        return;
      }

      // Create preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoPreview(reader.result);
        setProfilePhoto(file);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSavePhoto = () => {
    if (photoPreview) {
      // In a real app, you'd upload this to a server
      console.log('Photo saved:', profilePhoto);
      setShowUploadModal(false);
      alert(t('photoSavedSuccessfully'));
    }
  };

  const handleRemovePhoto = () => {
    setPhotoPreview(null);
    setProfilePhoto(null);
  };

  if (!selectedWorker) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600 text-lg font-semibold">{t('noWorkerSelected')}</p>
        </div>
      </div>
    );
  }

  const workerChartData = [
    { month: lang === 'mr' ? 'जाने' : 'Jan', completed: 4 },
    { month: lang === 'mr' ? 'फेब्रु' : 'Feb', completed: 5 },
    { month: lang === 'mr' ? 'मार्च' : 'Mar', completed: 4 },
    { month: lang === 'mr' ? 'एप्रिल' : 'Apr', completed: 6 },
    { month: lang === 'mr' ? 'मे' : 'May', completed: 5 },
    { month: lang === 'mr' ? 'जून' : 'Jun', completed: 7 },
  ];

  const completionRate = Math.round((selectedWorker.tasksCompleted / (selectedWorker.tasksCompleted + selectedWorker.tasksRemaining)) * 100);

  const handleBackClick = () => {
    setCurrentPage('workers');
    setSelectedWorker(null);
  };

  // Get worker name and village based on language
  const workerName = lang === 'mr' ? selectedWorker.nameMr : selectedWorker.nameEn;
  const workerVillage = lang === 'mr' ? selectedWorker.villageMr : selectedWorker.villageEn;

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="border-b-4 border-orange-400 bg-gradient-to-r from-blue-900 to-blue-800 px-6 py-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-4">
            <button onClick={handleBackClick} className="text-white hover:text-orange-300 transition-colors flex items-center gap-2">
              <ArrowLeft size={24} />
              <span className="font-semibold">{t('backToList')}</span>
            </button>
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
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-orange-400 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">📋</span>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white">{workerName}</h1>
              <p className="text-blue-100 text-sm mt-1">{t('workerProfile')}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Profile Header Card with Photo */}
        <div className="border-2 border-gray-300 bg-white mb-8">
          <div className="border-b-4 border-blue-900 p-6 bg-blue-50">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {/* Profile Photo Section */}
              <div className="flex flex-col items-center justify-center">
                <div className="relative">
                  {photoPreview ? (
                    <img 
                      src={photoPreview} 
                      alt="Worker Profile" 
                      className="w-32 h-32 rounded-full object-cover border-4 border-blue-900"
                    />
                  ) : (
                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center border-4 border-blue-900">
                      <User size={64} className="text-white" />
                    </div>
                  )}
                  <button
                    onClick={() => setShowUploadModal(true)}
                    className="absolute bottom-0 right-0 bg-orange-400 hover:bg-orange-500 text-white p-2 rounded-full transition-colors shadow-lg"
                    title={t('uploadPhoto')}
                  >
                    <Upload size={20} />
                  </button>
                </div>
                <p className="text-sm text-gray-600 mt-3 text-center font-semibold">{t('addPhoto')}</p>
              </div>

              {/* Worker Details */}
              <div>
                <p className="text-sm text-gray-600 font-semibold mb-2">{t('workerName')}</p>
                <p className="text-2xl font-bold text-blue-900">{workerName}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 font-semibold mb-2">{t('currentStatus')}</p>
                <div className={`px-4 py-2 font-bold inline-block border-2 ${
                  selectedWorker.status === 'active'
                    ? 'bg-green-100 border-green-600 text-green-800'
                    : 'bg-gray-100 border-gray-600 text-gray-800'
                }`}>
                  {selectedWorker.status === 'active' ? t('active') : t('inactive')}
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-600 font-semibold mb-2">{t('performanceRating')}</p>
                <div className="bg-white border-2 border-blue-900 px-4 py-2 inline-block">
                  <p className="text-3xl font-bold text-blue-900">{selectedWorker.performance}%</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Photo Upload Modal */}
        {showUploadModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg border-4 border-blue-900 max-w-md w-full p-6">
              <h2 className="text-2xl font-bold text-blue-900 mb-4">{t('uploadPhoto')}</h2>
              
              <div className="mb-6">
                <p className="text-sm text-gray-600 mb-4">{t('uploadInstructions')}</p>
                
                {photoPreview ? (
                  <div className="mb-4">
                    <img 
                      src={photoPreview} 
                      alt="Preview" 
                      className="w-full h-40 object-cover rounded border-2 border-gray-300"
                    />
                    <p className="text-sm text-green-600 font-semibold mt-2">✓ {t('photoUploadedSuccessfully')}</p>
                  </div>
                ) : (
                  <label className="block w-full">
                    <div className="border-2 border-dashed border-blue-900 rounded-lg p-6 text-center cursor-pointer hover:bg-blue-50 transition-colors">
                      <Upload size={32} className="text-blue-900 mx-auto mb-2" />
                      <p className="text-blue-900 font-semibold">{t('selectFile')}</p>
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
                {photoPreview && (
                  <button
                    onClick={handleRemovePhoto}
                    className="flex-1 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 transition-colors border-2 border-red-500"
                  >
                    {t('removePhoto')}
                  </button>
                )}
                <button
                  onClick={() => setShowUploadModal(false)}
                  className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 transition-colors border-2 border-gray-300"
                >
                  {t('cancel')}
                </button>
                {photoPreview && (
                  <button
                    onClick={handleSavePhoto}
                    className="flex-1 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 transition-colors border-2 border-green-600"
                  >
                    {t('save')}
                  </button>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Contact Information */}
        <div className="border-2 border-gray-300 bg-white mb-8">
          <div className="border-b-2 border-blue-900 px-6 py-4 bg-gray-50">
            <h3 className="text-lg font-bold text-blue-900">{t('contactInfo')}</h3>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <Mail size={24} className="text-orange-500 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm text-gray-600 font-semibold mb-1">{t('emailAddress')}</p>
                  <p className="text-gray-800 font-semibold">{selectedWorker.email}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone size={24} className="text-blue-900 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm text-gray-600 font-semibold mb-1">{t('phoneNumber')}</p>
                  <p className="text-gray-800 font-semibold">{selectedWorker.phone}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin size={24} className="text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm text-gray-600 font-semibold mb-1">{t('assignedVillage')}</p>
                  <p className="text-gray-800 font-semibold">{workerVillage}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Calendar size={24} className="text-purple-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm text-gray-600 font-semibold mb-1">{t('joinDate')}</p>
                  <p className="text-gray-800 font-semibold">
                    {new Date(selectedWorker.joinDate).toLocaleDateString(lang === 'mr' ? 'mr-IN' : 'en-IN')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Task Statistics */}
        <div className="border-2 border-gray-300 bg-white mb-8">
          <div className="border-b-2 border-blue-900 px-6 py-4 bg-gray-50">
            <h3 className="text-lg font-bold text-blue-900">{t('taskStatistics')}</h3>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="border-l-4 border-green-600 bg-green-50 px-4 py-4">
                <p className="text-sm text-gray-600 font-semibold mb-2">{t('tasksCompleted')}</p>
                <p className="text-4xl font-bold text-green-700">{selectedWorker.tasksCompleted}</p>
                <p className="text-xs text-gray-600 mt-2">{t('successfulCompletions')}</p>
              </div>
              <div className="border-l-4 border-orange-500 bg-orange-50 px-4 py-4">
                <p className="text-sm text-gray-600 font-semibold mb-2">{t('pendingTasks')}</p>
                <p className="text-4xl font-bold text-orange-700">{selectedWorker.tasksRemaining}</p>
                <p className="text-xs text-gray-600 mt-2">{t('awaitingCompletion')}</p>
              </div>
              <div className="border-l-4 border-blue-900 bg-blue-50 px-4 py-4">
                <p className="text-sm text-gray-600 font-semibold mb-2">{t('totalTasks')}</p>
                <p className="text-4xl font-bold text-blue-900">
                  {selectedWorker.tasksCompleted + selectedWorker.tasksRemaining}
                </p>
                <p className="text-xs text-gray-600 mt-2">{t('overallWorkload')}</p>
              </div>
              <div className="border-l-4 border-purple-600 bg-purple-50 px-4 py-4">
                <p className="text-sm text-gray-600 font-semibold mb-2">{t('completionRate')}</p>
                <p className="text-4xl font-bold text-purple-700">{completionRate}%</p>
                <p className="text-xs text-gray-600 mt-2">{t('successRatio')}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Monthly Performance Chart */}
        <div className="border-2 border-gray-300 bg-white mb-8">
          <div className="border-b-2 border-blue-900 px-6 py-4 bg-gray-50">
            <h3 className="text-lg font-bold text-blue-900">{t('monthlyChart')}</h3>
            <p className="text-sm text-gray-600 mt-1">{t('yearToDate')}</p>
          </div>
          <div className="p-6">
            <ResponsiveContainer width="100%" height={350}>
              <BarChart data={workerChartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#d1d5db" />
                <XAxis dataKey="month" stroke="#374151" />
                <YAxis stroke="#374151" />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#fff', border: '2px solid #1e3a8a', borderRadius: '0px' }}
                />
                <Bar dataKey="completed" fill="#1e3a8a" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Recent Tasks Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Recent Tasks */}
          <div className="border-2 border-gray-300 bg-white">
            <div className="border-b-2 border-blue-900 px-6 py-4 bg-gray-50">
              <h3 className="text-lg font-bold text-blue-900">{t('recentTasks')}</h3>
            </div>
            <div className="divide-y-2 divide-gray-300">
              {t('recentTasksList').map((item, idx) => (
                <div key={idx} className={`p-4 flex items-start gap-3 ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                  <CheckCircle size={20} className="text-green-600 flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <p className="font-semibold text-gray-800">{item.task}</p>
                    <p className="text-sm text-gray-600">{item.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Activity Log */}
          <div className="border-2 border-gray-300 bg-white">
            <div className="border-b-2 border-blue-900 px-6 py-4 bg-gray-50">
              <h3 className="text-lg font-bold text-blue-900">{t('activityLog')}</h3>
            </div>
            <div className="divide-y-2 divide-gray-300">
              {t('activityLogList').map((item, idx) => (
                <div key={idx} className={`p-4 flex items-start gap-3 ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                  <Clock size={20} className="text-blue-900 flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <p className="font-semibold text-gray-800">{item.activity}</p>
                    <p className="text-sm text-gray-600">{item.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <button className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-4 px-6 transition-colors border-2 border-blue-900">
            {t('editDetails')}
          </button>
          <button className="bg-white hover:bg-blue-50 text-blue-900 font-bold py-4 px-6 transition-colors border-2 border-blue-900">
            {t('downloadReport')}
          </button>
          <button onClick={handleBackClick} className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-6 transition-colors border-2 border-orange-500">
            {t('backToList')}
          </button>
        </div>

        {/* Footer */}
        <div className="border-t-4 border-orange-400 bg-gray-50 px-6 py-4 text-center text-xs text-gray-600">
          <p>{t('copyright')}</p>
        </div>
      </div>
    </div>
  );
};

export default WorkerDetails;