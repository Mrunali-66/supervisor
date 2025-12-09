import React, { useState, useEffect } from 'react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { CheckCircle, Clock, AlertCircle, Users, Globe } from 'lucide-react';

const Dashboard = ({ selectedWorker, lang, setLang }) => {
  const [dashboardData, setDashboardData] = useState({
    tasksCompleted: 0,
    tasksPending: 0,
    performance: 0,
    totalWorkers: 0,
  });

  const translations = {
    en: {
      appTitle: 'ASHA Worker Supervision System',
      appSubtitle: 'Ministry of Health and Family Welfare, Government of India',
      dashboard: 'Dashboard',
      dashboardOverview: 'Dashboard Overview',
      viewingPerformance: 'Viewing Performance Data for:',
      tasksCompleted: 'Tasks Completed',
      pendingTasks: 'Pending Tasks',
      performanceScore: 'Performance Score',
      activeWorkers: 'Active Workers',
      lastUpdated: 'Last updated: Today',
      requiresAttention: 'Requires Attention',
      overallRating: 'Overall Rating',
      currentStatus: 'Current Status',
      monthlyProgress: 'Monthly Task Progress Chart',
      year: 'Year 2024',
      workerPerformance: 'Worker Performance Comparison',
      performanceIndex: 'Performance Index (0-100)',
      recentActivities: 'Recent Activities & Notifications',
      activity: 'Activity',
      status: 'Status',
      time: 'Time',
      completed: 'Completed',
      assigned: 'Assigned',
      pending: 'Pending',
      overallCompletion: 'Overall Completion Rate',
      totalTasksManaged: 'Total tasks managed and tracked',
      teamAverage: 'Team Average Performance',
      allWorkersScore: 'All ASHA workers average score',
      totalWorkload: 'Total Workload',
      tasksInPipeline: 'Tasks in pipeline across all workers',
      copyright: '© 2024 Ministry of Health and Family Welfare, Government of India | Last Updated: Today at 10:30 AM IST',
      activities: [
        { task: 'Task completed by Priya Sharma in Nandpur village', status: 'Completed', time: '2 hours ago' },
        { task: 'New task assigned to Anjali Verma in Mehdpur', status: 'Assigned', time: '5 hours ago' },
        { task: 'Alert: Roshni Patel has pending tasks', status: 'Pending', time: '8 hours ago' },
        { task: 'Task completed by Divya Singh in Heerapur', status: 'Completed', time: '1 day ago' },
      ]
    },
    mr: {
      appTitle: 'आशा कार्यकर्ता पर्यवेक्षण प्रणाली',
      appSubtitle: 'आरोग्य आणि कुटुंब कल्याण मंत्रालय, भारत सरकार',
      dashboard: 'डॅशबोर्ड',
      dashboardOverview: 'डॅशबोर्ड विहंगावलोकन',
      viewingPerformance: 'यासाठी कार्यक्षमता डेटा पाहत आहे:',
      tasksCompleted: 'पूर्ण झालेली कार्य',
      pendingTasks: 'प्रलंबित कार्य',
      performanceScore: 'कार्यक्षमता स्कोर',
      activeWorkers: 'सक्रिय कार्यकर्ते',
      lastUpdated: 'शेवटचा अपडेट: आज',
      requiresAttention: 'लक्ष देणे आवश्यक आहे',
      overallRating: 'संपूर्ण रेटिंग',
      currentStatus: 'वर्तमान स्थिती',
      monthlyProgress: 'मासिक कार्य प्रगती तक्ता',
      year: 'वर्ष 2024',
      workerPerformance: 'कार्यकर्ता कार्यक्षमता तुलना',
      performanceIndex: 'कार्यक्षमता निर्देशांक (0-100)',
      recentActivities: 'अलीकडील कृत्य आणि सूचना',
      activity: 'क्रियाकलाप',
      status: 'स्थिती',
      time: 'वेळ',
      completed: 'पूर्ण झाले',
      assigned: 'नियुक्त केले',
      pending: 'प्रलंबित',
      overallCompletion: 'संपूर्ण पूर्णता दर',
      totalTasksManaged: 'एकूण व्यवस्थापित आणि ट्रॅक केलेली कार्य',
      teamAverage: 'टीम सरासरी कार्यक्षमता',
      allWorkersScore: 'सर्व आशा कार्यकर्ते सरासरी स्कोर',
      totalWorkload: 'एकूण कामाचा भार',
      tasksInPipeline: 'सर्व कार्यकर्त्यांच्या पाइपलाइनमधील कार्य',
      copyright: '© 2024 आरोग्य आणि कुटुंब कल्याण मंत्रालय, भारत सरकार | शेवटचा अपडेट: आज दोपहर 10:30 IST',
      activities: [
        { task: 'प्रिया शर्मा यांनी नंदपूर गावात कार्य पूर्ण केले', status: 'पूर्ण झाले', time: '2 तास आधी' },
        { task: 'अंजली वर्मा यांना मेहदपूरमध्ये नवीन कार्य नियुक्त केले', status: 'नियुक्त केले', time: '5 तास आधी' },
        { task: 'सतर्कता: रोशनी पटेल यांच्याकडे प्रलंबित कार्य आहे', status: 'प्रलंबित', time: '8 तास आधी' },
        { task: 'दिव्या सिंह यांनी हीरापूरमध्ये कार्य पूर्ण केले', status: 'पूर्ण झाले', time: '1 दिवस आधी' },
      ]
    }
  };

  const dashboardChartData = [
    { month: 'Jan', completed: 45, pending: 8 },
    { month: 'Feb', completed: 52, pending: 12 },
    { month: 'Mar', completed: 48, pending: 10 },
    { month: 'Apr', completed: 61, pending: 7 },
    { month: 'May', completed: 58, pending: 9 },
    { month: 'Jun', completed: 70, pending: 5 },
  ];

  const performanceData = [
    { name: 'Priya', performance: 92 },
    { name: 'Anjali', performance: 88 },
    { name: 'Roshni', performance: 75 },
    { name: 'Divya', performance: 96 },
    { name: 'Kavya', performance: 85 },
  ];

  const t = (key) => translations[lang][key] || key;

  useEffect(() => {
    if (selectedWorker) {
      setDashboardData({
        tasksCompleted: selectedWorker.tasksCompleted,
        tasksPending: selectedWorker.tasksRemaining,
        performance: selectedWorker.performance,
        totalWorkers: 1,
      });
    } else {
      setDashboardData({
        tasksCompleted: 110,
        tasksPending: 28,
        performance: 89,
        totalWorkers: 5,
      });
    }
  }, [selectedWorker]);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="border-b-4 border-orange-400 bg-gradient-to-r from-blue-900 to-blue-800 px-6 py-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-orange-400 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">🔍</span>
              </div>
              <div>
                <h1 className="text-3xl font-bold text-white">{t('appTitle')}</h1>
                <p className="text-blue-100 text-sm mt-1">{t('appSubtitle')}</p>
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
          <div className="flex items-center gap-2 text-blue-100 text-sm">
            <span>{t('dashboard')}</span>
            {selectedWorker && (
              <>
                <span>•</span>
                <span className="text-orange-300 font-semibold">{selectedWorker.name}</span>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Page Title */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-blue-900 mb-2">{t('dashboardOverview')}</h2>
          {selectedWorker && (
            <p className="text-gray-700">{t('viewingPerformance')} <span className="font-bold text-orange-600">{selectedWorker.name}</span></p>
          )}
          <div className="h-1 w-24 bg-orange-400 mt-3"></div>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="border-2 border-gray-300 bg-white hover:shadow-lg transition-shadow">
            <div className="border-b-4 border-blue-700 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 font-semibold text-sm">{t('tasksCompleted')}</p>
                  <p className="text-4xl font-bold text-blue-900 mt-3">{dashboardData.tasksCompleted}</p>
                </div>
                <CheckCircle size={50} className="text-green-600 opacity-80" />
              </div>
            </div>
            <div className="px-6 py-3 bg-gray-50 text-gray-600 text-xs font-semibold">
              {t('lastUpdated')}
            </div>
          </div>

          <div className="border-2 border-gray-300 bg-white hover:shadow-lg transition-shadow">
            <div className="border-b-4 border-orange-500 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 font-semibold text-sm">{t('pendingTasks')}</p>
                  <p className="text-4xl font-bold text-orange-700 mt-3">{dashboardData.tasksPending}</p>
                </div>
                <AlertCircle size={50} className="text-orange-600 opacity-80" />
              </div>
            </div>
            <div className="px-6 py-3 bg-gray-50 text-gray-600 text-xs font-semibold">
              {t('requiresAttention')}
            </div>
          </div>

          <div className="border-2 border-gray-300 bg-white hover:shadow-lg transition-shadow">
            <div className="border-b-4 border-green-700 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 font-semibold text-sm">{t('performanceScore')}</p>
                  <p className="text-4xl font-bold text-green-700 mt-3">{dashboardData.performance}%</p>
                </div>
                <CheckCircle size={50} className="text-green-600 opacity-80" />
              </div>
            </div>
            <div className="px-6 py-3 bg-gray-50 text-gray-600 text-xs font-semibold">
              {t('overallRating')}
            </div>
          </div>

          <div className="border-2 border-gray-300 bg-white hover:shadow-lg transition-shadow">
            <div className="border-b-4 border-purple-700 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 font-semibold text-sm">{t('activeWorkers')}</p>
                  <p className="text-4xl font-bold text-purple-700 mt-3">{dashboardData.totalWorkers}</p>
                </div>
                <Users size={50} className="text-purple-600 opacity-80" />
              </div>
            </div>
            <div className="px-6 py-3 bg-gray-50 text-gray-600 text-xs font-semibold">
              {t('currentStatus')}
            </div>
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Monthly Progress */}
          <div className="border-2 border-gray-300 bg-white">
            <div className="border-b-2 border-blue-900 px-6 py-4 bg-gray-50">
              <h3 className="text-lg font-bold text-blue-900">{t('monthlyProgress')}</h3>
              <p className="text-gray-600 text-sm mt-1">{t('year')}</p>
            </div>
            <div className="p-6">
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={dashboardChartData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#d1d5db" />
                  <XAxis dataKey="month" stroke="#374151" />
                  <YAxis stroke="#374151" />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#fff', border: '2px solid #1e3a8a', borderRadius: '0px' }}
                  />
                  <Legend />
                  <Line 
                    type="linear" 
                    dataKey="completed" 
                    stroke="#1e3a8a" 
                    strokeWidth={2}
                    dot={{ fill: '#1e3a8a', r: 4 }}
                  />
                  <Line 
                    type="linear" 
                    dataKey="pending" 
                    stroke="#ea580c" 
                    strokeWidth={2}
                    dot={{ fill: '#ea580c', r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Performance Comparison */}
          <div className="border-2 border-gray-300 bg-white">
            <div className="border-b-2 border-blue-900 px-6 py-4 bg-gray-50">
              <h3 className="text-lg font-bold text-blue-900">{t('workerPerformance')}</h3>
              <p className="text-gray-600 text-sm mt-1">{t('performanceIndex')}</p>
            </div>
            <div className="p-6">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={performanceData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#d1d5db" />
                  <XAxis dataKey="name" stroke="#374151" />
                  <YAxis domain={[0, 100]} stroke="#374151" />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#fff', border: '2px solid #1e3a8a', borderRadius: '0px' }}
                  />
                  <Bar dataKey="performance" fill="#1e3a8a" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Recent Activities */}
        <div className="border-2 border-gray-300 bg-white mb-8">
          <div className="border-b-2 border-blue-900 px-6 py-4 bg-gray-50">
            <h3 className="text-lg font-bold text-blue-900">{t('recentActivities')}</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-300 bg-blue-50">
                  <th className="px-6 py-4 text-left text-sm font-bold text-blue-900">{t('activity')}</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-blue-900">{t('status')}</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-blue-900">{t('time')}</th>
                </tr>
              </thead>
              <tbody>
                {t('activities').map((activity, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-6 py-4 text-sm text-gray-700 border-b border-gray-200">{activity.task}</td>
                    <td className="px-6 py-4 text-sm border-b border-gray-200">
                      <span className={`px-3 py-1 font-semibold text-xs ${
                        activity.status === (lang === 'en' ? 'Completed' : 'पूर्ण झाले') ? 'bg-green-100 text-green-800' :
                        activity.status === (lang === 'en' ? 'Pending' : 'प्रलंबित') ? 'bg-red-100 text-red-800' :
                        'bg-blue-100 text-blue-800'
                      }`}>
                        {activity.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600 border-b border-gray-200">{activity.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="border-2 border-gray-300 bg-white">
            <div className="border-b-4 border-blue-900 p-6">
              <p className="text-gray-600 font-semibold text-sm mb-3">{t('overallCompletion')}</p>
              <p className="text-5xl font-bold text-blue-900">
                {Math.round((dashboardData.tasksCompleted / (dashboardData.tasksCompleted + dashboardData.tasksPending)) * 100)}%
              </p>
              <p className="text-gray-600 text-xs mt-3">{t('totalTasksManaged')}</p>
            </div>
          </div>

          <div className="border-2 border-gray-300 bg-white">
            <div className="border-b-4 border-green-700 p-6">
              <p className="text-gray-600 font-semibold text-sm mb-3">{t('teamAverage')}</p>
              <p className="text-5xl font-bold text-green-700">
                {Math.round((92 + 88 + 75 + 96 + 85) / 5)}%
              </p>
              <p className="text-gray-600 text-xs mt-3">{t('allWorkersScore')}</p>
            </div>
          </div>

          <div className="border-2 border-gray-300 bg-white">
            <div className="border-b-4 border-orange-500 p-6">
              <p className="text-gray-600 font-semibold text-sm mb-3">{t('totalWorkload')}</p>
              <p className="text-5xl font-bold text-orange-700">
                {dashboardData.tasksCompleted + dashboardData.tasksPending}
              </p>
              <p className="text-gray-600 text-xs mt-3">{t('tasksInPipeline')}</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t-4 border-orange-400 bg-gray-50 px-6 py-4 text-center text-xs text-gray-600">
          <p>{t('copyright')}</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;