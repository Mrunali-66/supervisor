import React, { useState } from 'react';
import { Search, ChevronRight, MapPin, Phone } from 'lucide-react';

const mockWorkers = [
  { id: 1, name: 'Priya Sharma', email: 'priya@example.com', phone: '9876543210', village: 'Nandpur', tasksCompleted: 24, tasksRemaining: 3, status: 'active', performance: 92 },
  { id: 2, name: 'Anjali Verma', email: 'anjali@example.com', phone: '9876543211', village: 'Mehdpur', tasksCompleted: 21, tasksRemaining: 5, status: 'active', performance: 88 },
  { id: 3, name: 'Roshni Patel', email: 'roshni@example.com', phone: '9876543212', village: 'Solanpur', tasksCompleted: 18, tasksRemaining: 8, status: 'inactive', performance: 75 },
  { id: 4, name: 'Divya Singh', email: 'divya@example.com', phone: '9876543213', village: 'Heerapur', tasksCompleted: 28, tasksRemaining: 1, status: 'active', performance: 96 },
  { id: 5, name: 'Kavya Desai', email: 'kavya@example.com', phone: '9876543214', village: 'Bhimpura', tasksCompleted: 19, tasksRemaining: 6, status: 'active', performance: 85 },
];

const Workers = ({ setSelectedWorker, setCurrentPage }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  const filteredWorkers = mockWorkers.filter(w => {
    const matchesSearch = w.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         w.village.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' || w.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const handleWorkerClick = (worker) => {
    setSelectedWorker(worker);
    setCurrentPage('worker-details');
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
                <h1 className="text-3xl font-bold text-white">ASHA Workers Management</h1>
                <p className="text-blue-100 text-sm mt-1">Ministry of Health and Family Welfare, Government of India</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Page Title */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-blue-900 mb-2">Manage ASHA Workers</h2>
          <p className="text-gray-700 mb-4">View, search, and manage all registered ASHA workers in your region</p>
          <div className="h-1 w-24 bg-orange-400"></div>
        </div>

        {/* Search and Filter Section */}
        <div className="border-2 border-gray-300 bg-white mb-8 p-6">
          <h3 className="text-lg font-bold text-blue-900 mb-4">Search & Filter Workers</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-gray-700 mb-2">Search by Name or Village</label>
              <div className="relative">
                <Search className="absolute left-3 top-3 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Enter worker name or village..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 focus:border-blue-900 focus:outline-none text-gray-700"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Filter by Status</label>
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-300 focus:border-blue-900 focus:outline-none text-gray-700 bg-white"
              >
                <option value="all">All Status</option>
                <option value="active">Active Workers</option>
                <option value="inactive">Inactive Workers</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="bg-blue-50 border-l-4 border-blue-900 px-6 py-3 mb-6">
          <p className="text-gray-700 font-semibold">Showing {filteredWorkers.length} worker(s)</p>
        </div>

        {/* Workers List */}
        {filteredWorkers.length > 0 ? (
          <div className="space-y-6">
            {filteredWorkers.map(worker => (
              <div key={worker.id} className="border-2 border-gray-300 bg-white hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-4">
                    {/* Worker Info */}
                    <div className="md:col-span-2">
                      <h4 className="text-xl font-bold text-blue-900 mb-3">{worker.name}</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2 text-gray-700">
                          <MapPin size={16} className="text-orange-500" />
                          <span>Village: <span className="font-semibold">{worker.village}</span></span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-700">
                          <Phone size={16} className="text-blue-900" />
                          <span>Contact: <span className="font-semibold">{worker.phone}</span></span>
                        </div>
                        <div className="text-gray-700">
                          Email: <span className="font-semibold">{worker.email}</span>
                        </div>
                      </div>
                    </div>

                    {/* Status */}
                    <div>
                      <p className="text-sm text-gray-600 mb-2 font-semibold">Current Status</p>
                      <div className={`px-4 py-3 text-center font-bold rounded-none border-2 ${
                        worker.status === 'active' 
                          ? 'bg-green-100 border-green-600 text-green-800' 
                          : 'bg-gray-100 border-gray-600 text-gray-800'
                      }`}>
                        {worker.status.charAt(0).toUpperCase() + worker.status.slice(1)}
                      </div>
                    </div>

                    {/* Performance */}
                    <div>
                      <p className="text-sm text-gray-600 mb-2 font-semibold">Performance Score</p>
                      <div className="bg-blue-50 border-2 border-blue-900 px-4 py-3 text-center">
                        <p className="text-3xl font-bold text-blue-900">{worker.performance}%</p>
                        <p className="text-xs text-gray-600 mt-1">Overall Rating</p>
                      </div>
                    </div>
                  </div>

                  {/* Task Info */}
                  <div className="border-t-2 border-gray-300 pt-4 mt-4">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
                      <div className="bg-green-50 border-l-4 border-green-600 px-4 py-3">
                        <p className="text-xs text-gray-600 font-semibold">Tasks Completed</p>
                        <p className="text-2xl font-bold text-green-700 mt-1">{worker.tasksCompleted}</p>
                      </div>
                      <div className="bg-orange-50 border-l-4 border-orange-500 px-4 py-3">
                        <p className="text-xs text-gray-600 font-semibold">Pending Tasks</p>
                        <p className="text-2xl font-bold text-orange-700 mt-1">{worker.tasksRemaining}</p>
                      </div>
                      <div className="bg-blue-50 border-l-4 border-blue-900 px-4 py-3">
                        <p className="text-xs text-gray-600 font-semibold">Total Tasks</p>
                        <p className="text-2xl font-bold text-blue-900 mt-1">{worker.tasksCompleted + worker.tasksRemaining}</p>
                      </div>
                    </div>

                    {/* Action Button */}
                    <button
                      onClick={() => handleWorkerClick(worker)}
                      className="w-full md:w-auto bg-blue-900 hover:bg-blue-800 text-white font-bold py-3 px-6 transition-colors flex items-center justify-center gap-2"
                    >
                      View Full Details <ChevronRight size={20} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="border-2 border-gray-300 bg-white p-12 text-center">
            <p className="text-gray-600 text-lg font-semibold">No workers found matching your search criteria</p>
            <p className="text-gray-500 mt-2">Try adjusting your search filters</p>
          </div>
        )}

        {/* Footer */}
        <div className="border-t-4 border-orange-400 bg-gray-50 px-6 py-4 text-center text-xs text-gray-600 mt-12">
          <p>© 2024 Ministry of Health and Family Welfare, Government of India | Total Workers: {mockWorkers.length}</p>
        </div>
      </div>
    </div>
  );
};

export default Workers;