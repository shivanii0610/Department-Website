import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, User, AlertCircle, GraduationCap, Eye, EyeOff, Shield, Users, Bell, BookOpen, CheckCircle2 } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useData } from '../../context/DataContext';

const stats = [
  { icon: Users, label: 'Faculty Members', value: '12+' },
  { icon: BookOpen, label: 'Courses Offered', value: '8' },
  { icon: Bell, label: 'Active Notices', value: '4' },
  { icon: Shield, label: 'Secure Access', value: '24/7' },
];

export default function AdminLogin() {
  const [isLoginMode, setIsLoginMode] = useState(true);
  
  // Form fields
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  
  // Feedback
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);
  
  const { login, isAuthenticated } = useAuth();
  const { data, updateData } = useData();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/admin/dashboard');
    }
  }, [isAuthenticated, navigate]);

  if (isAuthenticated) {
    return null;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');
    await new Promise(r => setTimeout(r, 600)); // simulate network delay

    if (isLoginMode) {
      // Logic for SignIn
      const matchedAdmin = data.admins.find(
        (admin) => admin.username === username && admin.password === password
      );

      if (matchedAdmin) {
        if (login({ username: matchedAdmin.username, role: matchedAdmin.role, name: matchedAdmin.name })) {
          navigate('/admin/dashboard');
        }
      } else {
        setError('Invalid username or password. Please try again.');
        setLoading(false);
      }
    } else {
      // Logic for Request Access
      // Check if username already exists in admins or requests
      const alreadyAdmin = data.admins.some((a) => a.username === username);
      const alreadyRequested = data.adminRequests.some((r) => r.username === username);

      if (alreadyAdmin || alreadyRequested) {
        setError('Username is already taken or pending approval.');
        setLoading(false);
        return;
      }

      if (!name || !username || !password) {
        setError('All fields are required.');
        setLoading(false);
        return;
      }

      const newRequest = {
        id: Date.now(),
        name,
        username,
        password,
        status: 'pending',
        date: new Date().toISOString()
      };

      const updatedRequests = [...data.adminRequests, newRequest];
      updateData('adminRequests', updatedRequests);
      
      setSuccess('Request sent successfully! Awaiting superadmin approval.');
      setLoading(false);
      setName('');
      setUsername('');
      setPassword('');
      
      // Auto switch back to login mode after 3 seconds
      setTimeout(() => {
        setIsLoginMode(true);
        setSuccess('');
      }, 3000);
    }
  };

  const toggleMode = () => {
    setIsLoginMode(!isLoginMode);
    setError('');
    setSuccess('');
    setUsername('');
    setPassword('');
    setName('');
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Branding Panel */}
      <motion.div
        initial={{ x: -60, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="hidden lg:flex lg:w-[55%] relative flex-col justify-between p-12 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #6b1a2a 0%, #8b2035 40%, #a0293f 70%, #7a1520 100%)' }}
      >
        {/* Background decorative circles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full opacity-10" style={{ background: 'radial-gradient(circle, #FFD700, transparent)' }} />
          <div className="absolute -bottom-16 -right-16 w-80 h-80 rounded-full opacity-10" style={{ background: 'radial-gradient(circle, #FFD700, transparent)' }} />
          <div className="absolute top-1/2 left-1/3 w-64 h-64 rounded-full opacity-5" style={{ background: 'radial-gradient(circle, #fff, transparent)' }} />
        </div>

        {/* Logo / Header */}
        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-14 rounded-2xl bg-white/15 backdrop-blur-sm flex items-center justify-center border border-white/20 shadow-lg">
              <GraduationCap size={28} className="text-yellow-300" />
            </div>
            <div>
              <p className="text-yellow-300 text-xs font-semibold tracking-widest uppercase">Admin Portal</p>
              <h1 className="text-white font-bold text-xl leading-tight">NACSC Department</h1>
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-white font-bold text-4xl leading-tight mb-4">
              Manage Your<br />
              <span className="text-yellow-300">Department</span><br />
              Content
            </h2>
            <p className="text-white/70 text-sm leading-relaxed max-w-xs">
              A centralized dashboard to manage faculty, events, notices, timetables, and more — all in one place.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="relative z-10">
          <div className="grid grid-cols-2 gap-3">
            {stats.map(({ icon: Icon, label, value }) => (
              <div key={label} className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Icon size={16} className="text-yellow-300" />
                  <span className="text-white/70 text-xs">{label}</span>
                </div>
                <p className="text-white font-bold text-2xl">{value}</p>
              </div>
            ))}
          </div>
          <p className="text-white/40 text-xs mt-6 text-center">
            © 2026 AJMVPS New Arts, Commerce & Science College
          </p>
        </div>
      </motion.div>

      {/* Right Login Form */}
      <motion.div
        initial={{ x: 60, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="flex-1 flex items-center justify-center bg-gray-50 px-6 py-12"
      >
        <div className="w-full max-w-sm">
          {/* Mobile logo */}
          <div className="lg:hidden flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: '#6b1a2a' }}>
              <GraduationCap size={20} className="text-yellow-300" />
            </div>
            <div>
              <p className="text-xs text-gray-500 font-medium">Admin Portal</p>
              <p className="font-bold text-gray-900 text-sm">NACSC Department</p>
            </div>
          </div>

          <div className="mb-8 flex justify-between items-end">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">{isLoginMode ? 'Welcome back' : 'Request Access'}</h2>
              <p className="text-gray-500 text-sm mt-1">{isLoginMode ? 'Sign in to access your dashboard' : 'Submit your details for approval'}</p>
            </div>
            <button 
              onClick={toggleMode}
              className="text-xs font-semibold hover:underline"
              style={{ color: '#6b1a2a' }}
            >
              {isLoginMode ? 'Need access?' : 'Already have access?'}
            </button>
          </div>

          <AnimatePresence mode="wait">
            {error && (
              <motion.div
                key="error"
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                className="flex items-start gap-2.5 p-3.5 bg-red-50 border border-red-200 rounded-xl mb-5"
              >
                <AlertCircle size={16} className="text-red-500 shrink-0 mt-0.5" />
                <span className="text-sm text-red-600">{error}</span>
              </motion.div>
            )}

            {success && (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                className="flex items-start gap-2.5 p-3.5 bg-green-50 border border-green-200 rounded-xl mb-5"
              >
                <CheckCircle2 size={16} className="text-green-600 shrink-0 mt-0.5" />
                <span className="text-sm text-green-700">{success}</span>
              </motion.div>
            )}
          </AnimatePresence>

          <form onSubmit={handleSubmit} className="space-y-4">
            
            <AnimatePresence>
              {!isLoginMode && (
                 <motion.div
                   initial={{ opacity: 0, height: 0 }}
                   animate={{ opacity: 1, height: 'auto' }}
                   exit={{ opacity: 0, height: 0 }}
                 >
                   <label className="block text-sm font-medium text-gray-700 mb-1.5 pt-1">Full Name</label>
                   <div className="relative">
                     <User size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                     <input
                       type="text"
                       value={name}
                       onChange={e => { setName(e.target.value); setError(''); }}
                       placeholder="Enter your full name"
                       required={!isLoginMode}
                       className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl text-sm bg-white focus:outline-none transition-all"
                       onFocus={e => e.target.style.boxShadow = '0 0 0 3px rgba(107,26,42,0.15)'}
                       onBlur={e => e.target.style.boxShadow = 'none'}
                     />
                   </div>
                 </motion.div>
              )}
            </AnimatePresence>

            {/* Username */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Username</label>
              <div className="relative">
                <User size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  value={username}
                  onChange={e => { setUsername(e.target.value); setError(''); }}
                  placeholder={isLoginMode ? "Enter your username" : "Choose a username"}
                  required
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl text-sm bg-white focus:outline-none transition-all"
                  onFocus={e => e.target.style.boxShadow = '0 0 0 3px rgba(107,26,42,0.15)'}
                  onBlur={e => e.target.style.boxShadow = 'none'}
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Password</label>
              <div className="relative flex flex-col justify-center">
                <Lock size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={e => { setPassword(e.target.value); setError(''); }}
                  placeholder={isLoginMode ? "Enter your password" : "Choose a password"}
                  required
                  className="w-full pl-10 pr-10 py-3 border border-gray-200 rounded-xl text-sm bg-white focus:outline-none transition-all"
                  onFocus={e => e.target.style.boxShadow = '0 0 0 3px rgba(107,26,42,0.15)'}
                  onBlur={e => e.target.style.boxShadow = 'none'}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            {/* Demo hint */}
            {isLoginMode && (
              <div className="flex items-center gap-2 p-3 bg-amber-50 border border-amber-200 rounded-xl mt-4">
                <Shield size={14} className="text-amber-600 shrink-0" />
                <div className="text-xs text-amber-700">
                  <p>Superadmin (can approve): <strong>superadmin</strong> / <strong>superadmin123</strong></p>
                </div>
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 mt-4 text-white font-semibold rounded-xl text-sm shadow-lg transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-70"
              style={{ background: loading ? '#9b2d3f' : 'linear-gradient(135deg, #6b1a2a, #8b2035)', boxShadow: '0 4px 16px rgba(107,26,42,0.35)' }}
              onMouseEnter={e => !loading && (e.target.style.filter = 'brightness(1.1)')}
              onMouseLeave={e => (e.target.style.filter = 'none')}
            >
              {loading ? (
                <>
                  <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                  </svg>
                  {isLoginMode ? 'Signing in...' : 'Sending Request...'}
                </>
              ) : (
                <>
                  <Lock size={15} />
                  {isLoginMode ? 'Sign In to Dashboard' : 'Send Access Request'}
                </>
              )}
            </button>
          </form>

          <p className="text-center text-xs text-gray-400 mt-8">
            Secure admin access for authorized personnel only.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
