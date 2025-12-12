import React, { useState } from 'react';
import { AlertTriangle, AlertCircle, Info, CheckCircle, Bell, X, Clock } from 'lucide-react';
import { useAppContext } from '../App';

const mockAlerts = [
  { id: 1, type: 'critical', title: 'Task Overdue', titleMr: 'कार्य मुदत संपली', message: 'Priya Sharma has not completed task "Vaccination Drive" due since 2024-01-15', messageMr: 'प्रिया शर्मा यांनी 2024-01-15 पासून "लसीकरण अभियान" कार्य पूर्ण केलेले नाही', worker: 'प्रिया शर्मा', timestamp: '2 hours ago', timestampMr: '2 तास पूर्वी', read: false },
  { id: 2, type: 'warning', title: 'Low Performance Score', titleMr: 'कमी कार्यक्षमता स्कोर', message: 'Roshni Patel performance score dropped below 80%. Current score: 75%', messageMr: 'रोशनी पटेल यांचा कार्यक्षमता स्कोर 80% खाली खचला आहे. वर्तमान स्कोर: 75%', worker: 'रोशनी पटेल', timestamp: '4 hours ago', timestampMr: '4 तास पूर्वी', read: false },
  { id: 3, type: 'info', title: 'Task Completed', titleMr: 'कार्य पूर्ण', message: 'Divya Singh has successfully completed "Health Training Program"', messageMr: 'दिव्या सिंह यांनी "आरोग्य प्रशिक्षण कार्यक्रम" यशस्वीरित्या पूर्ण केले', worker: 'दिव्या सिंह', timestamp: '6 hours ago', timestampMr: '6 तास पूर्वी', read: true },
  { id: 4, type: 'critical', title: 'Worker Inactive', titleMr: 'कार्यकर्ता निष्क्रिय', message: 'Roshni Patel has not logged in for 7 days. Status changed to inactive.', messageMr: 'रोशनी पटेल यांनी 7 दिवसांपासून लॉगिन केलेले नाही. स्थिती निष्क्रिय मध्ये बदलली.', worker: 'रोशनी पटेल', timestamp: '8 hours ago', timestampMr: '8 तास पूर्वी', read: true },
  { id: 5, type: 'warning', title: 'Multiple Pending Tasks', titleMr: 'एकाधिक प्रलंबित कार्ये', message: 'Anjali Verma has 5 pending tasks exceeding the normal workload', messageMr: 'अंजली वर्मा यांच्याकडे सामान्य कामाचा भार ओलांडणारी 5 प्रलंबित कार्ये आहेत', worker: 'अंजली वर्मा', timestamp: '1 day ago', timestampMr: '1 दिन पूर्वी', read: true },
  { id: 6, type: 'info', title: 'New Worker Added', titleMr: 'नवीन कार्यकर्ता जोडला', message: 'New ASHA worker "Neha Gupta" has been registered in the system', messageMr: 'नवीन आशा कार्यकर्ता "नेहा गुप्ता" यांना प्रणालीमध्ये नोंदणीकृत केले गेले आहे', worker: 'नेहा गुप्ता', timestamp: '2 days ago', timestampMr: '2 दिवस पूर्वी', read: true },
];

