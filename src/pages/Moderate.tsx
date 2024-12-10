import { useContext } from 'react';
import { Outlet } from 'react-router';
import { AuthContext } from '../context/AuthContext';

export default function Moderate() {
  const { user } = useContext(AuthContext);

  if (user?.role === 'user') {
    return (
      <div>
        <p className="text-center">
          Debes ser moderador para poder utilizar esta función
        </p>
      </div>
    );
  }

  return (
    <div>
      <Outlet />
    </div>
  );
}
