import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { AuthContext } from '../context/AuthContext';
import { showToast } from '../helpers/toastify';

export default function Profile() {
  const { user, logout } = useContext(AuthContext);
  const [avatar, setAvatar] = useState<string | null>(null);
  const navigate = useNavigate();

  const onLogout = async () => {
    logout();

    showToast({
      text: 'Sesión cerrada',
      color: 'info',
    });

    navigate('/login');
  };

  useEffect(() => {
    const avatarQuery = user?.fullName.split(' ').join('+') || '';

    setAvatar(
      `https://ui-avatars.com/api/?name=${avatarQuery}?background=random?size=128`
    );
  }, []);

  return (
    <main className="mx-auto container max-w-xl">
      <section className="px-3 pb-2 mb-3">
        <header className="flex flex-wrap justify-between items-center gap-2">
          <div className="overflow-hidden">
            <h1 className="text-2xl font-bold">{user?.username}</h1>
            <p className="text-sm text-gray-500">Información de la cuenta</p>
          </div>
          <img
            src={avatar ?? ''}
            alt={user?.fullName}
            className="w-20 rounded-full"
          />
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

      <div className="flex justify-end">
        <button
          onClick={onLogout}
          className="bg-purple-300 border border-purple-500 rounded-md py-2 px-3 text-sm hover:bg-purple-500 hover:text-white transition-colors"
        >
          Cerrar sesión
        </button>
      </div>
    </main>
  );
}
