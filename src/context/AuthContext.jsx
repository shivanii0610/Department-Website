import { createContext, useContext, useState, useCallback } from 'react';

const AuthContext = createContext(null);

const CREDENTIALS = { username: 'admin', password: 'admin123' };

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return sessionStorage.getItem('admin_auth') === 'true';
  });

  const login = useCallback((username, password) => {
    if (username === CREDENTIALS.username && password === CREDENTIALS.password) {
      setIsAuthenticated(true);
      sessionStorage.setItem('admin_auth', 'true');
      return true;
    }
    return false;
  }, []);

  const logout = useCallback(() => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('admin_auth');
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
