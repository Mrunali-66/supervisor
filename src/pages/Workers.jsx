import React, { useState } from 'react';
import { Search, ChevronRight, MapPin, Phone, Globe, User } from 'lucide-react';
import { useAppContext } from '../App';

// Mock Data
const mockWorkers = [
  { id: 1, nameEn: 'Priya Sharma', nameMr: 'प्रिया शर्मा', email: 'priya@example.com', phone: '9876543210', villageEn: 'Nandpur', villageMr: 'नांदपूर', tasksCompleted: 24, tasksRemaining: 3, status: 'active', performance: 92, photo: null },
  { id: 2, nameEn: 'Anjali Verma', nameMr: 'अंजली वर्मा', email: 'anjali@example.com', phone: '9876543211', villageEn: 'Mehdpur', villageMr: 'मेहदपूर', tasksCompleted: 21, tasksRemaining: 5, status: 'active', performance: 88, photo: null },
  { id: 3, nameEn: 'Roshni Patel', nameMr: 'रोशनी पटेल', email: 'roshni@example.com', phone: '9876543212', villageEn: 'Solnpur', villageMr: 'सोलनपूर', tasksCompleted: 18, tasksRemaining: 8, status: 'inactive', performance: 75, photo: null },
  { id: 4, nameEn: 'Divya Singh', nameMr: 'दिव्या सिंह', email: 'divya@example.com', phone: '9876543213', villageEn: 'Hirapur', villageMr: 'हीरापूर', tasksCompleted: 28, tasksRemaining: 1, status: 'active', performance: 96, photo: null },
  { id: 5, nameEn: 'Kavya Desai', nameMr: 'कव्या देसाई', email: 'kavya@example.com', phone: '9876543214', villageEn: 'Bhimpur', villageMr: 'भीमपुरा', tasksCompleted: 19, tasksRemaining: 6, status: 'active', performance: 85, photo: null },
];

// Translations
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

