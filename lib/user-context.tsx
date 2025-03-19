'use client';

import { createContext, useContext, useState } from 'react';

interface UserContextType {
  user: {
    name: string;
    email: string;
  };
  updateUser: (data: Partial<{ name: string; email: string }>) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john@example.com',
  });

  const updateUser = (data: Partial<{ name: string; email: string }>) => {
    setUser(prev => ({ ...prev, ...data }));
  };

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
} 