import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Lock, User, AlertCircle, GraduationCap } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

export default function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  if (isAuthenticated) {
    navigate('/admin/dashboard');
    return null;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (login(username, password)) {
      navigate('/admin/dashboard');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-section-bg px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
          <div className="text-center mb-8">
            <div className="w-16 h-16 rounded-full bg-navy flex items-center justify-center mx-auto mb-4">
              <GraduationCap size={28} className="text-white" />
            </div>
            <h1 className="text-2xl font-bold text-navy">Admin Panel</h1>
            <p className="text-sm text-gray-500 mt-1">Department of Computer Science</p>
          </div>

          {error && (
            <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-lg mb-5">
              <AlertCircle size={16} className="text-red-500 shrink-0" />
              <span className="text-sm text-red-600">{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Username</label>
              <div className="relative">
                <input
                  type="text"
                  value={username}
                  onChange={e => { setUsername(e.target.value); setError(''); }}
                  placeholder="Enter username"
                  required
                  className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                />
                <User size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Password</label>
              <div className="relative">
                <input
                  type="password"
                  value={password}
                  onChange={e => { setPassword(e.target.value); setError(''); }}
                  placeholder="Enter password"
                  required
                  className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                />
                <Lock size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-2.5 bg-primary text-white font-semibold rounded-lg hover:bg-primary-hover transition-colors shadow-md shadow-primary/20"
            >
              Login
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
}
