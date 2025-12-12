// Mock Workers Data
export const mockWorkers = [
  {
    id: 1,
    name: 'Priya Sharma',
    email: 'priya.sharma@health.gov.in',
    phone: '9876543210',
    village: 'Nandpur',
    tasksCompleted: 24,
    tasksRemaining: 3,
    status: 'active',
    joinDate: '2023-01-15',
    performance: 92,
    region: 'Northern Region',
    designation: 'ASHA Worker',
    lastLogin: '2024-01-18 10:30 AM',
  },
  {
    id: 2,
    name: 'Anjali Verma',
    email: 'anjali.verma@health.gov.in',
    phone: '9876543211',
    village: 'Mehdpur',
    tasksCompleted: 21,
    tasksRemaining: 5,
    status: 'active',
    joinDate: '2023-02-20',
    performance: 88,
    region: 'Northern Region',
    designation: 'ASHA Worker',
    lastLogin: '2024-01-18 09:15 AM',
  },
  {
    id: 3,
    name: 'Roshni Patel',
    email: 'roshni.patel@health.gov.in',
    phone: '9876543212',
    village: 'Solanpur',
    tasksCompleted: 18,
    tasksRemaining: 8,
    status: 'inactive',
    joinDate: '2023-03-10',
    performance: 75,
    region: 'Central Region',
    designation: 'ASHA Worker',
    lastLogin: '2024-01-10 02:30 PM',
  },
  {
    id: 4,
    name: 'Divya Singh',
    email: 'divya.singh@health.gov.in',
    phone: '9876543213',
    village: 'Heerapur',
    tasksCompleted: 28,
    tasksRemaining: 1,
    status: 'active',
    joinDate: '2022-12-05',
    performance: 96,
    region: 'Northern Region',
    designation: 'Senior ASHA Worker',
    lastLogin: '2024-01-18 11:00 AM',
  },
  {
    id: 5,
    name: 'Kavya Desai',
    email: 'kavya.desai@health.gov.in',
    phone: '9876543214',
    village: 'Bhimpura',
    tasksCompleted: 19,
    tasksRemaining: 6,
    status: 'active',
    joinDate: '2023-04-18',
    performance: 85,
    region: 'Southern Region',
    designation: 'ASHA Worker',
    lastLogin: '2024-01-18 08:45 AM',
  },
];

// Mock Tasks Data
export const mockTasks = [
  {
    id: 1,
    title: 'Vaccination Drive - Village A',
    assignedTo: 'Priya Sharma',
    dueDate: '2024-01-20',
    status: 'completed',
    priority: 'high',
    description: 'Complete immunization drive for children aged 0-5 years',
    createdDate: '2024-01-15',
    completedDate: '2024-01-18',
  },
  {
    id: 2,
    title: 'Health Awareness Camp',
    assignedTo: 'Anjali Verma',
    dueDate: '2024-01-22',
    status: 'pending',
    priority: 'high',
    description: 'Conduct awareness session on maternal health',
    createdDate: '2024-01-16',
  },
  {
    id: 3,
    title: 'Community Survey',
    assignedTo: 'Roshni Patel',
    dueDate: '2024-01-25',
    status: 'in-progress',
    priority: 'medium',
    description: 'Health survey of 50 households',
    createdDate: '2024-01-12',
  },
  {
    id: 4,
    title: 'Training Program',
    assignedTo: 'Divya Singh',
    dueDate: '2024-01-28',
    status: 'pending',
    priority: 'high',
    description: 'Conduct training on new health protocols',
    createdDate: '2024-01-14',
  },
  {
    id: 5,
    title: 'Health Records Update',
    assignedTo: 'Kavya Desai',
    dueDate: '2024-02-01',
    status: 'in-progress',
    priority: 'medium',
    description: 'Update health records in digital system',
    createdDate: '2024-01-17',
  },
  {
    id: 6,
    title: 'Antenatal Care Camp',
    assignedTo: 'Priya Sharma',
    dueDate: '2024-02-05',
    status: 'pending',
    priority: 'high',
    description: 'Organize antenatal care camp for pregnant women',
    createdDate: '2024-01-18',
  },
];

