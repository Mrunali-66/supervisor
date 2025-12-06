import React, { useState, useEffect } from 'react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { CheckCircle, Clock, AlertCircle, Users } from 'lucide-react';

const Dashboard = ({ selectedWorker }) => {
  const [dashboardData, setDashboardData] = useState({
    tasksCompleted: 0,
    tasksPending: 0,
    performance: 0,
    totalWorkers: 0,
  });

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
                <h1 className="text-3xl font-bold text-white">ASHA Worker Supervision System</h1>
                <p className="text-blue-100 text-sm mt-1">Ministry of Health and Family Welfare, Government of India</p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 text-blue-100 text-sm">
            <span>Dashboard</span>
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
          <h2 className="text-2xl font-bold text-blue-900 mb-2">Dashboard Overview</h2>
          {selectedWorker && (
            <p className="text-gray-700">Viewing Performance Data for: <span className="font-bold text-orange-600">{selectedWorker.name}</span></p>
          )}
          <div className="h-1 w-24 bg-orange-400 mt-3"></div>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="border-2 border-gray-300 bg-white hover:shadow-lg transition-shadow">
            <div className="border-b-4 border-blue-700 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 font-semibold text-sm">Tasks Completed</p>
                  <p className="text-4xl font-bold text-blue-900 mt-3">{dashboardData.tasksCompleted}</p>
                </div>
                <CheckCircle size={50} className="text-green-600 opacity-80" />
              </div>
            </div>
            <div className="px-6 py-3 bg-gray-50 text-gray-600 text-xs font-semibold">
              Last updated: Today
            </div>
          </div>

          <div className="border-2 border-gray-300 bg-white hover:shadow-lg transition-shadow">
            <div className="border-b-4 border-orange-500 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 font-semibold text-sm">Pending Tasks</p>
                  <p className="text-4xl font-bold text-orange-700 mt-3">{dashboardData.tasksPending}</p>
                </div>
                <AlertCircle size={50} className="text-orange-600 opacity-80" />
              </div>
            </div>
            <div className="px-6 py-3 bg-gray-50 text-gray-600 text-xs font-semibold">
              Requires Attention
            </div>
          </div>

          <div className="border-2 border-gray-300 bg-white hover:shadow-lg transition-shadow">
            <div className="border-b-4 border-green-700 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 font-semibold text-sm">Performance Score</p>
                  <p className="text-4xl font-bold text-green-700 mt-3">{dashboardData.performance}%</p>
                </div>
                <CheckCircle size={50} className="text-green-600 opacity-80" />
              </div>
            </div>
            <div className="px-6 py-3 bg-gray-50 text-gray-600 text-xs font-semibold">
              Overall Rating
            </div>
          </div>

          <div className="border-2 border-gray-300 bg-white hover:shadow-lg transition-shadow">
            <div className="border-b-4 border-purple-700 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 font-semibold text-sm">Active Workers</p>
                  <p className="text-4xl font-bold text-purple-700 mt-3">{dashboardData.totalWorkers}</p>
                </div>
                <Users size={50} className="text-purple-600 opacity-80" />
              </div>
            </div>
            <div className="px-6 py-3 bg-gray-50 text-gray-600 text-xs font-semibold">
              Current Status
            </div>
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Monthly Progress */}
          <div className="border-2 border-gray-300 bg-white">
            <div className="border-b-2 border-blue-900 px-6 py-4 bg-gray-50">
              <h3 className="text-lg font-bold text-blue-900">Monthly Task Progress Chart</h3>
              <p className="text-gray-600 text-sm mt-1">Year 2024</p>
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
              <h3 className="text-lg font-bold text-blue-900">Worker Performance Comparison</h3>
              <p className="text-gray-600 text-sm mt-1">Performance Index (0-100)</p>
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
            <h3 className="text-lg font-bold text-blue-900">Recent Activities & Notifications</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-300 bg-blue-50">
                  <th className="px-6 py-4 text-left text-sm font-bold text-blue-900">Activity</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-blue-900">Status</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-blue-900">Time</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { task: 'Task completed by Priya Sharma in Nandpur village', status: 'Completed', time: '2 hours ago' },
                  { task: 'New task assigned to Anjali Verma in Mehdpur', status: 'Assigned', time: '5 hours ago' },
                  { task: 'Alert: Roshni Patel has pending tasks', status: 'Pending', time: '8 hours ago' },
                  { task: 'Task completed by Divya Singh in Heerapur', status: 'Completed', time: '1 day ago' },
                ].map((activity, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-6 py-4 text-sm text-gray-700 border-b border-gray-200">{activity.task}</td>
                    <td className="px-6 py-4 text-sm border-b border-gray-200">
                      <span className={`px-3 py-1 font-semibold text-xs ${
                        activity.status === 'Completed' ? 'bg-green-100 text-green-800' :
                        activity.status === 'Pending' ? 'bg-red-100 text-red-800' :
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
              <p className="text-gray-600 font-semibold text-sm mb-3">Overall Completion Rate</p>
              <p className="text-5xl font-bold text-blue-900">
                {Math.round((dashboardData.tasksCompleted / (dashboardData.tasksCompleted + dashboardData.tasksPending)) * 100)}%
              </p>
              <p className="text-gray-600 text-xs mt-3">Total tasks managed and tracked</p>
            </div>
          </div>

          <div className="border-2 border-gray-300 bg-white">
            <div className="border-b-4 border-green-700 p-6">
              <p className="text-gray-600 font-semibold text-sm mb-3">Team Average Performance</p>
              <p className="text-5xl font-bold text-green-700">
                {Math.round((92 + 88 + 75 + 96 + 85) / 5)}%
              </p>
              <p className="text-gray-600 text-xs mt-3">All ASHA workers average score</p>
            </div>
          </div>

          <div className="border-2 border-gray-300 bg-white">
            <div className="border-b-4 border-orange-500 p-6">
              <p className="text-gray-600 font-semibold text-sm mb-3">Total Workload</p>
              <p className="text-5xl font-bold text-orange-700">
                {dashboardData.tasksCompleted + dashboardData.tasksPending}
              </p>
              <p className="text-gray-600 text-xs mt-3">Tasks in pipeline across all workers</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t-4 border-orange-400 bg-gray-50 px-6 py-4 text-center text-xs text-gray-600">
          <p>© 2024 Ministry of Health and Family Welfare, Government of India | Last Updated: Today at 10:30 AM IST</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;