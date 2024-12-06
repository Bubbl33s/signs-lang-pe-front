import { useContext } from 'react';
import { useNavigate } from 'react-router';
import { AuthContext } from '../context/AuthContext';
import { showToast } from '../helpers/toastify';

export default function Profile() {
  const { logout } = useContext(AuthContext);
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
    <div>
      <p>Perfil</p>
      <button
        onClick={onLogout}
        className="bg-purple-300 border border-purple-500 rounded-md py-2 px-3 text-sm hover:bg-purple-500 hover:text-white transition-colors"
      >
        Cerrar sesión
      </button>
    </div>
  );
}
