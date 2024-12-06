import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { AuthContext } from '../context/AuthContext';
import { AuthService } from '../services/authService';
import { onErrors } from '../helpers/onErrors';
import { showToast } from '../helpers/toastify';

type FormData = {
  email: string;
  password: string;
};

export default function Login() {
  const { login } = useContext(AuthContext);
  const { register, handleSubmit, reset } = useForm<FormData>();
  const navigate = useNavigate();

  const onSubmit = async (data: FormData) => {
    const response = await AuthService.login(data.email, data.password);

    if (response?.status == 200) {
      login(response.data.user, response.data.token);
      reset();

      showToast({
        text: 'Sesión iniciada',
        color: 'success',
      });

      navigate('/profile');
    } else {
      showToast({
        text: 'Error al iniciar sesión',
        color: 'error',
      });
    }
  };

  return (
    <main>
      <div className="w-full">
        <header className="bg-purple-600 text-white rounded-t-lg py-2">
          <h3 className="text-center text-xl font-bold">Iniciar Sesión</h3>
        </header>
        <div className="rounded-lg border border-purple-400 border-t-0 rounded-t-none p-4 pb-5">
          <form
            className="space-y-3"
            onSubmit={handleSubmit(onSubmit, onErrors)}
          >
            <div>
              <label htmlFor="email" className="mb-1">
                Correo
              </label>
              <input
                type="email"
                id="email"
                placeholder="Ingresa tu correo"
                className="mb-2 border border-purple-400 rounded-md px-2 py-1 w-full h-[37px]"
                {...register('email', {
                  required: 'Ingresa tu correo',
                })}
              />
            </div>

            <div>
              <label htmlFor="password" className="mb-1">
                Contraseña
              </label>
              <input
                type="password"
                id="password"
                placeholder="Ingresa tu contraseña"
                className="mb-2 border border-purple-400 rounded-md px-2 py-1 w-full h-[37px]"
                {...register('password', {
                  required: 'Ingresa tu contraseña',
                })}
              />
            </div>

            <div>
              <input
                type="submit"
                value="Iniciar Sesión"
                className="bg-green-500 rounded-md py-2 px-3 block mx-auto font-bold text-white border border-green-500 hover:bg-green-300 hover:text-black transition-colors hover:cursor-pointer"
              />
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
