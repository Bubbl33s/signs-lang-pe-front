import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../context/AuthContext';

import { useNavigate, Link } from 'react-router';
import { onErrors } from '../helpers/onErrors';
import { AuthService } from '../services/authService';
import { showToast } from '../helpers/toastify';

enum Role {
  User = 'user',
  Moderator = 'moderator',
}

type FormData = {
  fullName: string;
  email: string;
  password: string;
  passwordConfirm: string;
  username: string;
  isDeafMute: boolean;
  knowsSignLanguage: boolean;
  role: Role;
};

export default function Signup() {
  const { login } = useContext(AuthContext);
  const { register, handleSubmit, setValue, reset } = useForm<FormData>();
  const navigate = useNavigate();

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\s/g, '');
    setValue('username', value);
  };

  const onSubmit = async (data: FormData) => {
    console.log(data);

    if (data.password !== data.passwordConfirm) {
      showToast({
        text: 'Las contraseñas no coinciden',
        color: 'error',
      });
      return;
    }

    data.role = data.knowsSignLanguage ? Role.Moderator : Role.User;

    const response = await AuthService.signup(data);

    if (response?.status == 201 || response?.status == 200) {
      login(response.data.token, response.data.user);
      reset();

      showToast({
        text: 'Usuario creado',
        color: 'success',
      });

      navigate('/profile');
    } else {
      showToast({
        text: 'Error al crear cuenta',
        color: 'error',
      });
    }
  };

  return (
    <main className="mx-auto container max-w-xl">
      <div className="w-full">
        <header className="bg-purple-600 text-white rounded-t-lg py-2">
          <h3 className="text-center text-xl font-bold">Registrarse</h3>
        </header>
        <div className="rounded-lg border border-purple-400 border-t-0 rounded-t-none p-4 pb-5">
          <form
            className="space-y-3"
            onSubmit={handleSubmit(onSubmit, onErrors)}
          >
            <div>
              <label htmlFor="fullName" className="inline-block mb-1">
                Nombre Completo
              </label>
              <input
                type="text"
                id="fullName"
                placeholder="Ingresa tu nombre"
                className="border border-purple-400 rounded-md px-2 py-1 w-full h-[37px]"
                {...register('fullName', {
                  required: 'Ingresa tu nombre',
                  validate: {
                    minLength: (value) =>
                      value.length >= 6 ||
                      'El nombre debe tener al menos 6 caracteres',
                    maxLength: (value) =>
                      value.length <= 100 ||
                      'El nombre no debe exceder los 100 caracteres',
                  },
                })}
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
                  validate: (value) =>
                    /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*_])/.test(value) ||
                    'La contraseña debe contener al menos una letra mayúscula, un número y un carácter especial',
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
                Nickname
              </label>
              <input
                type="text"
                id="username"
                placeholder="Ingresa tu nombre de usuario"
                className="border border-purple-400 rounded-md px-2 py-1 w-full h-[37px]"
                {...register('username', {
                  required: 'Ingresa tu nickname',
                  validate: (value) =>
                    !/\s/.test(value) ||
                    'No se permiten espacios en el nombre de usuario',
                  minLength: {
                    value: 6,
                    message: 'El nickname debe tener al menos 6 caracteres',
                  },
                  maxLength: {
                    value: 25,
                    message: 'El nickname no debe exceder los 25 caracteres',
                  },
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
