import React, { useState } from 'react';
import { CheckCircle, Clock, AlertCircle, Plus, Edit2, Trash2, Calendar, User, Globe } from 'lucide-react';

const mockTasks = [
  { id: 1, title: 'Vaccination Drive - Village A', assignedTo: 'Priya Sharma', dueDate: '2024-01-15', status: 'completed', priority: 'high', description: 'Complete immunization drive for children aged 0-5 years' },
  { id: 2, title: 'Health Awareness Camp', assignedTo: 'Anjali Verma', dueDate: '2024-01-18', status: 'pending', priority: 'high', description: 'Conduct awareness session on maternal health' },
  { id: 3, title: 'Community Survey', assignedTo: 'Roshni Patel', dueDate: '2024-01-20', status: 'in-progress', priority: 'medium', description: 'Health survey of 50 households' },
  { id: 4, title: 'Training Program', assignedTo: 'Divya Singh', dueDate: '2024-01-22', status: 'pending', priority: 'high', description: 'Conduct training on new health protocols' },
  { id: 5, title: 'Health Records Update', assignedTo: 'Kavya Desai', dueDate: '2024-01-25', status: 'in-progress', priority: 'medium', description: 'Update health records in digital system' },
];

const Tasks = () => {
  const [lang, setLang] = useState('en');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterPriority, setFilterPriority] = useState('all');
  const [showModal, setShowModal] = useState(false);

  const translations = {
    en: {
      pageTitle: 'Task Management System',
      pageSubtitle: 'Ministry of Health and Family Welfare, Government of India',
      createNewTask: 'Create New Task',
      taskManagement: 'Task Management & Tracking',
      monitorTasks: 'Monitor, assign, and track all ASHA worker tasks',
      totalTasks: 'Total Tasks',
      allTasks: 'All assigned tasks',
      completed: 'Completed',
      completedDesc: 'Successfully completed',
      inProgress: 'In Progress',
      inProgressDesc: 'Currently being worked on',
      pending: 'Pending',
      pendingDesc: 'Awaiting assignment',
      searchFilter: 'Search & Filter Tasks',
      searchPlaceholder: 'Enter task title or worker name...',
      filterStatus: 'Filter by Status',
      allStatus: 'All Status',
      filterPriority: 'Filter by Priority',
      allPriority: 'All Priority',
      highPriority: 'High Priority',
      mediumPriority: 'Medium Priority',
      lowPriority: 'Low Priority',
      showing: 'Showing',
      tasks: 'task(s)',
      noTasks: 'No tasks found matching your criteria',
      tryAdjusting: 'Try adjusting your search filters or create a new task',
      assignedTo: 'Assigned To',
      dueDate: 'Due Date',
      edit: 'Edit',
      delete: 'Delete',
      taskTitle: 'Task Title',
      enterTitle: 'Enter task title...',
      description: 'Description',
      enterDescription: 'Enter task description...',
      assignWorker: 'Assign To',
      selectWorker: 'Select Worker',
      dueDateLabel: 'Due Date',
      priority: 'Priority',
      selectPriority: 'Select Priority',
      status: 'Status',
      high: 'High',
      medium: 'Medium',
      low: 'Low',
      cancel: 'Cancel',
      createTask: 'Create Task',
      copyright: '© 2024 Ministry of Health and Family Welfare, Government of India | Total Tasks:',
      searchByTitle: 'Search by Task Title or Worker'
    },
    mr: {
      pageTitle: 'कार्य व्यवस्थापन प्रणाली',
      pageSubtitle: 'आरोग्य आणि कुटुंब कल्याण मंत्रालय, भारत सरकार',
      createNewTask: 'नवीन कार्य तयार करा',
      taskManagement: 'कार्य व्यवस्थापन आणि ट्रॅकिंग',
      monitorTasks: 'सर्व आशा कार्यकर्ता कार्यांचे निरीक्षण, नियोजन आणि ट्रॅकिंग करा',
      totalTasks: 'एकूण कार्य',
      allTasks: 'सर्व नियुक्त कार्य',
      completed: 'पूर्ण झाले',
      completedDesc: 'यशस्वीरित्या पूर्ण झाले',
      inProgress: 'चालू आहे',
      inProgressDesc: 'सध्या काम सुरू आहे',
      pending: 'प्रलंबित',
      pendingDesc: 'नियोजनाची प्रतीक्षा',
      searchFilter: 'कार्य शोधा आणि फिल्टर करा',
      searchPlaceholder: 'कार्य शीर्षक किंवा कार्यकर्ता नाव दर्ज करा...',
      filterStatus: 'स्थितीनुसार फिल्टर करा',
      allStatus: 'सर्व स्थिती',
      filterPriority: 'प्राधान्यनुसार फिल्टर करा',
      allPriority: 'सर्व प्राधान्य',
      highPriority: 'उच्च प्राधान्य',
      mediumPriority: 'मध्यम प्राधान्य',
      lowPriority: 'कमी प्राधान्य',
      showing: 'दाखवत आहे',
      tasks: 'कार्य(ं)',
      noTasks: 'आपल्या मापदंडांशी जुळणारे कोणतेही कार्य सापडले नाही',
      tryAdjusting: 'आपल्या शोध फिल्टर समायोजित करण्याचा प्रयत्न करा किंवा नवीन कार्य तयार करा',
      assignedTo: 'नियुक्त केले',
      dueDate: 'नियत तारीख',
      edit: 'संपादित करा',
      delete: 'हटवा',
      taskTitle: 'कार्य शीर्षक',
      enterTitle: 'कार्य शीर्षक दर्ज करा...',
      description: 'वर्णन',
      enterDescription: 'कार्य वर्णन दर्ज करा...',
      assignWorker: 'नियुक्त करा',
      selectWorker: 'कार्यकर्ता निवडा',
      dueDateLabel: 'नियत तारीख',
      priority: 'प्राधान्य',
      selectPriority: 'प्राधान्य निवडा',
      status: 'स्थिती',
      high: 'उच्च',
      medium: 'मध्यम',
      low: 'कमी',
      cancel: 'रद्द करा',
      createTask: 'कार्य तयार करा',
      copyright: '© 2024 आरोग्य आणि कुटुंब कल्याण मंत्रालय, भारत सरकार | एकूण कार्य:',
      searchByTitle: 'कार्य शीर्षक किंवा कार्यकर्ता द्वारे शोधा'
    }
  };

  const t = (key) => translations[lang][key] || key;

  const filteredTasks = mockTasks.filter(task => {
    const matchesSearch = task.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         task.assignedTo.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || task.status === filterStatus;
    const matchesPriority = filterPriority === 'all' || task.priority === filterPriority;
    return matchesSearch && matchesStatus && matchesPriority;
  });

  const getStatusColor = (status) => {
    switch(status) {
      case 'completed': return 'bg-green-100 border-green-600 text-green-800';
      case 'in-progress': return 'bg-blue-100 border-blue-600 text-blue-800';
      case 'pending': return 'bg-orange-100 border-orange-600 text-orange-800';
      default: return 'bg-gray-100 border-gray-600 text-gray-800';
    }
  };

  const getStatusIcon = (status) => {
    switch(status) {
      case 'completed': return <CheckCircle size={20} />;
      case 'in-progress': return <Clock size={20} />;
      case 'pending': return <AlertCircle size={20} />;
      default: return null;
    }
  };

  const getPriorityColor = (priority) => {
    switch(priority) {
      case 'high': return 'bg-red-100 text-red-800 border-red-300';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-300';
      case 'low': return 'bg-green-100 text-green-800 border-green-300';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusLabel = (status) => {
    const labels = {
      'completed': lang === 'en' ? 'Completed' : 'पूर्ण झाले',
      'in-progress': lang === 'en' ? 'In Progress' : 'चालू आहे',
      'pending': lang === 'en' ? 'Pending' : 'प्रलंबित'
    };
    return labels[status] || status;
  };

  const getPriorityLabel = (priority) => {
    const labels = {
      'high': lang === 'en' ? 'High' : 'उच्च',
      'medium': lang === 'en' ? 'Medium' : 'मध्यम',
      'low': lang === 'en' ? 'Low' : 'कमी'
    };
    return labels[priority] || priority;
  };

  const completedCount = mockTasks.filter(t => t.status === 'completed').length;
  const pendingCount = mockTasks.filter(t => t.status === 'pending').length;
  const inProgressCount = mockTasks.filter(t => t.status === 'in-progress').length;

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="border-b-4 border-orange-400 bg-gradient-to-r from-blue-900 to-blue-800 px-6 py-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-orange-400 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">✅</span>
              </div>
              <div>
                <h1 className="text-3xl font-bold text-white">{t('pageTitle')}</h1>
                <p className="text-blue-100 text-sm mt-1">{t('pageSubtitle')}</p>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <div className="flex gap-2 items-center bg-blue-800 rounded-lg p-2">
                <Globe size={20} className="text-white" />
                <button onClick={() => setLang('en')} className={`px-3 py-1 rounded font-bold transition-all ${lang === 'en' ? 'bg-white text-blue-900' : 'bg-transparent text-white hover:bg-blue-700'}`}>
                  English
                </button>
                <button onClick={() => setLang('mr')} className={`px-3 py-1 rounded font-bold transition-all ${lang === 'mr' ? 'bg-white text-blue-900' : 'bg-transparent text-white hover:bg-blue-700'}`}>
                  मराठी
                </button>
              </div>
              <button onClick={() => setShowModal(true)} className="bg-orange-400 hover:bg-orange-500 text-white font-bold py-3 px-6 flex items-center gap-2 transition-colors">
                <Plus size={20} /> {t('createNewTask')}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Page Title */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-blue-900 mb-2">{t('taskManagement')}</h2>
          <p className="text-gray-700 mb-4">{t('monitorTasks')}</p>
          <div className="h-1 w-24 bg-orange-400"></div>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="border-2 border-gray-300 bg-white">
            <div className="border-b-4 border-blue-900 p-6">
              <p className="text-gray-600 font-semibold text-sm mb-3">{t('totalTasks')}</p>
              <p className="text-5xl font-bold text-blue-900">{mockTasks.length}</p>
              <p className="text-gray-600 text-xs mt-3">{t('allTasks')}</p>
            </div>
          </div>

          <div className="border-2 border-gray-300 bg-white">
            <div className="border-b-4 border-green-700 p-6">
              <p className="text-gray-600 font-semibold text-sm mb-3">{t('completed')}</p>
              <p className="text-5xl font-bold text-green-700">{completedCount}</p>
              <p className="text-gray-600 text-xs mt-3">{t('completedDesc')}</p>
            </div>
          </div>

          <div className="border-2 border-gray-300 bg-white">
            <div className="border-b-4 border-blue-600 p-6">
              <p className="text-gray-600 font-semibold text-sm mb-3">{t('inProgress')}</p>
              <p className="text-5xl font-bold text-blue-600">{inProgressCount}</p>
              <p className="text-gray-600 text-xs mt-3">{t('inProgressDesc')}</p>
            </div>
          </div>

          <div className="border-2 border-gray-300 bg-white">
            <div className="border-b-4 border-orange-500 p-6">
              <p className="text-gray-600 font-semibold text-sm mb-3">{t('pending')}</p>
              <p className="text-5xl font-bold text-orange-700">{pendingCount}</p>
              <p className="text-gray-600 text-xs mt-3">{t('pendingDesc')}</p>
            </div>
          </div>
        </div>

        {/* Search and Filter Section */}
        <div className="border-2 border-gray-300 bg-white mb-8 p-6">
          <h3 className="text-lg font-bold text-blue-900 mb-4">{t('searchFilter')}</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">{t('searchByTitle')}</label>
              <input
                type="text"
                placeholder={t('searchPlaceholder')}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-300 focus:border-blue-900 focus:outline-none text-gray-700"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">{t('filterStatus')}</label>
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-300 focus:border-blue-900 focus:outline-none text-gray-700 bg-white"
              >
                <option value="all">{t('allStatus')}</option>
                <option value="completed">{t('completed')}</option>
                <option value="in-progress">{t('inProgress')}</option>
                <option value="pending">{t('pending')}</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">{t('filterPriority')}</label>
              <select
                value={filterPriority}
                onChange={(e) => setFilterPriority(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-300 focus:border-blue-900 focus:outline-none text-gray-700 bg-white"
              >
                <option value="all">{t('allPriority')}</option>
                <option value="high">{t('highPriority')}</option>
                <option value="medium">{t('mediumPriority')}</option>
                <option value="low">{t('lowPriority')}</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="bg-blue-50 border-l-4 border-blue-900 px-6 py-3 mb-6">
          <p className="text-gray-700 font-semibold">{t('showing')} {filteredTasks.length} {t('tasks')}</p>
        </div>

        {/* Tasks List */}
        {filteredTasks.length > 0 ? (
          <div className="space-y-6">
            {filteredTasks.map(task => (
              <div key={task.id} className="border-2 border-gray-300 bg-white hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        {getStatusIcon(task.status)}
                        <h4 className="text-xl font-bold text-blue-900">{task.title}</h4>
                      </div>
                      <p className="text-gray-700 mt-2">{task.description}</p>
                    </div>
                    <div className="flex gap-2 ml-4">
                      <span className={`px-3 py-1 font-bold text-xs border-2 ${getStatusColor(task.status)}`}>
                        {getStatusLabel(task.status)}
                      </span>
                      <span className={`px-3 py-1 font-bold text-xs border ${getPriorityColor(task.priority)}`}>
                        {getPriorityLabel(task.priority)}
                      </span>
                    </div>
                  </div>

                  <div className="border-t-2 border-gray-300 pt-4 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="flex items-center gap-3">
                      <User size={20} className="text-blue-900" />
                      <div>
                        <p className="text-xs text-gray-600 font-semibold">{t('assignedTo')}</p>
                        <p className="text-gray-800 font-semibold">{task.assignedTo}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Calendar size={20} className="text-orange-500" />
                      <div>
                        <p className="text-xs text-gray-600 font-semibold">{t('dueDate')}</p>
                        <p className="text-gray-800 font-semibold">{new Date(task.dueDate).toLocaleDateString('en-IN')}</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-end gap-2">
                      <button className="bg-blue-900 hover:bg-blue-800 text-white px-3 py-2 flex items-center gap-2 transition-colors">
                        <Edit2 size={16} /> {t('edit')}
                      </button>
                      <button className="bg-red-600 hover:bg-red-700 text-white px-3 py-2 flex items-center gap-2 transition-colors">
                        <Trash2 size={16} /> {t('delete')}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="border-2 border-gray-300 bg-white p-12 text-center">
            <p className="text-gray-600 text-lg font-semibold">{t('noTasks')}</p>
            <p className="text-gray-500 mt-2">{t('tryAdjusting')}</p>
          </div>
        )}

        {/* Footer */}
        <div className="border-t-4 border-orange-400 bg-gray-50 px-6 py-4 text-center text-xs text-gray-600 mt-12">
          <p>{t('copyright')} {mockTasks.length}</p>
        </div>
      </div>

      {/* New Task Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white max-w-2xl w-full border-4 border-blue-900">
            <div className="border-b-4 border-orange-400 px-6 py-4 bg-blue-50">
              <h3 className="text-2xl font-bold text-blue-900">{t('createNewTask')}</h3>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">{t('taskTitle')}</label>
                <input type="text" placeholder={t('enterTitle')} className="w-full px-4 py-2 border-2 border-gray-300 focus:border-blue-900 focus:outline-none" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">{t('description')}</label>
                <textarea placeholder={t('enterDescription')} rows="4" className="w-full px-4 py-2 border-2 border-gray-300 focus:border-blue-900 focus:outline-none"></textarea>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">{t('assignWorker')}</label>
                  <select className="w-full px-4 py-2 border-2 border-gray-300 focus:border-blue-900 focus:outline-none bg-white">
                    <option>{t('selectWorker')}</option>
                    <option>Priya Sharma</option>
                    <option>Anjali Verma</option>
                    <option>Divya Singh</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">{t('dueDateLabel')}</label>
                  <input type="date" className="w-full px-4 py-2 border-2 border-gray-300 focus:border-blue-900 focus:outline-none" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">{t('priority')}</label>
                  <select className="w-full px-4 py-2 border-2 border-gray-300 focus:border-blue-900 focus:outline-none bg-white">
                    <option>{t('selectPriority')}</option>
                    <option>{t('high')}</option>
                    <option>{t('medium')}</option>
                    <option>{t('low')}</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">{t('status')}</label>
                  <select className="w-full px-4 py-2 border-2 border-gray-300 focus:border-blue-900 focus:outline-none bg-white">
                    <option>{t('pending')}</option>
                    <option>{t('inProgress')}</option>
                    <option>{t('completed')}</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="border-t-2 border-gray-300 px-6 py-4 bg-gray-50 flex justify-end gap-4">
              <button onClick={() => setShowModal(false)} className="bg-white hover:bg-gray-100 text-blue-900 font-bold py-2 px-6 border-2 border-blue-900 transition-colors">
                {t('cancel')}
              </button>
              <button onClick={() => setShowModal(false)} className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-2 px-6 transition-colors">
                {t('createTask')}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Tasks;