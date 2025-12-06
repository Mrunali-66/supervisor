import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ArrowLeft, Phone, Mail, MapPin, Calendar, CheckCircle, Clock } from 'lucide-react';

const WorkerDetails = ({ selectedWorker, setCurrentPage, setSelectedWorker }) => {
  if (!selectedWorker) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600 text-lg font-semibold">No worker selected</p>
        </div>
      </div>
    );
  }

  const workerChartData = [
    { month: 'Jan', completed: 4 },
    { month: 'Feb', completed: 5 },
    { month: 'Mar', completed: 4 },
    { month: 'Apr', completed: 6 },
    { month: 'May', completed: 5 },
    { month: 'Jun', completed: 7 },
  ];

  const completionRate = Math.round((selectedWorker.tasksCompleted / (selectedWorker.tasksCompleted + selectedWorker.tasksRemaining)) * 100);

  const handleBackClick = () => {
    setCurrentPage('workers');
    setSelectedWorker(null);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="border-b-4 border-orange-400 bg-gradient-to-r from-blue-900 to-blue-800 px-6 py-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <button
              onClick={handleBackClick}
              className="text-white hover:text-orange-300 transition-colors flex items-center gap-2"
            >
              <ArrowLeft size={24} />
              <span className="font-semibold">Back to Workers List</span>
            </button>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-orange-400 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">📋</span>
              </div>
              <div>
                <h1 className="text-3xl font-bold text-white">{selectedWorker.name}</h1>
                <p className="text-blue-100 text-sm mt-1">ASHA Worker Profile & Performance Report</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Profile Header Card */}
        <div className="border-2 border-gray-300 bg-white mb-8">
          <div className="border-b-4 border-blue-900 p-6 bg-blue-50">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <p className="text-sm text-gray-600 font-semibold mb-2">Worker Name</p>
                <p className="text-2xl font-bold text-blue-900">{selectedWorker.name}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 font-semibold mb-2">Current Status</p>
                <div className={`px-4 py-2 font-bold inline-block border-2 ${
                  selectedWorker.status === 'active'
                    ? 'bg-green-100 border-green-600 text-green-800'
                    : 'bg-gray-100 border-gray-600 text-gray-800'
                }`}>
                  {selectedWorker.status.charAt(0).toUpperCase() + selectedWorker.status.slice(1)}
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-600 font-semibold mb-2">Performance Rating</p>
                <div className="bg-white border-2 border-blue-900 px-4 py-2 inline-block">
                  <p className="text-3xl font-bold text-blue-900">{selectedWorker.performance}%</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="border-2 border-gray-300 bg-white mb-8">
          <div className="border-b-2 border-blue-900 px-6 py-4 bg-gray-50">
            <h3 className="text-lg font-bold text-blue-900">Contact Information</h3>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <Mail size={24} className="text-orange-500 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm text-gray-600 font-semibold mb-1">Email Address</p>
                  <p className="text-gray-800 font-semibold">{selectedWorker.email}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone size={24} className="text-blue-900 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm text-gray-600 font-semibold mb-1">Phone Number</p>
                  <p className="text-gray-800 font-semibold">{selectedWorker.phone}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin size={24} className="text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm text-gray-600 font-semibold mb-1">Assigned Village</p>
                  <p className="text-gray-800 font-semibold">{selectedWorker.village}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Calendar size={24} className="text-purple-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm text-gray-600 font-semibold mb-1">Join Date</p>
                  <p className="text-gray-800 font-semibold">
                    {new Date(selectedWorker.joinDate).toLocaleDateString('en-IN')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Task Statistics */}
        <div className="border-2 border-gray-300 bg-white mb-8">
          <div className="border-b-2 border-blue-900 px-6 py-4 bg-gray-50">
            <h3 className="text-lg font-bold text-blue-900">Task Statistics & Performance Metrics</h3>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="border-l-4 border-green-600 bg-green-50 px-4 py-4">
                <p className="text-sm text-gray-600 font-semibold mb-2">Tasks Completed</p>
                <p className="text-4xl font-bold text-green-700">{selectedWorker.tasksCompleted}</p>
                <p className="text-xs text-gray-600 mt-2">Successful completions</p>
              </div>
              <div className="border-l-4 border-orange-500 bg-orange-50 px-4 py-4">
                <p className="text-sm text-gray-600 font-semibold mb-2">Pending Tasks</p>
                <p className="text-4xl font-bold text-orange-700">{selectedWorker.tasksRemaining}</p>
                <p className="text-xs text-gray-600 mt-2">Awaiting completion</p>
              </div>
              <div className="border-l-4 border-blue-900 bg-blue-50 px-4 py-4">
                <p className="text-sm text-gray-600 font-semibold mb-2">Total Tasks</p>
                <p className="text-4xl font-bold text-blue-900">
                  {selectedWorker.tasksCompleted + selectedWorker.tasksRemaining}
                </p>
                <p className="text-xs text-gray-600 mt-2">Overall workload</p>
              </div>
              <div className="border-l-4 border-purple-600 bg-purple-50 px-4 py-4">
                <p className="text-sm text-gray-600 font-semibold mb-2">Completion Rate</p>
                <p className="text-4xl font-bold text-purple-700">{completionRate}%</p>
                <p className="text-xs text-gray-600 mt-2">Success ratio</p>
              </div>
            </div>
          </div>
        </div>

        {/* Monthly Performance Chart */}
        <div className="border-2 border-gray-300 bg-white mb-8">
          <div className="border-b-2 border-blue-900 px-6 py-4 bg-gray-50">
            <h3 className="text-lg font-bold text-blue-900">Monthly Task Completion Chart (2024)</h3>
            <p className="text-sm text-gray-600 mt-1">Year-to-date performance tracking</p>
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
              <h3 className="text-lg font-bold text-blue-900">Recent Tasks Completed</h3>
            </div>
            <div className="divide-y-2 divide-gray-300">
              {[
                { task: 'Health Campaign - Vaccination Drive', date: '3 days ago' },
                { task: 'Community Awareness Program', date: '5 days ago' },
                { task: 'Health Check-up Camp', date: '7 days ago' },
                { task: 'Maternal Health Training', date: '10 days ago' },
              ].map((item, idx) => (
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
              <h3 className="text-lg font-bold text-blue-900">Activity Log</h3>
            </div>
            <div className="divide-y-2 divide-gray-300">
              {[
                { activity: 'Task marked as completed', time: '2 hours ago' },
                { activity: 'New task assigned to worker', time: '5 hours ago' },
                { activity: 'Performance review conducted', time: '1 day ago' },
                { activity: 'Training session attended', time: '2 days ago' },
              ].map((item, idx) => (
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
            Edit Worker Details
          </button>
          <button className="bg-white hover:bg-blue-50 text-blue-900 font-bold py-4 px-6 transition-colors border-2 border-blue-900">
            Download Report
          </button>
          <button
            onClick={handleBackClick}
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-6 transition-colors border-2 border-orange-500"
          >
            Back to Workers List
          </button>
        </div>

        {/* Footer */}
        <div className="border-t-4 border-orange-400 bg-gray-50 px-6 py-4 text-center text-xs text-gray-600">
          <p>© 2024 Ministry of Health and Family Welfare, Government of India | Report Generated: Today</p>
        </div>
      </div>
    </div>
  );
};

export default WorkerDetails;