const Workers = ({ setSelectedWorker, setCurrentPage }) => {
  const { lang, setLang, isDark } = useAppContext();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [workers, setWorkers] = useState(mockWorkers);
  const [showPhotoModal, setShowPhotoModal] = useState(false);
  const [selectedWorkerForPhoto, setSelectedWorkerForPhoto] = useState(null);
  const [photoPreview, setPhotoPreview] = useState(null);

  const t = (key) => translations[lang][key] || key;

  const getWorkerName = (worker) => lang === 'mr' ? worker.nameMr : worker.nameEn;
  const getVillageName = (worker) => lang === 'mr' ? worker.villageMr : worker.villageEn;

  const filteredWorkers = workers.filter(w => {
    const name = getWorkerName(w);
    const village = getVillageName(w);
    const matchesSearch = name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         village.toLowerCase().includes(searchTerm.toLowerCase());
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
    <div className={`min-h-screen ${isDark ? 'bg-gray-900 text-gray-100' : 'bg-white text-gray-900'}`}>
      {/* Header */}
      <div className={`border-b-4 border-orange-400 ${isDark ? 'bg-gradient-to-r from-gray-800 to-gray-700' : 'bg-gradient-to-r from-blue-900 to-blue-800'} px-6 py-6`}>
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-orange-400 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">👥</span>
              </div>
              <div>
                <h1 className="text-3xl font-bold text-white">{t('pageTitle')}</h1>
                <p className={`text-sm mt-1 ${isDark ? 'text-gray-400' : 'text-blue-100'}`}>{t('pageSubtitle')}</p>
              </div>
            </div>
            <div className={`flex gap-2 items-center rounded-lg p-2 ${isDark ? 'bg-gray-700' : 'bg-blue-800'}`}>
              <Globe size={20} className="text-white" />
              <button onClick={() => setLang('en')} className={`px-3 py-1 rounded font-bold transition-all ${lang === 'en' ? `${isDark ? 'bg-gray-600' : 'bg-white'} ${isDark ? 'text-white' : 'text-blue-900'}` : `bg-transparent text-white ${isDark ? 'hover:bg-gray-600' : 'hover:bg-blue-700'}`}`}>
                English
              </button>
              <button onClick={() => setLang('mr')} className={`px-3 py-1 rounded font-bold transition-all ${lang === 'mr' ? `${isDark ? 'bg-gray-600' : 'bg-white'} ${isDark ? 'text-white' : 'text-blue-900'}` : `bg-transparent text-white ${isDark ? 'hover:bg-gray-600' : 'hover:bg-blue-700'}`}`}>
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
          <h2 className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-blue-900'}`}>{t('manageWorkers')}</h2>
          <p className={`mb-4 ${isDark ? 'text-gray-400' : 'text-gray-700'}`}>{t('manageDescription')}</p>
          <div className="h-1 w-24 bg-orange-400"></div>
        </div>

        {/* Search and Filter Section */}
        <div className={`border-2 mb-8 p-6 ${isDark ? 'border-gray-700 bg-gray-800' : 'border-gray-300 bg-white'}`}>
          <h3 className={`text-lg font-bold mb-4 ${isDark ? 'text-white' : 'text-blue-900'}`}>{t('searchFilter')}</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-2">
              <label className={`block text-sm font-semibold mb-2 ${isDark ? 'text-gray-400' : 'text-gray-700'}`}>{t('searchLabel')}</label>
              <div className="relative">
                <Search className="absolute left-3 top-3 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder={t('searchPlaceholder')}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className={`w-full pl-10 pr-4 py-3 border-2 focus:outline-none ${isDark ? 'bg-gray-700 border-gray-600 text-white focus:border-blue-500' : 'bg-white border-gray-300 text-gray-700 focus:border-blue-900'}`}
                />
              </div>
            </div>
            <div>
              <label className={`block text-sm font-semibold mb-2 ${isDark ? 'text-gray-400' : 'text-gray-700'}`}>{t('filterLabel')}</label>
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className={`w-full px-4 py-3 border-2 focus:outline-none ${isDark ? 'bg-gray-700 border-gray-600 text-white focus:border-blue-500' : 'bg-white border-gray-300 text-gray-700 focus:border-blue-900'}`}
              >
                <option value="all">{t('allStatus')}</option>
                <option value="active">{t('activeWorkers')}</option>
                <option value="inactive">{t('inactiveWorkers')}</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className={`border-l-4 border-blue-900 px-6 py-3 mb-6 ${isDark ? 'bg-gray-800' : 'bg-blue-50'}`}>
          <p className={`font-semibold ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{t('showing')} {filteredWorkers.length} {t('workers')}</p>
        </div>

        {/* Workers List */}
        {filteredWorkers.length > 0 ? (
          <div className="space-y-6">
            {filteredWorkers.map(worker => (
              <div key={worker.id} className={`border-2 transition-shadow hover:shadow-lg ${isDark ? 'border-gray-700 bg-gray-800' : 'border-gray-300 bg-white'}`}>
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-4">
                    {/* Photo */}
                    <div className="flex flex-col items-center justify-center">
                      <div className="relative">
                        {worker.photo ? (
                          <img src={worker.photo} alt={getWorkerName(worker)} className="w-24 h-24 rounded-full object-cover border-4 border-blue-900" />
                        ) : (
                          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center border-4 border-blue-900">
                            <User size={48} className="text-white" />
                          </div>
                        )}
                        <button
                          onClick={(e) => handleAddPhoto(e, worker)}
                          className="absolute bottom-0 right-0 bg-orange-400 hover:bg-orange-500 text-white p-2 rounded-full transition-colors shadow-lg text-xs"
                        >
                          +
                        </button>
                      </div>
                      <p className={`text-xs mt-2 text-center font-semibold ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{t('addPhoto')}</p>
                    </div>

                    {/* Worker Info */}
                    <div className="md:col-span-2">
                      <h4 className={`text-xl font-bold mb-3 ${isDark ? 'text-white' : 'text-blue-900'}`}>{getWorkerName(worker)}</h4>
                      <div className={`space-y-2 text-sm ${isDark ? 'text-gray-400' : 'text-gray-700'}`}>
                        <div className="flex items-center gap-2">
                          <MapPin size={16} className="text-orange-500" />
                          <span>{t('village')} <span className="font-semibold">{getVillageName(worker)}</span></span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Phone size={16} className="text-blue-900" />
                          <span>{t('contact')} <span className="font-semibold">{worker.phone}</span></span>
                        </div>
                        <div>
                          {t('email')} <span className="font-semibold">{worker.email}</span>
                        </div>
                      </div>
                    </div>

                    {/* Status */}
                    <div>
                      <p className={`text-sm mb-2 font-semibold ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{t('currentStatus')}</p>
                      <div className={`px-4 py-3 text-center font-bold border-2 ${
                        worker.status === 'active' 
                          ? isDark ? 'bg-green-900 border-green-500 text-green-200' : 'bg-green-100 border-green-600 text-green-800'
                          : isDark ? 'bg-gray-700 border-gray-500 text-gray-300' : 'bg-gray-100 border-gray-600 text-gray-800'
                      }`}>
                        {worker.status === 'active' ? t('active') : t('inactive')}
                      </div>
                    </div>

                    {/* Performance */}
                    <div>
                      <p className={`text-sm mb-2 font-semibold ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{t('performanceScore')}</p>
                      <div className={`border-2 border-blue-900 px-4 py-3 text-center ${isDark ? 'bg-gray-700' : 'bg-blue-50'}`}>
                        <p className={`text-3xl font-bold ${isDark ? 'text-blue-300' : 'text-blue-900'}`}>{worker.performance}%</p>
                        <p className={`text-xs mt-1 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{t('overallRating')}</p>
                      </div>
                    </div>
                  </div>

                  {/* Task Info */}
                  <div className={`border-t-2 pt-4 mt-4 ${isDark ? 'border-gray-700' : 'border-gray-300'}`}>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
                      <div className={`border-l-4 border-green-600 px-4 py-3 ${isDark ? 'bg-gray-700' : 'bg-green-50'}`}>
                        <p className={`text-xs font-semibold ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{t('tasksCompleted')}</p>
                        <p className={`text-2xl font-bold mt-1 ${isDark ? 'text-green-400' : 'text-green-700'}`}>{worker.tasksCompleted}</p>
                      </div>
                      <div className={`border-l-4 border-orange-500 px-4 py-3 ${isDark ? 'bg-gray-700' : 'bg-orange-50'}`}>
                        <p className={`text-xs font-semibold ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{t('pendingTasks')}</p>
                        <p className={`text-2xl font-bold mt-1 ${isDark ? 'text-orange-400' : 'text-orange-700'}`}>{worker.tasksRemaining}</p>
                      </div>
                      <div className={`border-l-4 border-blue-900 px-4 py-3 ${isDark ? 'bg-gray-700' : 'bg-blue-50'}`}>
                        <p className={`text-xs font-semibold ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{t('totalTasks')}</p>
                        <p className={`text-2xl font-bold mt-1 ${isDark ? 'text-blue-400' : 'text-blue-900'}`}>{worker.tasksCompleted + worker.tasksRemaining}</p>
                      </div>
                    </div>

                    <button
                      onClick={() => handleWorkerClick(worker)}
                      className={`w-full md:w-auto font-bold py-3 px-6 transition-colors flex items-center justify-center gap-2 ${isDark ? 'bg-blue-900 hover:bg-blue-800 text-white' : 'bg-blue-900 hover:bg-blue-800 text-white'}`}
                    >
                      {t('viewDetails')} <ChevronRight size={20} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className={`border-2 p-12 text-center ${isDark ? 'border-gray-700 bg-gray-800' : 'border-gray-300 bg-white'}`}>
            <p className={`text-lg font-semibold ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{t('noWorkers')}</p>
            <p className={`mt-2 ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>{t('tryAdjusting')}</p>
          </div>
        )}

        {/* Footer */}
        <div className={`border-t-4 border-orange-400 px-6 py-4 text-center text-xs mt-12 ${isDark ? 'bg-gray-800 text-gray-400' : 'bg-gray-50 text-gray-600'}`}>
          <p>{t('copyright')} {workers.length}</p>
        </div>
      </div>

      {/* Photo Upload Modal */}
      {showPhotoModal && selectedWorkerForPhoto && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className={`rounded-lg border-4 border-blue-900 max-w-md w-full p-6 ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
            <h2 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-blue-900'}`}>{getWorkerName(selectedWorkerForPhoto)}</h2>
            <p className={`text-sm mb-4 font-semibold ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{t('uploadPhoto')}</p>
            
            <div className="mb-6">
              <p className={`text-sm mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{t('uploadInstructions')}</p>
              
              {photoPreview ? (
                <div className="mb-4">
                  <img src={photoPreview} alt="Preview" className={`w-full h-40 object-cover rounded border-2 ${isDark ? 'border-gray-600' : 'border-gray-300'}`} />
                  <p className={`text-sm font-semibold mt-2 ${isDark ? 'text-green-400' : 'text-green-600'}`}>✓ {t('photoUploadedSuccessfully')}</p>
                </div>
              ) : (
                <label className="block w-full">
                  <div className={`border-2 border-dashed border-blue-900 rounded-lg p-6 text-center cursor-pointer transition-colors ${isDark ? 'hover:bg-gray-700' : 'hover:bg-blue-50'}`}>
                    <User size={32} className="text-blue-900 mx-auto mb-2" />
                    <p className="text-blue-900 font-semibold">{t('selectFile')}</p>
                    <input type="file" accept="image/jpeg,image/png" onChange={handlePhotoUpload} className="hidden" />
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
                className={`flex-1 font-bold py-2 px-4 transition-colors border-2 ${isDark ? 'bg-gray-700 hover:bg-gray-600 text-white border-gray-600' : 'bg-gray-300 hover:bg-gray-400 text-gray-800 border-gray-300'}`}
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