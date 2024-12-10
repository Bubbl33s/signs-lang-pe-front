import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, Link } from 'react-router';
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
      login(response.data.token, response.data.user);
      reset();

      showToast({
        text: 'Sesión iniciada',
        color: 'success',
      });

      navigate('/profile');
    } else {
      showToast({
        text: 'Credenciales inválidas',
        color: 'error',
      });
    }
  };

  return (
    <main className="mx-auto container max-w-xl">
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
              <label htmlFor="email" className="inline-block mb-1">
                Correo
              </label>
              <input
                type="email"
                id="email"
                placeholder="Ingresa tu correo"
                className="border border-purple-400 rounded-md px-2 py-1 w-full h-[37px]"
                {...register('email', {
                  required: 'Ingresa tu correo',
                })}
              />
            </div>

            <div>
              <label htmlFor="password" className="inline-block mb-1">
                Contraseña
              </label>
              <input
                type="password"
                id="password"
                placeholder="Ingresa tu contraseña"
                className="border border-purple-400 rounded-md px-2 py-1 w-full h-[37px]"
                {...register('password', {
                  required: 'Ingresa tu contraseña',
                })}
              />
            </div>

            <div className="pt-2">
              <input
                type="submit"
                value="Iniciar Sesión"
                className="bg-green-500 rounded-md py-2 px-3 block mx-auto font-bold text-white border border-green-500 hover:bg-green-300 hover:text-black transition-colors hover:cursor-pointer"
              />
            </div>
          </form>
          <div className="mt-5">
            <p className="block w-fit mx-auto">
              ¿Aún no tienes cuenta?{' '}
              <Link
                to="/signup"
                className="text-purple-600 font-semibold underline underline-offset-2 hover:text-purple-400 visited:text-purple-800"
              >
                Regístrate
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
