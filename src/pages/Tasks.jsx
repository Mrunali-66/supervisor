import React, { useState } from 'react';
import { CheckCircle, Clock, AlertCircle, Plus, Edit2, Trash2, Calendar, User } from 'lucide-react';
import { useAppContext } from '../App';

const mockTasks = [
  { id: 1, title: 'Vaccination Drive - Village A', assignedTo: 'Priya Sharma', dueDate: '2024-01-15', status: 'completed', priority: 'high', description: 'Complete immunization drive for children aged 0-5 years' },
  { id: 2, title: 'Health Awareness Camp', assignedTo: 'Anjali Verma', dueDate: '2024-01-18', status: 'pending', priority: 'high', description: 'Conduct awareness session on maternal health' },
  { id: 3, title: 'Community Survey', assignedTo: 'Roshni Patel', dueDate: '2024-01-20', status: 'in-progress', priority: 'medium', description: 'Health survey of 50 households' },
  { id: 4, title: 'Training Program', assignedTo: 'Divya Singh', dueDate: '2024-01-22', status: 'pending', priority: 'high', description: 'Conduct training on new health protocols' },
  { id: 5, title: 'Health Records Update', assignedTo: 'Kavya Desai', dueDate: '2024-01-25', status: 'in-progress', priority: 'medium', description: 'Update health records in digital system' },
];