const Alerts = () => {
  const { lang, isDark } = useAppContext();
  const [alerts, setAlerts] = useState(mockAlerts);
  const [filterType, setFilterType] = useState('all');
  const [filterRead, setFilterRead] = useState('unread');

  const translations = {
    en: {
      systemAlerts: 'System Alerts & Notifications',
      monitorAlerts: 'Monitor critical alerts, warnings, and notifications from the system',
      unreadAlerts: 'Unread Alerts',
      alertStatistics: 'Alert Statistics',
      criticalAlerts: 'Critical Alerts',
      requiresImmediate: 'Requires immediate action',
      warnings: 'Warnings',
      needsAttention: 'Needs attention',
      information: 'Information',
      systemNotifications: 'System notifications',
      filterAlerts: 'Filter Alerts',
      alertType: 'Alert Type',
      allAlertTypes: 'All Alert Types',
      critical: 'Critical',
      warning: 'Warning',
      info: 'Information',
      status: 'Status',
      all: 'All',
      unreadOnly: 'Unread Only',
      readOnly: 'Read Only',
      showing: 'Showing',
      alert: 'alert(s)',
      noAlerts: 'No alerts to display',
      allSystemsNormal: 'All systems are functioning normally',
      markAsRead: 'Mark as Read',
      dismiss: 'Dismiss',
      new: 'NEW',
      worker: 'Worker:',
    },
    mr: {
      systemAlerts: 'प्रणाली सूचना आणि अधिसूचना',
      monitorAlerts: 'प्रणालीतून गंभीर सूचना, चेतावणी आणि अधिसूचना निरीक्षण करा',
      unreadAlerts: 'अपठित सूचना',
      alertStatistics: 'सूचना सांख्यिकी',
      criticalAlerts: 'गंभीर सूचना',
      requiresImmediate: 'तातकाल कारवाई आवश्यक',
      warnings: 'चेतावणी',
      needsAttention: 'लक्ष आवश्यक',
      information: 'माहिती',
      systemNotifications: 'प्रणाली अधिसूचना',
      filterAlerts: 'सूचना फिल्टर करा',
      alertType: 'सूचना प्रकार',
      allAlertTypes: 'सर्व सूचना प्रकार',
      critical: 'गंभीर',
      warning: 'चेतावणी',
      info: 'माहिती',
      status: 'स्थिती',
      all: 'सर्व',
      unreadOnly: 'फक्त अपठित',
      readOnly: 'फक्त वाचले गेले',
      showing: 'दाखवत आहे',
      alert: 'सूचना',
      noAlerts: 'दाखवण्यासाठी कोणतीही सूचना नाही',
      allSystemsNormal: 'सर्व प्रणाली सामान्यरित्या कार्य करत आहेत',
      markAsRead: 'वाचले म्हणून चिन्हांकित करा',
      dismiss: 'रद्द करा',
      new: 'नवीन',
      worker: 'कार्यकर्ता:',
    }
  };

  const t = (key) => translations[lang]?.[key] || key;

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
    const colors = {
      critical: {
        light: { bg: 'bg-red-50', border: 'border-red-600', icon: 'text-red-600', badge: 'bg-red-100 border-red-600 text-red-800' },
        dark: { bg: 'bg-red-900 bg-opacity-20', border: 'border-red-500', icon: 'text-red-400', badge: 'bg-red-900 border-red-500 text-red-100' }
      },
      warning: {
        light: { bg: 'bg-yellow-50', border: 'border-yellow-600', icon: 'text-yellow-600', badge: 'bg-yellow-100 border-yellow-600 text-yellow-800' },
        dark: { bg: 'bg-yellow-900 bg-opacity-20', border: 'border-yellow-500', icon: 'text-yellow-400', badge: 'bg-yellow-900 border-yellow-500 text-yellow-100' }
      },
      info: {
        light: { bg: 'bg-blue-50', border: 'border-blue-600', icon: 'text-blue-600', badge: 'bg-blue-100 border-blue-600 text-blue-800' },
        dark: { bg: 'bg-blue-900 bg-opacity-20', border: 'border-blue-500', icon: 'text-blue-400', badge: 'bg-blue-900 border-blue-500 text-blue-100' }
      }
    };
    return colors[type] ? (isDark ? colors[type].dark : colors[type].light) : (isDark ? colors.info.dark : colors.info.light);
  };

  const getAlertIcon = (type) => {
    const iconColor = isDark ? 'text-gray-400' : 'text-gray-600';
    const colors = getAlertColor(type);
    switch(type) {
      case 'critical': return <AlertTriangle size={24} className={colors.icon} />;
      case 'warning': return <AlertCircle size={24} className={colors.icon} />;
      case 'info': return <Info size={24} className={colors.icon} />;
      default: return <Bell size={24} className={iconColor} />;
    }
  };

  const criticalCount = alerts.filter(a => a.type === 'critical' && !a.read).length;
  const warningCount = alerts.filter(a => a.type === 'warning' && !a.read).length;
  const infoCount = alerts.filter(a => a.type === 'info' && !a.read).length;

  return (
    <div className={`min-h-screen ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="p-8">
        {/* Page Title */}
        <div className="mb-8">
          <h2 className={`text-3xl font-bold mb-2 ${isDark ? 'text-orange-400' : 'text-blue-900'}`}>{t('systemAlerts')}</h2>
          <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'} mb-4`}>{t('monitorAlerts')}</p>
          <div className="h-1 w-32 bg-orange-400"></div>
        </div>

        {/* Alert Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className={`border-2 ${isDark ? 'border-gray-700 bg-gray-800' : 'border-gray-300 bg-white'} shadow-md hover:shadow-lg transition-shadow`}>
            <div className={`border-b-4 ${isDark ? 'border-red-500 bg-gray-700' : 'border-red-600 bg-red-50'} p-6`}>
              <p className={`font-semibold text-sm mb-3 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{t('criticalAlerts')}</p>
              <p className={`text-5xl font-bold ${isDark ? 'text-red-400' : 'text-red-700'}`}>{criticalCount}</p>
              <p className={`text-xs mt-3 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{t('requiresImmediate')}</p>
            </div>
          </div>

          <div className={`border-2 ${isDark ? 'border-gray-700 bg-gray-800' : 'border-gray-300 bg-white'} shadow-md hover:shadow-lg transition-shadow`}>
            <div className={`border-b-4 ${isDark ? 'border-yellow-500 bg-gray-700' : 'border-yellow-600 bg-yellow-50'} p-6`}>
              <p className={`font-semibold text-sm mb-3 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{t('warnings')}</p>
              <p className={`text-5xl font-bold ${isDark ? 'text-yellow-400' : 'text-yellow-700'}`}>{warningCount}</p>
              <p className={`text-xs mt-3 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{t('needsAttention')}</p>
            </div>
          </div>

          <div className={`border-2 ${isDark ? 'border-gray-700 bg-gray-800' : 'border-gray-300 bg-white'} shadow-md hover:shadow-lg transition-shadow`}>
            <div className={`border-b-4 ${isDark ? 'border-blue-500 bg-gray-700' : 'border-blue-600 bg-blue-50'} p-6`}>
              <p className={`font-semibold text-sm mb-3 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{t('information')}</p>
              <p className={`text-5xl font-bold ${isDark ? 'text-blue-400' : 'text-blue-700'}`}>{infoCount}</p>
              <p className={`text-xs mt-3 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{t('systemNotifications')}</p>
            </div>
          </div>
        </div>

        {/* Filter Section */}
        <div className={`border-2 ${isDark ? 'border-gray-700 bg-gray-800' : 'border-gray-300 bg-white'} mb-8 p-6 shadow-md`}>
          <h3 className={`text-lg font-bold mb-4 ${isDark ? 'text-orange-400' : 'text-blue-900'}`}>{t('filterAlerts')}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className={`block text-sm font-semibold mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{t('alertType')}</label>
              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                className={`w-full px-4 py-3 border-2 focus:outline-none ${isDark ? 'bg-gray-700 border-gray-600 focus:border-orange-500 text-white' : 'bg-white border-gray-300 focus:border-blue-900'}`}
              >
                <option value="all">{t('allAlertTypes')}</option>
                <option value="critical">{t('critical')}</option>
                <option value="warning">{t('warning')}</option>
                <option value="info">{t('info')}</option>
              </select>
            </div>
            <div>
              <label className={`block text-sm font-semibold mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{t('status')}</label>
              <select
                value={filterRead}
                onChange={(e) => setFilterRead(e.target.value)}
                className={`w-full px-4 py-3 border-2 focus:outline-none ${isDark ? 'bg-gray-700 border-gray-600 focus:border-orange-500 text-white' : 'bg-white border-gray-300 focus:border-blue-900'}`}
              >
                <option value="all">{t('all')}</option>
                <option value="unread">{t('unreadOnly')}</option>
                <option value="read">{t('readOnly')}</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className={`border-l-4 px-6 py-3 mb-6 ${isDark ? 'border-orange-500 bg-gray-800' : 'border-blue-900 bg-blue-50'}`}>
          <p className={`font-semibold ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>{t('showing')} {filteredAlerts.length} {t('alert')}</p>
        </div>

        {/* Alerts List */}
        {filteredAlerts.length > 0 ? (
          <div className="space-y-4">
            {filteredAlerts.map(alert => {
              const colors = getAlertColor(alert.type);
              return (
                <div 
                  key={alert.id} 
                  className={`border-2 ${colors.border} ${colors.bg} p-6 hover:shadow-lg transition-shadow ${isDark ? 'bg-gray-800' : ''} ${!alert.read ? 'border-l-8' : ''}`}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 pt-1">
                      {getAlertIcon(alert.type)}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h4 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-gray-800'}`}>{lang === 'en' ? alert.title : alert.titleMr}</h4>
                          <span className={`inline-block mt-2 px-3 py-1 text-xs font-bold border-2 ${colors.badge}`}>
                            {alert.type === 'critical' ? t('critical') : alert.type === 'warning' ? t('warning') : t('info')}
                          </span>
                        </div>
                        {!alert.read && (
                          <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full whitespace-nowrap ml-4">{t('new')}</span>
                        )}
                      </div>
                      <p className={`mt-2 mb-3 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{lang === 'en' ? alert.message : alert.messageMr}</p>
                      <div className={`flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        <div className="flex flex-col gap-2">
                          <span className={`font-semibold ${isDark ? 'text-gray-300' : ''}`}>{t('worker')} <span className={isDark ? 'text-gray-200' : 'text-gray-800'}>{alert.worker}</span></span>
                          <div className="flex items-center gap-1">
                            <Clock size={16} />
                            <span>{lang === 'en' ? alert.timestamp : alert.timestampMr}</span>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          {!alert.read && (
                            <button
                              onClick={() => handleMarkAsRead(alert.id)}
                              className={`${isDark ? 'bg-orange-600 hover:bg-orange-700' : 'bg-blue-900 hover:bg-blue-800'} text-white px-4 py-2 font-semibold transition-colors text-sm whitespace-nowrap`}
                            >
                              {t('markAsRead')}
                            </button>
                          )}
                          <button
                            onClick={() => handleDismiss(alert.id)}
                            className={`${isDark ? 'bg-gray-700 hover:bg-gray-600 text-gray-300' : 'bg-gray-300 hover:bg-gray-400 text-gray-800'} px-4 py-2 font-semibold transition-colors text-sm flex items-center gap-2 whitespace-nowrap`}
                          >
                            <X size={16} /> {t('dismiss')}
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
          <div className={`border-2 ${isDark ? 'border-gray-700 bg-gray-800' : 'border-gray-300 bg-white'} p-12 text-center shadow-md`}>
            <CheckCircle size={48} className={isDark ? 'text-green-400' : 'text-green-600'} style={{ margin: '0 auto 1rem' }} />
            <p className={`text-lg font-semibold ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{t('noAlerts')}</p>
            <p className={isDark ? 'text-gray-400' : 'text-gray-500'}>{t('allSystemsNormal')}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Alerts;