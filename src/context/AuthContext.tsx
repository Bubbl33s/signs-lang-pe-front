import { createContext, useState, useEffect, ReactNode } from 'react';
import { User } from '../types';

type AuthContextProps = {
  authToken: string | null;
  user: User | null;
  login: (token: string, user: User) => void;
  logout: () => void;
};

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext<AuthContextProps>(null!);

export function AuthProvider({ children }: AuthProviderProps) {
  const [authToken, setAuthToken] = useState<string | null>(null);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const token = localStorage.getItem('authTokenSignsApp');

    if (token) {
      setAuthToken(token);
    }

    const user = localStorage.getItem('userSignsApp');

    if (user) {
      setUser(JSON.parse(user));
    }
  }, []);

  const login = (token: string, user: User) => {
    localStorage.setItem('authTokenSignsApp', token);
    localStorage.setItem('userSignsApp', JSON.stringify(user));

    setAuthToken(token);
    setUser(user);
  };

  const logout = () => {
    localStorage.removeItem('authTokenSignsApp');
    localStorage.removeItem('userSignsApp');

    setAuthToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ authToken, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
