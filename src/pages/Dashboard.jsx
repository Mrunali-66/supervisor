import React, { useState, useEffect } from 'react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { CheckCircle, AlertCircle, Users } from 'lucide-react';
import { useAppContext } from '../App';

const Dashboard = ({ selectedWorker }) => {
  const { lang, isDark } = useAppContext();
  const [dashboardData, setDashboardData] = useState({
    tasksCompleted: 110,
    tasksPending: 28,
    performance: 89,
    totalWorkers: 5,
  });

  const translations = {
    en: {
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

  // Theme Colors
  const bgColor = isDark ? 'bg-gray-900' : 'bg-white';
  const textColor = isDark ? 'text-gray-100' : 'text-gray-900';
  const secondaryText = isDark ? 'text-gray-400' : 'text-gray-600';
  const cardBg = isDark ? 'bg-gray-800' : 'bg-white';
  const borderColor = isDark ? 'border-gray-700' : 'border-gray-300';
  const headerBg = isDark ? 'bg-gray-700' : 'bg-gray-50';

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
    <div className={`min-h-screen ${bgColor} ${textColor}`}>
      {/* Header */}
      <div className={`border-b-4 border-orange-400 ${isDark ? 'bg-gradient-to-r from-gray-900 to-gray-800' : 'bg-gradient-to-r from-blue-900 to-blue-800'} px-6 py-6`}>
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-white">{t('dashboardOverview')}</h1>
          {selectedWorker && (
            <p className="text-blue-100 mt-2">{t('viewingPerformance')} <span className="font-bold text-orange-300">{selectedWorker.name}</span></p>
          )}
          <div className="h-1 w-24 bg-orange-400 mt-3"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className={`border-2 ${borderColor} ${cardBg} hover:shadow-lg transition-shadow`}>
            <div className="border-b-4 border-blue-700 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className={`${secondaryText} font-semibold text-sm`}>{t('tasksCompleted')}</p>
                  <p className={`text-4xl font-bold text-blue-900 mt-3`}>{dashboardData.tasksCompleted}</p>
                </div>
                <CheckCircle size={50} className="text-green-600 opacity-80" />
              </div>
            </div>
            <div className={`px-6 py-3 ${headerBg} ${secondaryText} text-xs font-semibold`}>
              {t('lastUpdated')}
            </div>
          </div>

          <div className={`border-2 ${borderColor} ${cardBg} hover:shadow-lg transition-shadow`}>
            <div className="border-b-4 border-orange-500 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className={`${secondaryText} font-semibold text-sm`}>{t('pendingTasks')}</p>
                  <p className="text-4xl font-bold text-orange-700 mt-3">{dashboardData.tasksPending}</p>
                </div>
                <AlertCircle size={50} className="text-orange-600 opacity-80" />
              </div>
            </div>
            <div className={`px-6 py-3 ${headerBg} ${secondaryText} text-xs font-semibold`}>
              {t('requiresAttention')}
            </div>
          </div>

          <div className={`border-2 ${borderColor} ${cardBg} hover:shadow-lg transition-shadow`}>
            <div className="border-b-4 border-green-700 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className={`${secondaryText} font-semibold text-sm`}>{t('performanceScore')}</p>
                  <p className="text-4xl font-bold text-green-700 mt-3">{dashboardData.performance}%</p>
                </div>
                <CheckCircle size={50} className="text-green-600 opacity-80" />
              </div>
            </div>
            <div className={`px-6 py-3 ${headerBg} ${secondaryText} text-xs font-semibold`}>
              {t('overallRating')}
            </div>
          </div>

          <div className={`border-2 ${borderColor} ${cardBg} hover:shadow-lg transition-shadow`}>
            <div className="border-b-4 border-purple-700 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className={`${secondaryText} font-semibold text-sm`}>{t('activeWorkers')}</p>
                  <p className="text-4xl font-bold text-purple-700 mt-3">{dashboardData.totalWorkers}</p>
                </div>
                <Users size={50} className="text-purple-600 opacity-80" />
              </div>
            </div>
            <div className={`px-6 py-3 ${headerBg} ${secondaryText} text-xs font-semibold`}>
              {t('currentStatus')}
            </div>
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Monthly Progress */}
          <div className={`border-2 ${borderColor} ${cardBg}`}>
            <div className={`border-b-2 border-blue-900 px-6 py-4 ${headerBg}`}>
              <h3 className={`text-lg font-bold ${isDark ? 'text-blue-400' : 'text-blue-900'}`}>{t('monthlyProgress')}</h3>
              <p className={`${secondaryText} text-sm mt-1`}>{t('year')}</p>
            </div>
            <div className="p-6">
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={dashboardChartData}>
                  <CartesianGrid strokeDasharray="3 3" stroke={isDark ? '#444' : '#d1d5db'} />
                  <XAxis dataKey="month" stroke={isDark ? '#999' : '#374151'} />
                  <YAxis stroke={isDark ? '#999' : '#374151'} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: isDark ? '#374151' : '#fff', color: isDark ? '#fff' : '#000', border: '2px solid #1e3a8a', borderRadius: '0px' }}
                  />
                  <Legend />
                  <Line type="linear" dataKey="completed" stroke="#1e3a8a" strokeWidth={2} dot={{ fill: '#1e3a8a', r: 4 }} />
                  <Line type="linear" dataKey="pending" stroke="#ea580c" strokeWidth={2} dot={{ fill: '#ea580c', r: 4 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Performance Comparison */}
          <div className={`border-2 ${borderColor} ${cardBg}`}>
            <div className={`border-b-2 border-blue-900 px-6 py-4 ${headerBg}`}>
              <h3 className={`text-lg font-bold ${isDark ? 'text-blue-400' : 'text-blue-900'}`}>{t('workerPerformance')}</h3>
              <p className={`${secondaryText} text-sm mt-1`}>{t('performanceIndex')}</p>
            </div>
            <div className="p-6">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={performanceData}>
                  <CartesianGrid strokeDasharray="3 3" stroke={isDark ? '#444' : '#d1d5db'} />
                  <XAxis dataKey="name" stroke={isDark ? '#999' : '#374151'} />
                  <YAxis domain={[0, 100]} stroke={isDark ? '#999' : '#374151'} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: isDark ? '#374151' : '#fff', color: isDark ? '#fff' : '#000', border: '2px solid #1e3a8a', borderRadius: '0px' }}
                  />
                  <Bar dataKey="performance" fill="#1e3a8a" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Recent Activities */}
        <div className={`border-2 ${borderColor} ${cardBg} mb-8`}>
          <div className={`border-b-2 border-blue-900 px-6 py-4 ${headerBg}`}>
            <h3 className={`text-lg font-bold ${isDark ? 'text-blue-400' : 'text-blue-900'}`}>{t('recentActivities')}</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className={`border-b-2 ${borderColor} ${headerBg}`}>
                  <th className={`px-6 py-4 text-left text-sm font-bold ${isDark ? 'text-blue-400' : 'text-blue-900'}`}>{t('activity')}</th>
                  <th className={`px-6 py-4 text-left text-sm font-bold ${isDark ? 'text-blue-400' : 'text-blue-900'}`}>{t('status')}</th>
                  <th className={`px-6 py-4 text-left text-sm font-bold ${isDark ? 'text-blue-400' : 'text-blue-900'}`}>{t('time')}</th>
                </tr>
              </thead>
              <tbody>
                {t('activities').map((activity, idx) => (
                  <tr key={idx} className={`${idx % 2 === 0 ? (isDark ? 'bg-gray-800' : 'bg-white') : (isDark ? 'bg-gray-700' : 'bg-gray-50')}`}>
                    <td className={`px-6 py-4 text-sm ${textColor} border-b ${borderColor}`}>{activity.task}</td>
                    <td className={`px-6 py-4 text-sm border-b ${borderColor}`}>
                      <span className={`px-3 py-1 font-semibold text-xs ${
                        activity.status === (lang === 'en' ? 'Completed' : 'पूर्ण झाले') ? 'bg-green-100 text-green-800' :
                        activity.status === (lang === 'en' ? 'Pending' : 'प्रलंबित') ? 'bg-red-100 text-red-800' :
                        'bg-blue-100 text-blue-800'
                      }`}>
                        {activity.status}
                      </span>
                    </td>
                    <td className={`px-6 py-4 text-sm ${secondaryText} border-b ${borderColor}`}>{activity.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className={`border-2 ${borderColor} ${cardBg}`}>
            <div className="border-b-4 border-blue-900 p-6">
              <p className={`${secondaryText} font-semibold text-sm mb-3`}>{t('overallCompletion')}</p>
              <p className="text-5xl font-bold text-blue-900">
                {Math.round((dashboardData.tasksCompleted / (dashboardData.tasksCompleted + dashboardData.tasksPending)) * 100)}%
              </p>
              <p className={`${secondaryText} text-xs mt-3`}>{t('totalTasksManaged')}</p>
            </div>
          </div>

          <div className={`border-2 ${borderColor} ${cardBg}`}>
            <div className="border-b-4 border-green-700 p-6">
              <p className={`${secondaryText} font-semibold text-sm mb-3`}>{t('teamAverage')}</p>
              <p className="text-5xl font-bold text-green-700">
                {Math.round((92 + 88 + 75 + 96 + 85) / 5)}%
              </p>
              <p className={`${secondaryText} text-xs mt-3`}>{t('allWorkersScore')}</p>
            </div>
          </div>

          <div className={`border-2 ${borderColor} ${cardBg}`}>
            <div className="border-b-4 border-orange-500 p-6">
              <p className={`${secondaryText} font-semibold text-sm mb-3`}>{t('totalWorkload')}</p>
              <p className="text-5xl font-bold text-orange-700">
                {dashboardData.tasksCompleted + dashboardData.tasksPending}
              </p>
              <p className={`${secondaryText} text-xs mt-3`}>{t('tasksInPipeline')}</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className={`border-t-4 border-orange-400 ${headerBg} px-6 py-4 text-center text-xs ${secondaryText}`}>
          <p>{t('copyright')}</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;