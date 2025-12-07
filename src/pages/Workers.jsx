import React, { useState } from 'react';
import { Search, ChevronRight, MapPin, Phone, Globe, User } from 'lucide-react';

const mockWorkers = [
  { id: 1, name: 'प्रिया शर्मा', email: 'priya@example.com', phone: '9876543210', village: 'नांदपूर', tasksCompleted: 24, tasksRemaining: 3, status: 'active', performance: 92, avatar: 'प्र', photo: null },
  { id: 2, name: 'अंजली वर्मा', email: 'anjali@example.com', phone: '9876543211', village: 'मेहदपूर', tasksCompleted: 21, tasksRemaining: 5, status: 'active', performance: 88, avatar: 'अं', photo: null },
  { id: 3, name: 'रोशनी पटेल', email: 'roshni@example.com', phone: '9876543212', village: 'सोलनपूर', tasksCompleted: 18, tasksRemaining: 8, status: 'inactive', performance: 75, avatar: 'रो', photo: null },
  { id: 4, name: 'दिव्या सिंह', email: 'divya@example.com', phone: '9876543213', village: 'हीरापूर', tasksCompleted: 28, tasksRemaining: 1, status: 'active', performance: 96, avatar: 'दि', photo: null },
  { id: 5, name: 'कव्या देसाई', email: 'kavya@example.com', phone: '9876543214', village: 'भीमपुरा', tasksCompleted: 19, tasksRemaining: 6, status: 'active', performance: 85, avatar: 'क', photo: null },
];

