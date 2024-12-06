export default function Login() {
  return (
    <main>
      <div className="w-full">
        <header className="bg-purple-600 text-white rounded-t-lg py-2">
          <h3 className="text-center text-xl font-bold">Iniciar Sesión</h3>
        </header>
        <div className="rounded-lg border border-purple-400 border-t-0 rounded-t-none p-4 pb-5">
          <form className="space-y-3">
            <div>
              <label htmlFor="email" className="mb-1">
                Correo
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Ingresa tu correo"
                className="mb-2 border border-purple-400 rounded-md px-2 py-1 w-full h-[37px]"
              />
            </div>

            <div>
              <label htmlFor="password" className="mb-1">
                Contraseña
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Ingresa tu contraseña"
                className="mb-2 border border-purple-400 rounded-md px-2 py-1 w-full h-[37px]"
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