// Mock Alerts Data
export const mockAlerts = [
  {
    id: 1,
    type: 'critical',
    title: 'Task Overdue',
    message: 'Priya Sharma has not completed task "Vaccination Drive" due since 2024-01-15',
    worker: 'Priya Sharma',
    timestamp: '2 hours ago',
    read: false,
    date: '2024-01-18',
  },
  {
    id: 2,
    type: 'warning',
    title: 'Low Performance Score',
    message: 'Roshni Patel performance score dropped below 80%. Current score: 75%',
    worker: 'Roshni Patel',
    timestamp: '4 hours ago',
    read: false,
    date: '2024-01-18',
  },
  {
    id: 3,
    type: 'info',
    title: 'Task Completed',
    message: 'Divya Singh has successfully completed "Health Training Program"',
    worker: 'Divya Singh',
    timestamp: '6 hours ago',
    read: true,
    date: '2024-01-18',
  },
  {
    id: 4,
    type: 'critical',
    title: 'Worker Inactive',
    message: 'Roshni Patel has not logged in for 7 days. Status changed to inactive.',
    worker: 'Roshni Patel',
    timestamp: '8 hours ago',
    read: true,
    date: '2024-01-17',
  },
  {
    id: 5,
    type: 'warning',
    title: 'Multiple Pending Tasks',
    message: 'Anjali Verma has 5 pending tasks exceeding the normal workload',
    worker: 'Anjali Verma',
    timestamp: '1 day ago',
    read: true,
    date: '2024-01-17',
  },
  {
    id: 6,
    type: 'info',
    title: 'New Worker Added',
    message: 'New ASHA worker "Neha Gupta" has been registered in the system',
    worker: 'Neha Gupta',
    timestamp: '2 days ago',
    read: true,
    date: '2024-01-16',
  },
];

// Dashboard Chart Data
export const dashboardChartData = [
  { month: 'Jan', completed: 45, pending: 8 },
  { month: 'Feb', completed: 52, pending: 12 },
  { month: 'Mar', completed: 48, pending: 10 },
  { month: 'Apr', completed: 61, pending: 7 },
  { month: 'May', completed: 58, pending: 9 },
  { month: 'Jun', completed: 70, pending: 5 },
];

// Worker Performance Data
export const performanceData = [
  { name: 'Priya', performance: 92 },
  { name: 'Anjali', performance: 88 },
  { name: 'Roshni', performance: 75 },
  { name: 'Divya', performance: 96 },
  { name: 'Kavya', performance: 85 },
];

// Individual Worker Chart Data
export const workerChartData = [
  { month: 'Jan', completed: 4 },
  { month: 'Feb', completed: 5 },
  { month: 'Mar', completed: 4 },
  { month: 'Apr', completed: 6 },
  { month: 'May', completed: 5 },
  { month: 'Jun', completed: 7 },
];

// Mock User Profile Data
export const userProfileData = {
  firstName: 'Ram',
  lastName: 'Kumar',
  email: 'ram.kumar@health.gov.in',
  phone: '+91 9876543210',
  designation: 'Senior ASHA Supervisor',
  region: 'Northern Region - State A',
  officeLocation: 'District Health Office, Delhi',
  joinDate: '2020-06-15',
  lastLogin: '2024-01-18 10:30 AM',
};

// Notification Preferences Default
export const defaultNotificationSettings = {
  emailAlerts: true,
  smsAlerts: true,
  pushNotifications: true,
  dailyDigest: true,
  taskReminders: true,
  performanceUpdates: true,
};

// Security Settings Default
export const defaultSecuritySettings = {
  twoFactorAuth: false,
  sessionTimeout: '30',
  loginAlerts: true,
  ipWhitelisting: false,
};

// System Settings Default
export const defaultSystemSettings = {
  theme: 'light',
  language: 'english',
  dateFormat: 'dd/mm/yyyy',
  timezone: 'IST (UTC+5:30)',
  autoRefresh: true,
  refreshInterval: '5',
};

// Dashboard Summary Stats
export const dashboardSummary = {
  totalWorkers: 5,
  activeWorkers: 4,
  totalTasksCompleted: 110,
  totalTasksPending: 28,
  averagePerformance: 89,
  completionRate: 80,
};

// Recent Activities Mock Data
export const recentActivities = [
  {
    id: 1,
    activity: 'Task completed by Priya Sharma in Nandpur village',
    type: 'completed',
    timestamp: '2 hours ago',
  },
  {
    id: 2,
    activity: 'New task assigned to Anjali Verma in Mehdpur',
    type: 'assigned',
    timestamp: '5 hours ago',
  },
  {
    id: 3,
    activity: 'Alert: Roshni Patel has pending tasks',
    type: 'alert',
    timestamp: '8 hours ago',
  },
  {
    id: 4,
    activity: 'Task completed by Divya Singh in Heerapur',
    type: 'completed',
    timestamp: '1 day ago',
  },
  {
    id: 5,
    activity: 'Worker Kavya Desai performance reviewed',
    type: 'review',
    timestamp: '2 days ago',
  },
];

// Recent Completed Tasks
export const recentCompletedTasks = [
  { task: 'Health Campaign - Vaccination Drive', date: '3 days ago' },
  { task: 'Community Awareness Program', date: '5 days ago' },
  { task: 'Health Check-up Camp', date: '7 days ago' },
  { task: 'Maternal Health Training', date: '10 days ago' },
];

// Activity Log
export const activityLog = [
  { activity: 'Task marked as completed', time: '2 hours ago' },
  { activity: 'New task assigned to worker', time: '5 hours ago' },
  { activity: 'Performance review conducted', time: '1 day ago' },
  { activity: 'Training session attended', time: '2 days ago' },
];