const Tasks = () => {
  const { lang, isDark } = useAppContext();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterPriority, setFilterPriority] = useState('all');
  const [showModal, setShowModal] = useState(false);

  const translations = {
    en: {
      taskManagement: 'Task Management & Tracking',
      monitorTasks: 'Monitor, assign, and track all ASHA worker tasks',
      createNewTask: 'Create New Task',
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
    },
    mr: {
      taskManagement: 'कार्य व्यवस्थापन आणि ट्रॅकिंग',
      monitorTasks: 'सर्व आशा कार्यकर्ता कार्यांचे निरीक्षण, नियोजन आणि ट्रॅकिंग करा',
      createNewTask: 'नवीन कार्य तयार करा',
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
      tasks: 'कार्य',
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
    }
  };

  const t = (key) => translations[lang]?.[key] || key;

  const filteredTasks = mockTasks.filter(task => {
    const matchesSearch = task.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         task.assignedTo.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || task.status === filterStatus;
    const matchesPriority = filterPriority === 'all' || task.priority === filterPriority;
    return matchesSearch && matchesStatus && matchesPriority;
  });

  const getStatusColor = (status) => {
    const colors = {
      'completed': isDark ? 'bg-green-900 border-green-500 text-green-100' : 'bg-green-100 border-green-600 text-green-800',
      'in-progress': isDark ? 'bg-blue-900 border-blue-500 text-blue-100' : 'bg-blue-100 border-blue-600 text-blue-800',
      'pending': isDark ? 'bg-orange-900 border-orange-500 text-orange-100' : 'bg-orange-100 border-orange-600 text-orange-800',
    };
    return colors[status] || 'bg-gray-100';
  };

  const getStatusIcon = (status) => {
    switch(status) {
      case 'completed': return <CheckCircle size={20} className={isDark ? 'text-green-400' : 'text-green-600'} />;
      case 'in-progress': return <Clock size={20} className={isDark ? 'text-blue-400' : 'text-blue-600'} />;
      case 'pending': return <AlertCircle size={20} className={isDark ? 'text-orange-400' : 'text-orange-600'} />;
      default: return null;
    }
  };

  const getPriorityColor = (priority) => {
    const colors = {
      'high': isDark ? 'bg-red-900 text-red-100 border-red-700' : 'bg-red-100 text-red-800 border-red-300',
      'medium': isDark ? 'bg-yellow-900 text-yellow-100 border-yellow-700' : 'bg-yellow-100 text-yellow-800 border-yellow-300',
      'low': isDark ? 'bg-green-900 text-green-100 border-green-700' : 'bg-green-100 text-green-800 border-green-300',
    };
    return colors[priority] || 'bg-gray-100';
  };

  const getStatusLabel = (status) => {
    const labels = {
      'completed': lang === 'en' ? 'Completed' : 'पूर्ण झाले',
      'in-progress': lang === 'en' ? 'In Progress' : 'चालू आहे',
      'pending': lang === 'en' ? 'Pending' : 'प्रलंबित'
    };
    return labels[status] || status;
  };

  const completedCount = mockTasks.filter(t => t.status === 'completed').length;
  const pendingCount = mockTasks.filter(t => t.status === 'pending').length;
  const inProgressCount = mockTasks.filter(t => t.status === 'in-progress').length;

  return (
    <div className={`min-h-screen ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="p-8">
        {/* Page Title */}
        <div className="mb-8">
          <h2 className={`text-3xl font-bold mb-2 ${isDark ? 'text-orange-400' : 'text-blue-900'}`}>{t('taskManagement')}</h2>
          <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'} mb-4`}>{t('monitorTasks')}</p>
          <div className="h-1 w-32 bg-orange-400"></div>
        </div>

        {/* Action Button */}
        <div className="mb-8 flex justify-end">
          <button onClick={() => setShowModal(true)} className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 flex items-center gap-2 transition-colors shadow-md">
            <Plus size={20} /> {t('createNewTask')}
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className={`border-2 ${isDark ? 'border-gray-700 bg-gray-800' : 'border-gray-300 bg-white'} shadow-md`}>
            <div className={`border-b-4 ${isDark ? 'border-orange-500' : 'border-blue-900'} p-6 ${isDark ? 'bg-gray-700' : 'bg-blue-50'}`}>
              <p className={`text-sm font-semibold mb-3 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{t('totalTasks')}</p>
              <p className={`text-5xl font-bold ${isDark ? 'text-orange-400' : 'text-blue-900'}`}>{mockTasks.length}</p>
              <p className={`text-xs mt-3 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{t('allTasks')}</p>
            </div>
          </div>

          <div className={`border-2 ${isDark ? 'border-gray-700 bg-gray-800' : 'border-gray-300 bg-white'} shadow-md`}>
            <div className={`border-b-4 ${isDark ? 'border-green-500' : 'border-green-700'} p-6 ${isDark ? 'bg-gray-700' : 'bg-green-50'}`}>
              <p className={`text-sm font-semibold mb-3 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{t('completed')}</p>
              <p className={`text-5xl font-bold ${isDark ? 'text-green-400' : 'text-green-700'}`}>{completedCount}</p>
              <p className={`text-xs mt-3 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{t('completedDesc')}</p>
            </div>
          </div>

          <div className={`border-2 ${isDark ? 'border-gray-700 bg-gray-800' : 'border-gray-300 bg-white'} shadow-md`}>
            <div className={`border-b-4 ${isDark ? 'border-blue-500' : 'border-blue-600'} p-6 ${isDark ? 'bg-gray-700' : 'bg-blue-50'}`}>
              <p className={`text-sm font-semibold mb-3 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{t('inProgress')}</p>
              <p className={`text-5xl font-bold ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>{inProgressCount}</p>
              <p className={`text-xs mt-3 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{t('inProgressDesc')}</p>
            </div>
          </div>

          <div className={`border-2 ${isDark ? 'border-gray-700 bg-gray-800' : 'border-gray-300 bg-white'} shadow-md`}>
            <div className={`border-b-4 ${isDark ? 'border-orange-500' : 'border-orange-500'} p-6 ${isDark ? 'bg-gray-700' : 'bg-orange-50'}`}>
              <p className={`text-sm font-semibold mb-3 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{t('pending')}</p>
              <p className={`text-5xl font-bold ${isDark ? 'text-orange-400' : 'text-orange-700'}`}>{pendingCount}</p>
              <p className={`text-xs mt-3 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{t('pendingDesc')}</p>
            </div>
          </div>
        </div>

        {/* Search & Filter */}
        <div className={`border-2 ${isDark ? 'border-gray-700 bg-gray-800' : 'border-gray-300 bg-white'} mb-8 p-6 shadow-md`}>
          <h3 className={`text-lg font-bold mb-4 ${isDark ? 'text-orange-400' : 'text-blue-900'}`}>{t('searchFilter')}</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              type="text"
              placeholder={t('searchPlaceholder')}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={`px-4 py-3 border-2 focus:outline-none ${isDark ? 'bg-gray-700 border-gray-600 focus:border-orange-500 text-white' : 'bg-white border-gray-300 focus:border-blue-900'}`}
            />
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className={`px-4 py-3 border-2 focus:outline-none ${isDark ? 'bg-gray-700 border-gray-600 focus:border-orange-500 text-white' : 'bg-white border-gray-300 focus:border-blue-900'}`}
            >
              <option value="all">{t('allStatus')}</option>
              <option value="completed">{t('completed')}</option>
              <option value="in-progress">{t('inProgress')}</option>
              <option value="pending">{t('pending')}</option>
            </select>
            <select
              value={filterPriority}
              onChange={(e) => setFilterPriority(e.target.value)}
              className={`px-4 py-3 border-2 focus:outline-none ${isDark ? 'bg-gray-700 border-gray-600 focus:border-orange-500 text-white' : 'bg-white border-gray-300 focus:border-blue-900'}`}
            >
              <option value="all">{t('allPriority')}</option>
              <option value="high">{t('highPriority')}</option>
              <option value="medium">{t('mediumPriority')}</option>
              <option value="low">{t('lowPriority')}</option>
            </select>
          </div>
        </div>

        {/* Results */}
        <div className={`border-l-4 px-6 py-3 mb-6 ${isDark ? 'border-orange-500 bg-gray-800' : 'border-blue-900 bg-blue-50'}`}>
          <p className={`font-semibold ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>{t('showing')} {filteredTasks.length} {t('tasks')}</p>
        </div>

        {/* Task List */}
        {filteredTasks.length > 0 ? (
          <div className="space-y-6">
            {filteredTasks.map(task => (
              <div key={task.id} className={`border-2 ${isDark ? 'border-gray-700 bg-gray-800' : 'border-gray-300 bg-white'} shadow-md hover:shadow-lg transition-shadow`}>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        {getStatusIcon(task.status)}
                        <h4 className={`text-xl font-bold ${isDark ? 'text-orange-400' : 'text-blue-900'}`}>{task.title}</h4>
                      </div>
                      <p className={isDark ? 'text-gray-300' : 'text-gray-700'}>{task.description}</p>
                    </div>
                    <div className="flex gap-2 ml-4">
                      <span className={`px-3 py-1 font-bold text-xs border-2 ${getStatusColor(task.status)}`}>
                        {getStatusLabel(task.status)}
                      </span>
                      <span className={`px-3 py-1 font-bold text-xs border ${getPriorityColor(task.priority)}`}>
                        {task.priority === 'high' ? t('high') : task.priority === 'medium' ? t('medium') : t('low')}
                      </span>
                    </div>
                  </div>

                  <div className={`border-t-2 pt-4 grid grid-cols-1 md:grid-cols-3 gap-6 ${isDark ? 'border-gray-700' : 'border-gray-300'}`}>
                    <div className="flex items-center gap-3">
                      <User size={20} className={isDark ? 'text-orange-400' : 'text-blue-900'} />
                      <div>
                        <p className={`text-xs font-semibold ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{t('assignedTo')}</p>
                        <p className={`font-semibold ${isDark ? 'text-gray-100' : 'text-gray-800'}`}>{task.assignedTo}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Calendar size={20} className="text-orange-500" />
                      <div>
                        <p className={`text-xs font-semibold ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{t('dueDate')}</p>
                        <p className={`font-semibold ${isDark ? 'text-gray-100' : 'text-gray-800'}`}>{new Date(task.dueDate).toLocaleDateString('en-IN')}</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-end gap-2">
                      <button className={`text-white px-3 py-2 flex items-center gap-2 transition-colors ${isDark ? 'bg-orange-600 hover:bg-orange-700' : 'bg-blue-900 hover:bg-blue-800'}`}>
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
          <div className={`border-2 ${isDark ? 'border-gray-700 bg-gray-800' : 'border-gray-300 bg-white'} p-12 text-center shadow-md`}>
            <p className={`text-lg font-semibold ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{t('noTasks')}</p>
            <p className={isDark ? 'text-gray-400' : 'text-gray-500'}>{t('tryAdjusting')}</p>
          </div>
        )}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} max-w-2xl w-full border-4 border-blue-900`}>
            <div className={`border-b-4 border-orange-400 px-6 py-4 ${isDark ? 'bg-gray-700' : 'bg-blue-50'}`}>
              <h3 className={`text-2xl font-bold ${isDark ? 'text-orange-400' : 'text-blue-900'}`}>{t('createNewTask')}</h3>
            </div>
            <div className="p-6 space-y-4">
              <input type="text" placeholder={t('enterTitle')} className={`w-full px-4 py-2 border-2 focus:outline-none ${isDark ? 'bg-gray-700 border-gray-600 focus:border-orange-500 text-white' : 'bg-white border-gray-300 focus:border-blue-900'}`} />
              <textarea placeholder={t('enterDescription')} rows="4" className={`w-full px-4 py-2 border-2 focus:outline-none ${isDark ? 'bg-gray-700 border-gray-600 focus:border-orange-500 text-white' : 'bg-white border-gray-300 focus:border-blue-900'}`}></textarea>
              <div className="grid grid-cols-2 gap-4">
                <select className={`px-4 py-2 border-2 focus:outline-none ${isDark ? 'bg-gray-700 border-gray-600 focus:border-orange-500 text-white' : 'bg-white border-gray-300 focus:border-blue-900'}`}>
                  <option>{t('selectWorker')}</option>
                  <option>Priya Sharma</option>
                  <option>Anjali Verma</option>
                </select>
                <input type="date" className={`px-4 py-2 border-2 focus:outline-none ${isDark ? 'bg-gray-700 border-gray-600 focus:border-orange-500 text-white' : 'bg-white border-gray-300 focus:border-blue-900'}`} />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <select className={`px-4 py-2 border-2 focus:outline-none ${isDark ? 'bg-gray-700 border-gray-600 focus:border-orange-500 text-white' : 'bg-white border-gray-300 focus:border-blue-900'}`}>
                  <option>{t('selectPriority')}</option>
                  <option>{t('high')}</option>
                  <option>{t('medium')}</option>
                </select>
                <select className={`px-4 py-2 border-2 focus:outline-none ${isDark ? 'bg-gray-700 border-gray-600 focus:border-orange-500 text-white' : 'bg-white border-gray-300 focus:border-blue-900'}`}>
                  <option>{t('pending')}</option>
                  <option>{t('inProgress')}</option>
                  <option>{t('completed')}</option>
                </select>
              </div>
            </div>
            <div className={`border-t-2 px-6 py-4 flex justify-end gap-4 ${isDark ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-300'}`}>
              <button onClick={() => setShowModal(false)} className={`font-bold py-2 px-6 border-2 transition-colors ${isDark ? 'bg-gray-700 hover:bg-gray-600 text-white border-gray-600' : 'bg-white hover:bg-gray-100 text-blue-900 border-blue-900'}`}>
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