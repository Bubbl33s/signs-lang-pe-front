import { Link } from 'react-router';

export default function NotFound() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl font-bold text-purple-600 mb-4">
        404 - Página no encontrada
      </h1>
      <p className="text-gray-600 mb-6">
        Lo sentimos, no pudimos encontrar lo que buscas.
      </p>
      <Link
        to="/"
        className="bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-400 transition"
      >
        Volver al inicio
      </Link>
    </div>
  );
}
