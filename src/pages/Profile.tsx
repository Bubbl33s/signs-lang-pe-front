import { useContext } from 'react';
import { useNavigate } from 'react-router';
import { AuthContext } from '../context/AuthContext';
import { showToast } from '../helpers/toastify';

export default function Profile() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const onLogout = async () => {
    logout();

    showToast({
      text: 'Sesión cerrada',
      color: 'info',
    });

    navigate('/login');
  };

  return (
    <main className="px-3 py-1 mx-auto container max-w-xl">
      <section>
        <header className="flex flex-wrap justify-between items-start gap-2">
          <div className="overflow-hidden">
            <h1 className="text-2xl font-bold">{user?.username}</h1>
            <p className="text-sm text-gray-500">Información de la cuenta</p>
          </div>
          <button
            onClick={onLogout}
            className="bg-purple-300 border border-purple-500 rounded-md py-2 px-3 text-sm hover:bg-purple-500 hover:text-white transition-colors"
          >
            Cerrar sesión
          </button>
        </header>
        <ul className="mt-6 space-y-3">
          <li>
            <strong>Nombre completo</strong>
            <p>{user?.fullName}</p>
          </li>
          <li>
            <strong>Correo</strong>
            <p>{user?.email}</p>
          </li>
          <li>
            <strong>Persona sordo-muda</strong>
            <p>{user?.isDeafMute ? 'Sí' : 'No'}</p>
          </li>
          <li>
            <strong>Conoce la lengua de señas</strong>
            <p>{user?.knowsSignLanguage ? 'Sí' : 'No'}</p>
          </li>
          <li>
            <strong>Rol</strong>{' '}
            <p>
              {user?.role === 'admin'
                ? 'Administrador'
                : user?.role === 'moderator'
                ? 'Moderator'
                : 'Usuario'}
            </p>
          </li>
        </ul>
      </section>
    </main>
  );
}
