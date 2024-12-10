import { Outlet, Link } from 'react-router';
import { useLocation } from 'react-router';
import '../assets/styles/Contribute.css';

export default function Contribute() {
  const location = useLocation();

  const isPathActive = (path: string) =>
    location.pathname.startsWith(path) ? 'active-contribute' : '';

  return (
    <main className="overflow-hidden container md:max-w-5xl mx-auto">
      <nav className="contribute-nav bg-purple-600 text-white rounded-t-lg p-1">
        <ul className="font-bold text-base flex text-center gap-1">
          <li className="flex-1 flex">
            <Link
              to={'/contribute/upload'}
              className={`${isPathActive(
                '/contribute/upload'
              )} py-1 h-full w-full rounded-md`}
            >
              Cargar imagen
            </Link>
          </li>
          <li className="flex-1 flex">
            <Link
              to={'/contribute/moderate/pick'}
              className={`${isPathActive(
                '/contribute/moderate'
              )} py-1 h-full w-full rounded-md`}
            >
              Revisar imágenes
            </Link>
          </li>
        </ul>
      </nav>
      <div className="rounded-lg border border-purple-400 border-t-0 rounded-t-none p-4">
        <Outlet />
      </div>
    </main>
  );
}
