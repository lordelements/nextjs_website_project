'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface User {
  email: string;
  password: string;
  id: number; // match with post.userId
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (email: string, password: string) => {
    // Simulated users (you can fetch from API or DB later)
    const users = [
      { id: 0, email: 'admin@admin.com', password: 'admin123' }, // admin
      { id: 1, email: 'user1@example.com', password: 'user123' }, // normal user
      { id: 2, email: 'user2@example.com', password: 'user456' }, // another normal user
    ];
  
    const matchedUser = users.find(
      (u) => u.email === email && u.password === password
    );
  
    if (matchedUser) {
      setUser(matchedUser);
    } else {
      alert('User not found'); // or return error
    }
  };
  

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext)!;
