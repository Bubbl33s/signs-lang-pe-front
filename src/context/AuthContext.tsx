import { createContext, useState, useEffect, ReactNode } from 'react';
import { useNavigate } from 'react-router';
import { setAuthToken as setAxiosClientAuthToken } from '../services/apiClient';
import { showToast } from '../helpers/toastify';
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
  const [expirationTime, setExpirationTime] = useState<number | null>(null);
  const [user, setUser] = useState<User | null>(null);

  const navigate = useNavigate();
  const SESSION_DURATION = 119 * 60 * 1000;

  useEffect(() => {
    const token = localStorage.getItem('authTokenSignsApp');
    const storedExpirationTime = localStorage.getItem('expirationTime');

    if (token && storedExpirationTime) {
      const remainingTime = parseInt(storedExpirationTime, 10) - Date.now();

      if (remainingTime <= 0) {
        logout();
      } else {
        setAuthToken(token);
        setAxiosClientAuthToken(token);

        setTimeout(logout, remainingTime);
      }
    }

    const user = localStorage.getItem('userSignsApp');

    if (user) {
      setUser(JSON.parse(user));
    }
  }, []);

  const login = (token: string, user: User) => {
    const expirationTime = Date.now() + SESSION_DURATION;

    localStorage.setItem('authTokenSignsApp', token);
    localStorage.setItem('expirationTime', expirationTime.toString());
    localStorage.setItem('userSignsApp', JSON.stringify(user));

    setAuthToken(token);
    setExpirationTime(expirationTime);
    setAxiosClientAuthToken(token);
    setUser(user);

    setTimeout(logout, SESSION_DURATION);
  };

  const logout = () => {
    const currentPath = window.location.pathname;
    const restrictedPaths = [
      '/contribute',
      '/contribute/upload',
      '/contribute/moderate',
      '/profile',
    ];

    const currentTime = Date.now();
    const storedExpirationTime = localStorage.getItem('expirationTime');

    let showToastMessage = false;

    if (
      storedExpirationTime &&
      currentTime > parseInt(storedExpirationTime, 10)
    ) {
      showToastMessage = true;
    }

    localStorage.removeItem('authTokenSignsApp');
    localStorage.removeItem('userSignsApp');
    localStorage.removeItem('expirationTime');

    setAuthToken(null);
    setAxiosClientAuthToken(null);
    setUser(null);

    if (restrictedPaths.includes(currentPath)) {
      navigate('/login');
    }

    if (showToastMessage) {
      showToast({
        text: 'Sesión caducada',
        color: 'info',
      });
    }
  };

  return (
    <AuthContext.Provider value={{ authToken, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
