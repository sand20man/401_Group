import React, { createContext, useState, ReactNode } from 'react';

interface AuthContextType {
  currentUserId: number | null;
  setCurrentUserId: (id: number | null) => void;
}

export const AuthContext = createContext<AuthContextType>({
  currentUserId: null,
  setCurrentUserId: () => {},
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [currentUserId, setCurrentUserId] = useState<number | null>(null);
  return (
    <AuthContext.Provider value={{ currentUserId, setCurrentUserId }}>
      {children}
    </AuthContext.Provider>
  );
};
