import { useContext, ReactNode } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../context/AuthContext';

type ProtectedRouteProps = {
  children: ReactNode;
};

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { authToken } = useContext(AuthContext);

  if (authToken) {
    return <>{children}</>;
  }

  return (
    <main className="flex flex-col items-center gap-3 pt-3">
      <p>Inicia sesión para contribuir al diccionario</p>
      <Link
        to="/login"
        className="bg-purple-300 border border-purple-500 rounded-md py-2 px-3 w-fit hover:bg-purple-500 hover:text-white transition-colors"
      >
        Iniciar Sesión
      </Link>
    </main>
  );
}
