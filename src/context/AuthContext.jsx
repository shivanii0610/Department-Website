import { createContext, useContext, useState, useCallback } from 'react';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(() => {
    const stored = sessionStorage.getItem('admin_user');
    return stored ? JSON.parse(stored) : null;
  });

  const isAuthenticated = !!currentUser;

  // login now accepts a user object validated by the component
  const login = useCallback((user) => {
    setCurrentUser(user);
    sessionStorage.setItem('admin_user', JSON.stringify(user));
    return true;
  }, []);

  const logout = useCallback(() => {
    setCurrentUser(null);
    sessionStorage.removeItem('admin_user');
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, currentUser, login, logout }}>
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
