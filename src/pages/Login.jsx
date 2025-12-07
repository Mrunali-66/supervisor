import React, { useState } from 'react';
import { Eye, EyeOff, Mail, Lock, User, Phone, MapPin, CheckCircle, AlertCircle, ChevronRight, Globe } from 'lucide-react';

export default function Login({ setIsAuthenticated = () => {} }) {
  const [lang, setLang] = useState('en');
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [registerData, setRegisterData] = useState({
    fullName: '', email: '', phone: '', area: '', password: '', confirmPassword: ''
  });
  const [errors, setErrors] = useState({});

  const translations = {
    en: {
      appTitle: 'ASHA Worker Supervision System',
      appSubtitle: 'Ministry of Health and Family Welfare, Government of India',
      welcome: 'Welcome',
      welcomeSubtitle: 'to ASHA Worker Supervision System',
      chooseOption: 'Please choose an option to continue:',
      existingUser: 'Existing User? Login',
      newUser: 'New User? Register',
      note: 'Note:',
      noteText: 'If you already have a login account, please use the Login option. If you are new to the system, please Register first.',
      welcomeBack: 'Welcome Back',
      signInMessage: 'Sign in to access the ASHA supervision system',
      emailAddress: 'Email Address',
      password: 'Password',
      rememberMe: 'Remember me',
      forgotPassword: 'Forgot Password?',
      signIn: 'Sign In',
      signingIn: 'Signing In...',
      back: 'Back',
      createAccount: 'Create Account',
      createAccountTitle: 'Create Account',
      joinNetwork: 'Join the ASHA supervisor network',
      fullName: 'Full Name',
      phone: 'Phone Number',
      area: 'Area/Zone',
      confirmPassword: 'Confirm Password',
      creatingAccount: 'Creating Account...',
      terms: 'By registering, you agree to our Terms of Service and Privacy Policy',
      alreadyHave: 'Already Have Account?',
      emailPlaceholder: 'supervisor@health.gov.in',
      namePlaceholder: 'Priya Sharma',
      emailRegPlaceholder: 'priya@health.gov.in',
      phonePlaceholder: '9876543210',
      areaPlaceholder: 'Zone A',
      passwordPlaceholder: '••••••••',
      required: 'is required',
      emailInvalid: 'Email is invalid',
      passwordLength: 'Password must be at least 6 characters',
      nameLength: 'Name must be at least 3 characters',
      phoneDigits: 'Phone number must be 10 digits',
      passwordMismatch: 'Passwords do not match',
      loginSuccess: 'Login successful! Redirecting to dashboard...',
      registerSuccess: 'Registration successful! You can now login.',
      copyright: '© 2024 Ministry of Health and Family Welfare, Government of India'
    },
    mr: {
      appTitle: 'आशा कार्यकर्ता पर्यवेक्षण प्रणाली',
      appSubtitle: 'आरोग्य आणि कुटुंब कल्याण मंत्रालय, भारत सरकार',
      welcome: 'स्वागत आहे',
      welcomeSubtitle: 'आशा कार्यकर्ता पर्यवेक्षण प्रणालीमध्ये',
      chooseOption: 'कृपया पुढे जाण्यासाठी एक पर्याय निवडा:',
      existingUser: 'विद्यमान वापरकर्ता? लॉग इन करा',
      newUser: 'नवीन वापरकर्ता? नोंदणी करा',
      note: 'नोंद:',
      noteText: 'जर तुमच्याकडे आधीपासून लॉगिन खाते आहे, तर कृपया लॉग इन पर्याय वापरा. जर तुम्ही सिस्टमला नवीन आहात, तर कृपया प्रथम नोंदणी करा.',
      welcomeBack: 'पुन्हा स्वागत आहे',
      signInMessage: 'आशा पर्यवेक्षण प्रणालीमध्ये प्रवेश करण्यासाठी साइन इन करा',
      emailAddress: 'ईमेल पत्ता',
      password: 'पासवर्ड',
      rememberMe: 'मला लक्षात ठेवा',
      forgotPassword: 'पासवर्ड विसरले?',
      signIn: 'साइन इन करा',
      signingIn: 'साइन इन होत आहे...',
      back: 'परत',
      createAccount: 'खाते तयार करा',
      createAccountTitle: 'खाते तयार करा',
      joinNetwork: 'आशा पर्यवेक्षक नेटवर्कमध्ये सामील व्हा',
      fullName: 'पूर्ण नाव',
      phone: 'फोन क्रमांक',
      area: 'क्षेत्र/झोन',
      confirmPassword: 'पासवर्ड पुष्टी करा',
      creatingAccount: 'खाते तयार होत आहे...',
      terms: 'नोंदणी करून, तुम्ही आमच्या सेवा अटी आणि गोपनीयता धोरणास सहमती देत आहात',
      alreadyHave: 'आधीपासून खाते आहे?',
      emailPlaceholder: 'supervisor@health.gov.in',
      namePlaceholder: 'प्रिया शर्मा',
      emailRegPlaceholder: 'priya@health.gov.in',
      phonePlaceholder: '9876543210',
      areaPlaceholder: 'झोन अ',
      passwordPlaceholder: '••••••••',
      required: 'आवश्यक आहे',
      emailInvalid: 'ईमेल अमान्य आहे',
      passwordLength: 'पासवर्ड किमान 6 वर्ण असणा आवश्यक आहे',
      nameLength: 'नाव किमान 3 वर्ण असणा आवश्यक आहे',
      phoneDigits: 'फोन क्रमांक 10 अंकांचा असणा आवश्यक आहे',
      passwordMismatch: 'पासवर्ड जुळत नाही',
      loginSuccess: 'लॉग इन यशस्वी! डॅशबोर्डवर पुनर्निर्देशित होत आहे...',
      registerSuccess: 'नोंदणी यशस्वी! तुम्ही आता लॉग इन करू शकता.',
      copyright: '© 2024 आरोग्य आणि कुटुंब कल्याण मंत्रालय, भारत सरकार'
    }
  };

  const t = (key) => translations[lang][key] || key;

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleRegisterChange = (e) => {
    const { name, value } = e.target;
    setRegisterData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateLogin = () => {
    const newErrors = {};
    if (!loginData.email) {
      newErrors.email = `${t('emailAddress')} ${t('required')}`;
    } else if (!/\S+@\S+\.\S+/.test(loginData.email)) {
      newErrors.email = t('emailInvalid');
    }
    if (!loginData.password) {
      newErrors.password = `${t('password')} ${t('required')}`;
    } else if (loginData.password.length < 6) {
      newErrors.password = t('passwordLength');
    }
    return newErrors;
  };

  const validateRegister = () => {
    const newErrors = {};
    if (!registerData.fullName) {
      newErrors.fullName = `${t('fullName')} ${t('required')}`;
    } else if (registerData.fullName.length < 3) {
      newErrors.fullName = t('nameLength');
    }
    if (!registerData.email) {
      newErrors.email = `${t('emailAddress')} ${t('required')}`;
    } else if (!/\S+@\S+\.\S+/.test(registerData.email)) {
      newErrors.email = t('emailInvalid');
    }
    if (!registerData.phone) {
      newErrors.phone = `${t('phone')} ${t('required')}`;
    } else if (!/^[0-9]{10}$/.test(registerData.phone.replace(/\s/g, ''))) {
      newErrors.phone = t('phoneDigits');
    }
    if (!registerData.area) {
      newErrors.area = `${t('area')} ${t('required')}`;
    }
    if (!registerData.password) {
      newErrors.password = `${t('password')} ${t('required')}`;
    } else if (registerData.password.length < 6) {
      newErrors.password = t('passwordLength');
    }
    if (!registerData.confirmPassword) {
      newErrors.confirmPassword = `${t('confirmPassword')} ${t('required')}`;
    } else if (registerData.password !== registerData.confirmPassword) {
      newErrors.confirmPassword = t('passwordMismatch');
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
      setSuccessMessage(t('loginSuccess'));
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
      setSuccessMessage(t('registerSuccess'));
      console.log('Register:', registerData);
      setTimeout(() => {
        setRegisterData({
          fullName: '', email: '', phone: '', area: '', password: '', confirmPassword: ''
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
      <div className="border-b-4 border-orange-500 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">🔍</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold">{t('appTitle')}</h1>
                <p className="text-blue-100 text-sm">{t('appSubtitle')}</p>
              </div>
            </div>
            <div className="flex gap-2 items-center bg-blue-800 rounded-lg p-2">
              <Globe size={20} />
              <button onClick={() => setLang('en')} className={`px-4 py-2 rounded font-bold transition-all ${lang === 'en' ? 'bg-white text-blue-900' : 'bg-transparent text-white hover:bg-blue-700'}`}>
                English
              </button>
              <button onClick={() => setLang('mr')} className={`px-4 py-2 rounded font-bold transition-all ${lang === 'mr' ? 'bg-white text-blue-900' : 'bg-transparent text-white hover:bg-blue-700'}`}>
                मराठी
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="min-h-screen flex items-center justify-center px-4 py-8 bg-gray-50">
        <div className="w-full max-w-2xl">
          {successMessage && (
            <div className="mb-6 bg-green-50 border-l-4 border-green-600 px-6 py-4 flex items-center gap-3">
              <CheckCircle className="h-6 w-6 text-green-600" />
              <span className="text-green-800 font-semibold">{successMessage}</span>
            </div>
          )}

          {!showLogin && !showRegister && (
            <div className="bg-white border-2 border-gray-300 shadow-lg p-12">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-blue-900 mb-3">{t('welcome')}</h2>
                <p className="text-gray-600 text-lg">{t('welcomeSubtitle')}</p>
                <div className="h-1 w-24 bg-orange-500 mx-auto mt-4"></div>
              </div>
              <div className="space-y-6">
                <p className="text-center text-gray-700 mb-8 text-lg">{t('chooseOption')}</p>
                <button onClick={() => setShowLogin(true)} className="w-full bg-blue-900 hover:bg-blue-800 text-white py-6 font-bold text-xl transition-all border-b-4 border-blue-950 flex items-center justify-between px-8">
                  <span>{t('existingUser')}</span>
                  <ChevronRight size={28} />
                </button>
                <button onClick={() => setShowRegister(true)} className="w-full bg-green-600 hover:bg-green-700 text-white py-6 font-bold text-xl transition-all border-b-4 border-green-800 flex items-center justify-between px-8">
                  <span>{t('newUser')}</span>
                  <ChevronRight size={28} />
                </button>
                <div className="mt-8 p-6 bg-blue-50 border-l-4 border-blue-900">
                  <p className="text-sm text-gray-700">
                    <span className="font-bold text-blue-900">{t('note')}</span> {t('noteText')}
                  </p>
                </div>
              </div>
            </div>
          )}

          {showLogin && (
            <div className="bg-white border-2 border-gray-300 shadow-lg">
              <div className="bg-blue-50 border-b-2 border-gray-300 p-6">
                <h2 className="text-3xl font-bold text-blue-900 mb-2">{t('welcomeBack')}</h2>
                <p className="text-gray-600 text-sm">{t('signInMessage')}</p>
              </div>
              <div className="p-8 space-y-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">{t('emailAddress')} <span className="text-red-600">*</span></label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-4 h-5 w-5 text-gray-400" />
                    <input type="email" name="email" value={loginData.email} onChange={handleLoginChange} className={`w-full pl-12 pr-4 py-3 border-2 ${errors.email ? 'border-red-600' : 'border-gray-300'} focus:border-blue-900 focus:outline-none transition bg-white`} placeholder={t('emailPlaceholder')} />
                  </div>
                  {errors.email && <div className="flex items-center mt-2 text-red-600 text-sm"><AlertCircle className="h-4 w-4 mr-2" />{errors.email}</div>}
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">{t('password')} <span className="text-red-600">*</span></label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-4 h-5 w-5 text-gray-400" />
                    <input type={showPassword ? 'text' : 'password'} name="password" value={loginData.password} onChange={handleLoginChange} className={`w-full pl-12 pr-12 py-3 border-2 ${errors.password ? 'border-red-600' : 'border-gray-300'} focus:border-blue-900 focus:outline-none transition bg-white`} placeholder={t('passwordPlaceholder')} />
                    <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-4 text-gray-400 hover:text-gray-600">
                      {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                  {errors.password && <div className="flex items-center mt-2 text-red-600 text-sm"><AlertCircle className="h-4 w-4 mr-2" />{errors.password}</div>}
                </div>
                <div className="flex items-center justify-between">
                  <label className="flex items-center">
                    <input type="checkbox" checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)} className="w-5 h-5 border-2 border-gray-300 focus:border-blue-900" />
                    <span className="ml-2 text-sm text-gray-700 font-medium">{t('rememberMe')}</span>
                  </label>
                  <button type="button" className="text-sm text-blue-900 hover:text-blue-700 font-bold">{t('forgotPassword')}</button>
                </div>
                <button onClick={handleLoginSubmit} disabled={isLoading} className="w-full bg-blue-900 hover:bg-blue-800 text-white py-4 font-bold text-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed border-b-4 border-blue-950">
                  {isLoading ? <span className="flex items-center justify-center"><svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>{t('signingIn')}</span> : t('signIn')}
                </button>
                <div className="flex gap-4">
                  <button onClick={goBack} className="flex-1 bg-gray-400 hover:bg-gray-500 text-white py-3 font-bold transition-all border-b-4 border-gray-600">{t('back')}</button>
                  <button onClick={goToRegister} className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 font-bold transition-all border-b-4 border-green-800">{t('createAccount')}</button>
                </div>
              </div>
            </div>
          )}

          {showRegister && (
            <div className="bg-white border-2 border-gray-300 shadow-lg">
              <div className="bg-blue-50 border-b-2 border-gray-300 p-6">
                <h2 className="text-3xl font-bold text-blue-900 mb-2">{t('createAccountTitle')}</h2>
                <p className="text-gray-600 text-sm">{t('joinNetwork')}</p>
              </div>
              <div className="p-8 space-y-4">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">{t('fullName')} <span className="text-red-600">*</span></label>
                  <div className="relative">
                    <User className="absolute left-4 top-4 h-5 w-5 text-gray-400" />
                    <input type="text" name="fullName" value={registerData.fullName} onChange={handleRegisterChange} className={`w-full pl-12 pr-4 py-3 border-2 ${errors.fullName ? 'border-red-600' : 'border-gray-300'} focus:border-blue-900 focus:outline-none transition bg-white`} placeholder={t('namePlaceholder')} />
                  </div>
                  {errors.fullName && <div className="flex items-center mt-2 text-red-600 text-sm"><AlertCircle className="h-4 w-4 mr-2" />{errors.fullName}</div>}
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">{t('emailAddress')} <span className="text-red-600">*</span></label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-4 h-5 w-5 text-gray-400" />
                    <input type="email" name="email" value={registerData.email} onChange={handleRegisterChange} className={`w-full pl-12 pr-4 py-3 border-2 ${errors.email ? 'border-red-600' : 'border-gray-300'} focus:border-blue-900 focus:outline-none transition bg-white`} placeholder={t('emailRegPlaceholder')} />
                  </div>
                  {errors.email && <div className="flex items-center mt-2 text-red-600 text-sm"><AlertCircle className="h-4 w-4 mr-2" />{errors.email}</div>}
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">{t('phone')} <span className="text-red-600">*</span></label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-4 h-5 w-5 text-gray-400" />
                    <input type="tel" name="phone" value={registerData.phone} onChange={handleRegisterChange} className={`w-full pl-12 pr-4 py-3 border-2 ${errors.phone ? 'border-red-600' : 'border-gray-300'} focus:border-blue-900 focus:outline-none transition bg-white`} placeholder={t('phonePlaceholder')} />
                  </div>
                  {errors.phone && <div className="flex items-center mt-2 text-red-600 text-sm"><AlertCircle className="h-4 w-4 mr-2" />{errors.phone}</div>}
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">{t('area')} <span className="text-red-600">*</span></label>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-4 h-5 w-5 text-gray-400" />
                    <input type="text" name="area" value={registerData.area} onChange={handleRegisterChange} className={`w-full pl-12 pr-4 py-3 border-2 ${errors.area ? 'border-red-600' : 'border-gray-300'} focus:border-blue-900 focus:outline-none transition bg-white`} placeholder={t('areaPlaceholder')} />
                  </div>
                  {errors.area && <div className="flex items-center mt-2 text-red-600 text-sm"><AlertCircle className="h-4 w-4 mr-2" />{errors.area}</div>}
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">{t('password')} <span className="text-red-600">*</span></label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-4 h-5 w-5 text-gray-400" />
                    <input type={showPassword ? 'text' : 'password'} name="password" value={registerData.password} onChange={handleRegisterChange} className={`w-full pl-12 pr-12 py-3 border-2 ${errors.password ? 'border-red-600' : 'border-gray-300'} focus:border-blue-900 focus:outline-none transition bg-white`} placeholder={t('passwordPlaceholder')} />
                    <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-4 text-gray-400 hover:text-gray-600">
                      {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                  {errors.password && <div className="flex items-center mt-2 text-red-600 text-sm"><AlertCircle className="h-4 w-4 mr-2" />{errors.password}</div>}
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">{t('confirmPassword')} <span className="text-red-600">*</span></label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-4 h-5 w-5 text-gray-400" />
                    <input type={showConfirmPassword ? 'text' : 'password'} name="confirmPassword" value={registerData.confirmPassword} onChange={handleRegisterChange} className={`w-full pl-12 pr-12 py-3 border-2 ${errors.confirmPassword ? 'border-red-600' : 'border-gray-300'} focus:border-blue-900 focus:outline-none transition bg-white`} placeholder={t('passwordPlaceholder')} />
                    <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute right-4 top-4 text-gray-400 hover:text-gray-600">
                      {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                  {errors.confirmPassword && <div className="flex items-center mt-2 text-red-600 text-sm"><AlertCircle className="h-4 w-4 mr-2" />{errors.confirmPassword}</div>}
                </div>
                <button onClick={handleRegisterSubmit} disabled={isLoading} className="w-full bg-blue-900 hover:bg-blue-800 text-white py-4 font-bold text-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed border-b-4 border-blue-950">
                  {isLoading ? <span className="flex items-center justify-center"><svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>{t('creatingAccount')}</span> : t('createAccountTitle')}
                </button>
                <p className="text-xs text-center text-gray-600 py-3">{t('terms')}</p>
                <div className="flex gap-4">
                  <button onClick={goBack} className="flex-1 bg-gray-400 hover:bg-gray-500 text-white py-3 font-bold transition-all border-b-4 border-gray-600">{t('back')}</button>
                  <button onClick={goToLogin} className="flex-1 bg-blue-900 hover:bg-blue-800 text-white py-3 font-bold transition-all border-b-4 border-blue-950">{t('alreadyHave')}</button>
                </div>
              </div>
            </div>
          )}

          <div className="border-t-4 border-orange-500 bg-gray-50 px-6 py-4 text-center mt-8">
            <p className="text-sm text-gray-700 font-semibold">{t('copyright')}</p>
          </div>
        </div>
      </div>
    </div>
  );
}