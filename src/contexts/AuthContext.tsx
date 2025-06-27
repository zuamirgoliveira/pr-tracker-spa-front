import React, { createContext, useState, useEffect } from 'react';
import api from '../api/api';

interface AuthContextValue { loggedIn: boolean; }
export const AuthContext = createContext<AuthContextValue>({ loggedIn: false });

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    api.get('/user')
      .then(() => setLoggedIn(true))
      .catch(() => setLoggedIn(false));
  }, []);

  return (
    <AuthContext.Provider value={{ loggedIn }}>
      {children}
    </AuthContext.Provider>
  );
}