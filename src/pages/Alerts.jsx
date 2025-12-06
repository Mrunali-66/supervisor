import React, { useState } from 'react';
import { AlertTriangle, AlertCircle, Info, CheckCircle, Bell, X, Clock } from 'lucide-react';

const mockAlerts = [
  { id: 1, type: 'critical', title: 'Task Overdue', message: 'Priya Sharma has not completed task "Vaccination Drive" due since 2024-01-15', worker: 'Priya Sharma', timestamp: '2 hours ago', read: false },
  { id: 2, type: 'warning', title: 'Low Performance Score', message: 'Roshni Patel performance score dropped below 80%. Current score: 75%', worker: 'Roshni Patel', timestamp: '4 hours ago', read: false },
  { id: 3, type: 'info', title: 'Task Completed', message: 'Divya Singh has successfully completed "Health Training Program"', worker: 'Divya Singh', timestamp: '6 hours ago', read: true },
  { id: 4, type: 'critical', title: 'Worker Inactive', message: 'Roshni Patel has not logged in for 7 days. Status changed to inactive.', worker: 'Roshni Patel', timestamp: '8 hours ago', read: true },
  { id: 5, type: 'warning', title: 'Multiple Pending Tasks', message: 'Anjali Verma has 5 pending tasks exceeding the normal workload', worker: 'Anjali Verma', timestamp: '1 day ago', read: true },
  { id: 6, type: 'info', title: 'New Worker Added', message: 'New ASHA worker "Neha Gupta" has been registered in the system', worker: 'Neha Gupta', timestamp: '2 days ago', read: true },
];