const Workers = ({ setSelectedWorker, setCurrentPage }) => {
  const [lang, setLang] = useState('en');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [workers, setWorkers] = useState(mockWorkers);
  const [showPhotoModal, setShowPhotoModal] = useState(false);
  const [selectedWorkerForPhoto, setSelectedWorkerForPhoto] = useState(null);
  const [photoPreview, setPhotoPreview] = useState(null);

  const translations = {
    en: {
      pageTitle: 'ASHA Workers Management',
      pageSubtitle: 'Ministry of Health and Family Welfare, Government of India',
      manageWorkers: 'Manage ASHA Workers',
      manageDescription: 'View, search, and manage all registered ASHA workers in your region',
      searchFilter: 'Search & Filter Workers',
      searchPlaceholder: 'Enter worker name or village...',
      searchLabel: 'Search by Name or Village',
      filterLabel: 'Filter by Status',
      allStatus: 'All Status',
      activeWorkers: 'Active Workers',
      inactiveWorkers: 'Inactive Workers',
      showing: 'Showing',
      workers: 'worker(s)',
      currentStatus: 'Current Status',
      performanceScore: 'Performance Score',
      overallRating: 'Overall Rating',
      active: 'Active',
      inactive: 'Inactive',
      tasksCompleted: 'Tasks Completed',
      pendingTasks: 'Pending Tasks',
      totalTasks: 'Total Tasks',
      viewDetails: 'View Full Details',
      village: 'Village:',
      contact: 'Contact:',
      email: 'Email:',
      noWorkers: 'No workers found matching your search criteria',
      tryAdjusting: 'Try adjusting your search filters',
      copyright: '© 2025 Ministry of Health and Family Welfare, Government of India | Total Workers:',
      addPhoto: 'Add Photo',
      uploadPhoto: 'Upload Worker Photo',
      selectFile: 'Select a file',
      cancel: 'Cancel',
      save: 'Save',
      photoUploadedSuccessfully: 'Photo uploaded successfully!',
      uploadInstructions: 'Upload a JPG, PNG image (Max 5MB)',
    },
    mr: {
      pageTitle: 'आशा कार्यकर्ता व्यवस्थापन',
      pageSubtitle: 'आरोग्य आणि कुटुंब कल्याण मंत्रालय, भारत सरकार',
      manageWorkers: 'आशा कार्यकर्ता व्यवस्थापन करा',
      manageDescription: 'आपल्या क्षेत्रातील सर्व नोंदणीकृत आशा कार्यकर्त्यांचा दृश्य, शोध आणि व्यवस्थापन करा',
      searchFilter: 'कार्यकर्ते शोधा आणि फिल्टर करा',
      searchPlaceholder: 'कार्यकर्ता नाव किंवा गाव दर्ज करा...',
      searchLabel: 'नाव किंवा गावानुसार शोधा',
      filterLabel: 'स्थितीनुसार फिल्टर करा',
      allStatus: 'सर्व स्थिती',
      activeWorkers: 'सक्रिय कार्यकर्ते',
      inactiveWorkers: 'निष्क्रिय कार्यकर्ते',
      showing: 'दाखवत आहे',
      workers: 'कार्यकर्ता',
      currentStatus: 'वर्तमान स्थिती',
      performanceScore: 'कार्यक्षमता स्कोर',
      overallRating: 'संपूर्ण रेटिंग',
      active: 'सक्रिय',
      inactive: 'निष्क्रिय',
      tasksCompleted: 'पूर्ण झालेली कार्य',
      pendingTasks: 'प्रलंबित कार्य',
      totalTasks: 'एकूण कार्य',
      viewDetails: 'संपूर्ण तपशील पहा',
      village: 'गाव:',
      contact: 'संपर्क:',
      email: 'ईमेल:',
      noWorkers: 'आपल्या शोध मापदंडांशी जुळणारे कोणतेही कार्यकर्ते सापडले नाही',
      tryAdjusting: 'आपल्या शोध फिल्टर समायोजित करण्याचा प्रयत्न करा',
      copyright: '© 2025 आरोग्य आणि कुटुंब कल्याण मंत्रालय, भारत सरकार | एकूण कार्यकर्ते:',
      addPhoto: 'फोटो जोडा',
      uploadPhoto: 'कार्यकर्ता फोटो अपलोड करा',
      selectFile: 'फाइल निवडा',
      cancel: 'रद्द करा',
      save: 'जतन करा',
      photoUploadedSuccessfully: 'फोटो यशस्वीरित्या अपलोड झाला!',
      uploadInstructions: 'JPG, PNG चित्र अपलोड करा (कमाल 5MB)',
    }
  };

  const t = (key) => translations[lang][key] || key;

  const filteredWorkers = workers.filter(w => {
    const matchesSearch = w.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         w.village.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' || w.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const handleWorkerClick = (worker) => {
    setSelectedWorker(worker);
    setCurrentPage('worker-details');
  };

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
    if (photoPreview && selectedWorkerForPhoto) {
      setWorkers(workers.map(w => 
        w.id === selectedWorkerForPhoto.id ? { ...w, photo: photoPreview } : w
      ));
      setShowPhotoModal(false);
      setPhotoPreview(null);
      setSelectedWorkerForPhoto(null);
      alert(t('photoUploadedSuccessfully'));
    }
  };

  const handleAddPhoto = (e, worker) => {
    e.stopPropagation();
    setSelectedWorkerForPhoto(worker);
    setPhotoPreview(worker.photo);
    setShowPhotoModal(true);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="border-b-4 border-orange-400 bg-gradient-to-r from-blue-900 to-blue-800 px-6 py-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-orange-400 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">👥</span>
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
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Page Title */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-blue-900 mb-2">{t('manageWorkers')}</h2>
          <p className="text-gray-700 mb-4">{t('manageDescription')}</p>
          <div className="h-1 w-24 bg-orange-400"></div>
        </div>

        {/* Search and Filter Section */}
        <div className="border-2 border-gray-300 bg-white mb-8 p-6">
          <h3 className="text-lg font-bold text-blue-900 mb-4">{t('searchFilter')}</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-gray-700 mb-2">{t('searchLabel')}</label>
              <div className="relative">
                <Search className="absolute left-3 top-3 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder={t('searchPlaceholder')}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 focus:border-blue-900 focus:outline-none text-gray-700"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">{t('filterLabel')}</label>
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-300 focus:border-blue-900 focus:outline-none text-gray-700 bg-white"
              >
                <option value="all">{t('allStatus')}</option>
                <option value="active">{t('activeWorkers')}</option>
                <option value="inactive">{t('inactiveWorkers')}</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="bg-blue-50 border-l-4 border-blue-900 px-6 py-3 mb-6">
          <p className="text-gray-700 font-semibold">{t('showing')} {filteredWorkers.length} {t('workers')}</p>
        </div>

        {/* Workers List */}
        {filteredWorkers.length > 0 ? (
          <div className="space-y-6">
            {filteredWorkers.map(worker => (
              <div key={worker.id} className="border-2 border-gray-300 bg-white hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-4">
                    {/* Worker Photo */}
                    <div className="flex flex-col items-center justify-center">
                      <div className="relative">
                        {worker.photo ? (
                          <img 
                            src={worker.photo} 
                            alt={worker.name}
                            className="w-24 h-24 rounded-full object-cover border-4 border-blue-900"
                          />
                        ) : (
                          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center border-4 border-blue-900">
                            <User size={48} className="text-white" />
                          </div>
                        )}
                        <button
                          onClick={(e) => handleAddPhoto(e, worker)}
                          className="absolute bottom-0 right-0 bg-orange-400 hover:bg-orange-500 text-white p-2 rounded-full transition-colors shadow-lg text-xs"
                          title={lang === 'en' ? 'Add photo' : 'फोटो जोडा'}
                        >
                          +
                        </button>
                      </div>
                      <p className="text-xs text-gray-600 mt-2 text-center font-semibold">{t('addPhoto')}</p>
                    </div>

                    {/* Worker Info */}
                    <div className="md:col-span-2">
                      <h4 className="text-xl font-bold text-blue-900 mb-3">{worker.name}</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2 text-gray-700">
                          <MapPin size={16} className="text-orange-500" />
                          <span>{t('village')} <span className="font-semibold">{worker.village}</span></span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-700">
                          <Phone size={16} className="text-blue-900" />
                          <span>{t('contact')} <span className="font-semibold">{worker.phone}</span></span>
                        </div>
                        <div className="text-gray-700">
                          {t('email')} <span className="font-semibold">{worker.email}</span>
                        </div>
                      </div>
                    </div>

                    {/* Status */}
                    <div>
                      <p className="text-sm text-gray-600 mb-2 font-semibold">{t('currentStatus')}</p>
                      <div className={`px-4 py-3 text-center font-bold rounded-none border-2 ${
                        worker.status === 'active' 
                          ? 'bg-green-100 border-green-600 text-green-800' 
                          : 'bg-gray-100 border-gray-600 text-gray-800'
                      }`}>
                        {worker.status === 'active' ? t('active') : t('inactive')}
                      </div>
                    </div>

                    {/* Performance */}
                    <div>
                      <p className="text-sm text-gray-600 mb-2 font-semibold">{t('performanceScore')}</p>
                      <div className="bg-blue-50 border-2 border-blue-900 px-4 py-3 text-center">
                        <p className="text-3xl font-bold text-blue-900">{worker.performance}%</p>
                        <p className="text-xs text-gray-600 mt-1">{t('overallRating')}</p>
                      </div>
                    </div>
                  </div>

                  {/* Task Info */}
                  <div className="border-t-2 border-gray-300 pt-4 mt-4">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
                      <div className="bg-green-50 border-l-4 border-green-600 px-4 py-3">
                        <p className="text-xs text-gray-600 font-semibold">{t('tasksCompleted')}</p>
                        <p className="text-2xl font-bold text-green-700 mt-1">{worker.tasksCompleted}</p>
                      </div>
                      <div className="bg-orange-50 border-l-4 border-orange-500 px-4 py-3">
                        <p className="text-xs text-gray-600 font-semibold">{t('pendingTasks')}</p>
                        <p className="text-2xl font-bold text-orange-700 mt-1">{worker.tasksRemaining}</p>
                      </div>
                      <div className="bg-blue-50 border-l-4 border-blue-900 px-4 py-3">
                        <p className="text-xs text-gray-600 font-semibold">{t('totalTasks')}</p>
                        <p className="text-2xl font-bold text-blue-900 mt-1">{worker.tasksCompleted + worker.tasksRemaining}</p>
                      </div>
                    </div>

                    {/* Action Button */}
                    <button
                      onClick={() => handleWorkerClick(worker)}
                      className="w-full md:w-auto bg-blue-900 hover:bg-blue-800 text-white font-bold py-3 px-6 transition-colors flex items-center justify-center gap-2"
                    >
                      {t('viewDetails')} <ChevronRight size={20} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="border-2 border-gray-300 bg-white p-12 text-center">
            <p className="text-gray-600 text-lg font-semibold">{t('noWorkers')}</p>
            <p className="text-gray-500 mt-2">{t('tryAdjusting')}</p>
          </div>
        )}

        {/* Footer */}
        <div className="border-t-4 border-orange-400 bg-gray-50 px-6 py-4 text-center text-xs text-gray-600 mt-12">
          <p>{t('copyright')} {workers.length}</p>
        </div>
      </div>

      {/* Photo Upload Modal */}
      {showPhotoModal && selectedWorkerForPhoto && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg border-4 border-blue-900 max-w-md w-full p-6">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">{selectedWorkerForPhoto.name}</h2>
            <p className="text-sm text-gray-600 mb-4 font-semibold">{t('uploadPhoto')}</p>
            
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
                    <User size={32} className="text-blue-900 mx-auto mb-2" />
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
              <button
                onClick={() => {
                  setShowPhotoModal(false);
                  setPhotoPreview(null);
                  setSelectedWorkerForPhoto(null);
                }}
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
    </div>
  );
};

export default Workers;