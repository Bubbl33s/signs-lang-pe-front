import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../context/AuthContext';

import { useNavigate, Link } from 'react-router';

type FormData = {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
  username: string;
  isDeafMute: boolean;
  knowsSignLanguage: boolean;
};

export default function Signup() {
  const { login } = useContext(AuthContext);
  const { register, handleSubmit, setValue, reset } = useForm<FormData>();
  const navigate = useNavigate();

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\s/g, '');
    setValue('username', value);
  };

  return (
    <main>
      <div className="w-full">
        <header className="bg-purple-600 text-white rounded-t-lg py-2">
          <h3 className="text-center text-xl font-bold">Registrarse</h3>
        </header>
        <div className="rounded-lg border border-purple-400 border-t-0 rounded-t-none p-4 pb-5">
          <form
            className="space-y-3"
            // onSubmit={handleSubmit(onSubmit, onErrors)}
          >
            <div>
              <label htmlFor="name" className="inline-block mb-1">
                Nombre Completo
              </label>
              <input
                type="text"
                id="name"
                placeholder="Ingresa tu nombre"
                className="border border-purple-400 rounded-md px-2 py-1 w-full h-[37px]"
                // {...register('email', {
                //   required: 'Ingresa tu correo',
                // })}
              />
            </div>

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

            <div>
              <label htmlFor="password-confirm" className="inline-block mb-1">
                Confirmar Contraseña
              </label>
              <input
                type="password"
                id="password-confirm"
                placeholder="Confirma tu contraseña"
                className="border border-purple-400 rounded-md px-2 py-1 w-full h-[37px]"
                {...register('passwordConfirm', {
                  required: 'Confirma tu contraseña',
                })}
              />
            </div>

            <div>
              <label htmlFor="username" className="inline-block mb-1">
                Nombre de Usuario
              </label>
              <input
                type="text"
                id="username"
                placeholder="Ingresa tu nombre de usuario"
                className="border border-purple-400 rounded-md px-2 py-1 w-full h-[37px]"
                {...register('username', {
                  required: 'El nombre de usuario es obligatorio',
                  validate: (value) =>
                    !/\s/.test(value) ||
                    'No se permiten espacios en el nombre de usuario',
                })}
                onChange={handleUsernameChange}
              />
            </div>

            <div className="pt-1">
              <div className="flex gap-2">
                <input
                  type="checkbox"
                  id="isDeafMute"
                  className="accent-purple-500"
                  {...register('isDeafMute')}
                />
                <label htmlFor="isDeafMute" className="mt-[3px]">
                  Soy una persona sordo-muda
                </label>
              </div>

              <div className="flex gap-2">
                <input
                  type="checkbox"
                  id="knowsSignLanguage"
                  className="accent-purple-500"
                  {...register('knowsSignLanguage')}
                />
                <label htmlFor="knowsSignLanguage" className="mt-[3px]">
                  Conozco el lenguaje de señas
                </label>
              </div>
            </div>

            <div className="pt-2">
              <input
                type="submit"
                value="Crear cuenta"
                className="bg-green-500 rounded-md py-2 px-3 block mx-auto font-bold text-white border border-green-500 hover:bg-green-300 hover:text-black transition-colors hover:cursor-pointer"
              />
            </div>
          </form>
          <div className="mt-5">
            <p className="block w-fit mx-auto">
              ¿Ya tienes cuenta?{' '}
              <Link
                to="/login"
                className="text-purple-600 font-semibold underline underline-offset-2 hover:text-purple-400 visited:text-purple-800"
              >
                Inicia Sesión
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
