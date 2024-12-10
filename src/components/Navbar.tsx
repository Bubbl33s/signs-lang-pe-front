import { Link, useLocation } from 'react-router';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import '../assets/styles/Navbar.css';

export default function Navbar() {
  const { authToken } = useContext(AuthContext);
  const location = useLocation();

  const isPathActive = (path: string, exact: boolean = false) => {
    return exact
      ? location.pathname === path
      : location.pathname.startsWith(path);
  };

  return (
    <nav className="main-nav bg-purple-200 rounded-lg p-1">
      <ul className="font-medium flex text-center text-gray-400 gap-1">
        <li className="flex-1 flex">
          <Link
            className={`${
              isPathActive('/', true) ? 'active' : ''
            } py-1 h-full w-full rounded-md transition-colors`}
            to="/"
          >
            Buscar
          </Link>
        </li>
        <li className="flex-1 flex">
          <Link
            className={`${
              isPathActive('/contribute') ? 'active' : ''
            } py-1 h-full w-full rounded-md transition-colors`}
            to="/contribute/upload"
          >
            Contribuir
          </Link>
        </li>
        <li className="flex-1 flex">
          {authToken ? (
            <Link
              className={`${
                isPathActive('/profile') ? 'active' : ''
              } py-1 h-full w-full rounded-md transition-colors`}
              to="/profile"
            >
              Perfil
            </Link>
          ) : (
            <Link
              className={`${
                isPathActive('/login') ? 'active' : ''
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
