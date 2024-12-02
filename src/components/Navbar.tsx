import { Link, useLocation } from 'react-router';
import '../assets/styles/Navbar.css';

export default function Navbar() {
  const location = useLocation();

  const isActive = (path: string) =>
    location.pathname === path ? 'active' : '';

  return (
    <nav className="bg-purple-200 rounded-lg p-1">
      <ul className="font-medium flex text-center text-gray-400">
        <li className={`${isActive('/')} flex-1 py-1`}>
          <Link to="/">Buscar</Link>
        </li>
        <li className={`${isActive('/upload')} flex-1 py-1`}>
          <Link to="/upload">Cargar</Link>
        </li>
      </ul>
    </nav>
  );
}
