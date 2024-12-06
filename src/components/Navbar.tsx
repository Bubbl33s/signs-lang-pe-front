import { Link, useLocation } from 'react-router';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import '../assets/styles/Navbar.css';

export default function Navbar() {
  const { authToken } = useContext(AuthContext);

  const location = useLocation();

  const isActive = (path: string) =>
    location.pathname === path ? 'active' : '';

  return (
    <nav className="bg-purple-200 rounded-lg p-1">
      <ul className="font-medium flex text-center text-gray-400 gap-1">
        <li className="flex-1 flex">
          <Link
            className={`${isActive(
              '/'
            )}  py-1  h-full w-full rounded-md transition-colors`}
            to="/"
          >
            Buscar
          </Link>
        </li>
        <li className="flex-1 flex">
          <Link
            className={`${isActive(
              '/upload'
            )}  py-1  h-full w-full rounded-md transition-colors`}
            to="/upload"
          >
            Contribuir
          </Link>
        </li>
        <li className="flex-1 flex">
          {authToken ? (
            <Link
              className={`${isActive(
                '/profile'
              )}  py-1  h-full w-full rounded-md transition-colors`}
              to="/profile"
            >
              Perfil
            </Link>
          ) : (
            <Link
              className={`${
                isActive('/login') || isActive('/signup')
              } py-1 h-full w-full rounded-md transition-colors`}
              to="/login"
            >
              Acceder
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
}