const Alerts = () => {
  const [alerts, setAlerts] = useState(mockAlerts);
  const [filterType, setFilterType] = useState('all');
  const [filterRead, setFilterRead] = useState('unread');

  const filteredAlerts = alerts.filter(alert => {
    const matchesType = filterType === 'all' || alert.type === filterType;
    const matchesRead = filterRead === 'all' || (filterRead === 'unread' ? !alert.read : alert.read);
    return matchesType && matchesRead;
  });

  const handleMarkAsRead = (id) => {
    setAlerts(alerts.map(alert => 
      alert.id === id ? { ...alert, read: true } : alert
    ));
  };

  const handleDismiss = (id) => {
    setAlerts(alerts.filter(alert => alert.id !== id));
  };

  const getAlertColor = (type) => {
    switch(type) {
      case 'critical': return { bg: 'bg-red-50', border: 'border-red-600', icon: <AlertTriangle size={24} className="text-red-600" />, badge: 'bg-red-100 border-red-600 text-red-800' };
      case 'warning': return { bg: 'bg-yellow-50', border: 'border-yellow-600', icon: <AlertCircle size={24} className="text-yellow-600" />, badge: 'bg-yellow-100 border-yellow-600 text-yellow-800' };
      case 'info': return { bg: 'bg-blue-50', border: 'border-blue-600', icon: <Info size={24} className="text-blue-600" />, badge: 'bg-blue-100 border-blue-600 text-blue-800' };
      default: return { bg: 'bg-gray-50', border: 'border-gray-600', icon: <Bell size={24} className="text-gray-600" />, badge: 'bg-gray-100 border-gray-600 text-gray-800' };
    }
  };

  const criticalCount = alerts.filter(a => a.type === 'critical' && !a.read).length;
  const warningCount = alerts.filter(a => a.type === 'warning' && !a.read).length;
  const infoCount = alerts.filter(a => a.type === 'info' && !a.read).length;

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="border-b-4 border-orange-400 bg-gradient-to-r from-blue-900 to-blue-800 px-6 py-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-orange-400 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">🔔</span>
              </div>
              <div>
                <h1 className="text-3xl font-bold text-white">Alerts & Notifications</h1>
                <p className="text-blue-100 text-sm mt-1">Ministry of Health and Family Welfare, Government of India</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-white text-sm">Unread Alerts</p>
              <p className="text-4xl font-bold text-orange-300">{alerts.filter(a => !a.read).length}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Page Title */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-blue-900 mb-2">System Alerts & Notifications</h2>
          <p className="text-gray-700 mb-4">Monitor critical alerts, warnings, and notifications from the system</p>
          <div className="h-1 w-24 bg-orange-400"></div>
        </div>

        {/* Alert Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="border-2 border-gray-300 bg-white">
            <div className="border-b-4 border-red-600 p-6">
              <p className="text-gray-600 font-semibold text-sm mb-3">Critical Alerts</p>
              <p className="text-5xl font-bold text-red-700">{criticalCount}</p>
              <p className="text-gray-600 text-xs mt-3">Requires immediate action</p>
            </div>
          </div>

          <div className="border-2 border-gray-300 bg-white">
            <div className="border-b-4 border-yellow-600 p-6">
              <p className="text-gray-600 font-semibold text-sm mb-3">Warnings</p>
              <p className="text-5xl font-bold text-yellow-700">{warningCount}</p>
              <p className="text-gray-600 text-xs mt-3">Needs attention</p>
            </div>
          </div>

          <div className="border-2 border-gray-300 bg-white">
            <div className="border-b-4 border-blue-600 p-6">
              <p className="text-gray-600 font-semibold text-sm mb-3">Information</p>
              <p className="text-5xl font-bold text-blue-700">{infoCount}</p>
              <p className="text-gray-600 text-xs mt-3">System notifications</p>
            </div>
          </div>
        </div>

        {/* Filter Section */}
        <div className="border-2 border-gray-300 bg-white mb-8 p-6">
          <h3 className="text-lg font-bold text-blue-900 mb-4">Filter Alerts</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Alert Type</label>
              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-300 focus:border-blue-900 focus:outline-none text-gray-700 bg-white"
              >
                <option value="all">All Alert Types</option>
                <option value="critical">Critical</option>
                <option value="warning">Warning</option>
                <option value="info">Information</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Status</label>
              <select
                value={filterRead}
                onChange={(e) => setFilterRead(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-300 focus:border-blue-900 focus:outline-none text-gray-700 bg-white"
              >
                <option value="all">All</option>
                <option value="unread">Unread Only</option>
                <option value="read">Read Only</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="bg-blue-50 border-l-4 border-blue-900 px-6 py-3 mb-6">
          <p className="text-gray-700 font-semibold">Showing {filteredAlerts.length} alert(s)</p>
        </div>

        {/* Alerts List */}
        {filteredAlerts.length > 0 ? (
          <div className="space-y-4">
            {filteredAlerts.map(alert => {
              const colors = getAlertColor(alert.type);
              return (
                <div 
                  key={alert.id} 
                  className={`border-2 ${colors.border} ${colors.bg} p-6 hover:shadow-lg transition-shadow ${!alert.read ? 'border-l-8' : ''}`}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      {colors.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h4 className="text-lg font-bold text-gray-800">{alert.title}</h4>
                          <span className={`inline-block mt-2 px-3 py-1 text-xs font-bold border-2 ${colors.badge}`}>
                            {alert.type.charAt(0).toUpperCase() + alert.type.slice(1)}
                          </span>
                        </div>
                        {!alert.read && (
                          <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full">NEW</span>
                        )}
                      </div>
                      <p className="text-gray-700 mt-2 mb-3">{alert.message}</p>
                      <div className="flex items-center justify-between text-sm text-gray-600">
                        <div className="flex items-center gap-4">
                          <span className="font-semibold">Worker: <span className="text-gray-800">{alert.worker}</span></span>
                          <div className="flex items-center gap-1">
                            <Clock size={16} />
                            <span>{alert.timestamp}</span>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          {!alert.read && (
                            <button
                              onClick={() => handleMarkAsRead(alert.id)}
                              className="bg-blue-900 hover:bg-blue-800 text-white px-4 py-2 font-semibold transition-colors text-sm"
                            >
                              Mark as Read
                            </button>
                          )}
                          <button
                            onClick={() => handleDismiss(alert.id)}
                            className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 font-semibold transition-colors text-sm flex items-center gap-2"
                          >
                            <X size={16} /> Dismiss
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="border-2 border-gray-300 bg-white p-12 text-center">
            <CheckCircle size={48} className="text-green-600 mx-auto mb-4" />
            <p className="text-gray-600 text-lg font-semibold">No alerts to display</p>
            <p className="text-gray-500 mt-2">All systems are functioning normally</p>
          </div>
        )}

        {/* Footer */}
        <div className="border-t-4 border-orange-400 bg-gray-50 px-6 py-4 text-center text-xs text-gray-600 mt-12">
          <p>© 2024 Ministry of Health and Family Welfare, Government of India | Auto-refresh enabled: Every 5 minutes</p>
        </div>
      </div>
    </div>
  );
};

export default Alerts;