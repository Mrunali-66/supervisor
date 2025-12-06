import React, { useState } from 'react';
import { Eye, EyeOff, Mail, Lock, User, Phone, MapPin, CheckCircle, AlertCircle, ChevronRight } from 'lucide-react';

export default function Login({ setIsAuthenticated }) {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });
  
  const [registerData, setRegisterData] = useState({
    fullName: '',
    email: '',
    phone: '',
    area: '',
    password: '',
    confirmPassword: ''
  });
  
  const [errors, setErrors] = useState({});

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleRegisterChange = (e) => {
    const { name, value } = e.target;
    setRegisterData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateLogin = () => {
    const newErrors = {};
    
    if (!loginData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(loginData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!loginData.password) {
      newErrors.password = 'Password is required';
    } else if (loginData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    return newErrors;
  };

  const validateRegister = () => {
    const newErrors = {};
    
    if (!registerData.fullName) {
      newErrors.fullName = 'Full name is required';
    } else if (registerData.fullName.length < 3) {
      newErrors.fullName = 'Name must be at least 3 characters';
    }
    
    if (!registerData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(registerData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!registerData.phone) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[0-9]{10}$/.test(registerData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Phone number must be 10 digits';
    }
    
    if (!registerData.area) {
      newErrors.area = 'Area is required';
    }
    
    if (!registerData.password) {
      newErrors.password = 'Password is required';
    } else if (registerData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    if (!registerData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (registerData.password !== registerData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    return newErrors;
  };

  const handleLoginSubmit = () => {
    const newErrors = validateLogin();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setIsLoading(true);
    setSuccessMessage('');
    
    setTimeout(() => {
      setIsLoading(false);
      setSuccessMessage('Login successful! Redirecting to dashboard...');
      console.log('Login:', loginData);
      
      setTimeout(() => {
        setLoginData({ email: '', password: '' });
        setSuccessMessage('');
        setIsAuthenticated(true);
      }, 1500);
    }, 1000);
  };

  const handleRegisterSubmit = () => {
    const newErrors = validateRegister();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setIsLoading(true);
    setSuccessMessage('');
    
    setTimeout(() => {
      setIsLoading(false);
      setSuccessMessage('Registration successful! You can now login.');
      console.log('Register:', registerData);
      
      setTimeout(() => {
        setRegisterData({
          fullName: '',
          email: '',
          phone: '',
          area: '',
          password: '',
          confirmPassword: ''
        });
        setSuccessMessage('');
        setShowRegister(false);
        setShowLogin(true);
      }, 1500);
    }, 1000);
  };

  const goToRegister = () => {
    setShowLogin(false);
    setShowRegister(true);
    setErrors({});
    setSuccessMessage('');
  };

  const goToLogin = () => {
    setShowRegister(false);
    setShowLogin(true);
    setErrors({});
    setSuccessMessage('');
  };

  const goBack = () => {
    setShowLogin(false);
    setShowRegister(false);
    setErrors({});
    setSuccessMessage('');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Government Header */}
      <div className="border-b-4 border-orange-500 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">🔍</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold">ASHA Worker Supervision System</h1>
              <p className="text-blue-100 text-sm">Ministry of Health and Family Welfare, Government of India</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="min-h-screen flex items-center justify-center px-4 py-8 bg-gray-50">
        <div className="w-full max-w-2xl">
          
          {/* Success Message */}
          {successMessage && (
            <div className="mb-6 bg-green-50 border-l-4 border-green-600 px-6 py-4 flex items-center gap-3 rounded-none">
              <CheckCircle className="h-6 w-6 text-green-600" />
              <span className="text-green-800 font-semibold">{successMessage}</span>
            </div>
          )}

          {/* Initial Choice Screen */}
          {!showLogin && !showRegister && (
            <div className="bg-white border-2 border-gray-300 shadow-lg p-12">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-blue-900 mb-3">Welcome</h2>
                <p className="text-gray-600 text-lg">to ASHA Worker Supervision System</p>
                <div className="h-1 w-24 bg-orange-500 mx-auto mt-4"></div>
              </div>

              <div className="space-y-6">
                <div>
                  <p className="text-center text-gray-700 mb-8 text-lg">Please choose an option to continue:</p>
                </div>

                <button
                  onClick={() => setShowLogin(true)}
                  className="w-full bg-blue-900 hover:bg-blue-800 text-white py-6 font-bold text-xl transition-all border-b-4 border-blue-950 flex items-center justify-between px-8"
                >
                  <span>Existing User? Login</span>
                  <ChevronRight size={28} />
                </button>

                <button
                  onClick={() => setShowRegister(true)}
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-6 font-bold text-xl transition-all border-b-4 border-green-800 flex items-center justify-between px-8"
                >
                  <span>New User? Register</span>
                  <ChevronRight size={28} />
                </button>

                <div className="mt-8 p-6 bg-blue-50 border-l-4 border-blue-900">
                  <p className="text-sm text-gray-700">
                    <span className="font-bold text-blue-900">Note:</span> If you already have a login account, please use the Login option. If you are new to the system, please Register first.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Login Form */}
          {showLogin && (
            <div className="bg-white border-2 border-gray-300 shadow-lg">
              <div className="bg-blue-50 border-b-2 border-gray-300 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-3xl font-bold text-blue-900 mb-2">Welcome Back</h2>
                    <p className="text-gray-600 text-sm">Sign in to access the ASHA supervision system</p>
                  </div>
                </div>
              </div>

              <div className="p-8 space-y-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Email Address <span className="text-red-600">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-4 h-5 w-5 text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      value={loginData.email}
                      onChange={handleLoginChange}
                      className={`w-full pl-12 pr-4 py-3 border-2 ${
                        errors.email ? 'border-red-600' : 'border-gray-300'
                      } focus:border-blue-900 focus:outline-none transition bg-white`}
                      placeholder="supervisor@health.gov.in"
                    />
                  </div>
                  {errors.email && (
                    <div className="flex items-center mt-2 text-red-600 text-sm">
                      <AlertCircle className="h-4 w-4 mr-2" />
                      {errors.email}
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Password <span className="text-red-600">*</span>
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-4 h-5 w-5 text-gray-400" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      value={loginData.password}
                      onChange={handleLoginChange}
                      className={`w-full pl-12 pr-12 py-3 border-2 ${
                        errors.password ? 'border-red-600' : 'border-gray-300'
                      } focus:border-blue-900 focus:outline-none transition bg-white`}
                      placeholder="••••••••"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                  {errors.password && (
                    <div className="flex items-center mt-2 text-red-600 text-sm">
                      <AlertCircle className="h-4 w-4 mr-2" />
                      {errors.password}
                    </div>
                  )}
                </div>

                <div className="flex items-center justify-between">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="w-5 h-5 border-2 border-gray-300 focus:border-blue-900"
                    />
                    <span className="ml-2 text-sm text-gray-700 font-medium">Remember me</span>
                  </label>
                  <button type="button" className="text-sm text-blue-900 hover:text-blue-700 font-bold">
                    Forgot Password?
                  </button>
                </div>

                <button
                  onClick={handleLoginSubmit}
                  disabled={isLoading}
                  className="w-full bg-blue-900 hover:bg-blue-800 text-white py-4 font-bold text-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed border-b-4 border-blue-950"
                >
                  {isLoading ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Signing In...
                    </span>
                  ) : (
                    'Sign In'
                  )}
                </button>

                <div className="flex gap-4">
                  <button
                    onClick={goBack}
                    className="flex-1 bg-gray-400 hover:bg-gray-500 text-white py-3 font-bold transition-all border-b-4 border-gray-600"
                  >
                    Back
                  </button>
                  <button
                    onClick={goToRegister}
                    className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 font-bold transition-all border-b-4 border-green-800"
                  >
                    Create Account
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Register Form */}
          {showRegister && (
            <div className="bg-white border-2 border-gray-300 shadow-lg">
              <div className="bg-blue-50 border-b-2 border-gray-300 p-6">
                <h2 className="text-3xl font-bold text-blue-900 mb-2">Create Account</h2>
                <p className="text-gray-600 text-sm">Join the ASHA supervisor network</p>
              </div>

              <div className="p-8 space-y-4">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Full Name <span className="text-red-600">*</span>
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-4 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      name="fullName"
                      value={registerData.fullName}
                      onChange={handleRegisterChange}
                      className={`w-full pl-12 pr-4 py-3 border-2 ${
                        errors.fullName ? 'border-red-600' : 'border-gray-300'
                      } focus:border-blue-900 focus:outline-none transition bg-white`}
                      placeholder="Priya Sharma"
                    />
                  </div>
                  {errors.fullName && (
                    <div className="flex items-center mt-2 text-red-600 text-sm">
                      <AlertCircle className="h-4 w-4 mr-2" />
                      {errors.fullName}
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Email Address <span className="text-red-600">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-4 h-5 w-5 text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      value={registerData.email}
                      onChange={handleRegisterChange}
                      className={`w-full pl-12 pr-4 py-3 border-2 ${
                        errors.email ? 'border-red-600' : 'border-gray-300'
                      } focus:border-blue-900 focus:outline-none transition bg-white`}
                      placeholder="priya@health.gov.in"
                    />
                  </div>
                  {errors.email && (
                    <div className="flex items-center mt-2 text-red-600 text-sm">
                      <AlertCircle className="h-4 w-4 mr-2" />
                      {errors.email}
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Phone Number <span className="text-red-600">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-4 h-5 w-5 text-gray-400" />
                    <input
                      type="tel"
                      name="phone"
                      value={registerData.phone}
                      onChange={handleRegisterChange}
                      className={`w-full pl-12 pr-4 py-3 border-2 ${
                        errors.phone ? 'border-red-600' : 'border-gray-300'
                      } focus:border-blue-900 focus:outline-none transition bg-white`}
                      placeholder="9876543210"
                    />
                  </div>
                  {errors.phone && (
                    <div className="flex items-center mt-2 text-red-600 text-sm">
                      <AlertCircle className="h-4 w-4 mr-2" />
                      {errors.phone}
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Area/Zone <span className="text-red-600">*</span>
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-4 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      name="area"
                      value={registerData.area}
                      onChange={handleRegisterChange}
                      className={`w-full pl-12 pr-4 py-3 border-2 ${
                        errors.area ? 'border-red-600' : 'border-gray-300'
                      } focus:border-blue-900 focus:outline-none transition bg-white`}
                      placeholder="Zone A"
                    />
                  </div>
                  {errors.area && (
                    <div className="flex items-center mt-2 text-red-600 text-sm">
                      <AlertCircle className="h-4 w-4 mr-2" />
                      {errors.area}
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Password <span className="text-red-600">*</span>
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-4 h-5 w-5 text-gray-400" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      value={registerData.password}
                      onChange={handleRegisterChange}
                      className={`w-full pl-12 pr-12 py-3 border-2 ${
                        errors.password ? 'border-red-600' : 'border-gray-300'
                      } focus:border-blue-900 focus:outline-none transition bg-white`}
                      placeholder="••••••••"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                  {errors.password && (
                    <div className="flex items-center mt-2 text-red-600 text-sm">
                      <AlertCircle className="h-4 w-4 mr-2" />
                      {errors.password}
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Confirm Password <span className="text-red-600">*</span>
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-4 h-5 w-5 text-gray-400" />
                    <input
                      type={showConfirmPassword ? 'text' : 'password'}
                      name="confirmPassword"
                      value={registerData.confirmPassword}
                      onChange={handleRegisterChange}
                      className={`w-full pl-12 pr-12 py-3 border-2 ${
                        errors.confirmPassword ? 'border-red-600' : 'border-gray-300'
                      } focus:border-blue-900 focus:outline-none transition bg-white`}
                      placeholder="••••••••"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
                    >
                      {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                  {errors.confirmPassword && (
                    <div className="flex items-center mt-2 text-red-600 text-sm">
                      <AlertCircle className="h-4 w-4 mr-2" />
                      {errors.confirmPassword}
                    </div>
                  )}
                </div>

                <button
                  onClick={handleRegisterSubmit}
                  disabled={isLoading}
                  className="w-full bg-blue-900 hover:bg-blue-800 text-white py-4 font-bold text-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed border-b-4 border-blue-950"
                >
                  {isLoading ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Creating Account...
                    </span>
                  ) : (
                    'Create Account'
                  )}
                </button>

                <p className="text-xs text-center text-gray-600 py-3">
                  By registering, you agree to our Terms of Service and Privacy Policy
                </p>

                <div className="flex gap-4">
                  <button
                    onClick={goBack}
                    className="flex-1 bg-gray-400 hover:bg-gray-500 text-white py-3 font-bold transition-all border-b-4 border-gray-600"
                  >
                    Back
                  </button>
                  <button
                    onClick={goToLogin}
                    className="flex-1 bg-blue-900 hover:bg-blue-800 text-white py-3 font-bold transition-all border-b-4 border-blue-950"
                  >
                    Already Have Account?
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Footer */}
          <div className="border-t-4 border-orange-500 bg-gray-50 px-6 py-4 text-center mt-8">
            <p className="text-sm text-gray-700 font-semibold">
              © 2024 Ministry of Health and Family Welfare, Government of India
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}