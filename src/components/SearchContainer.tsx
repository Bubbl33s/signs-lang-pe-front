export default function SearchContainer() {
  return (
    <section className="rounded-lg bg-white border border-purple-400 overflow-hidden">
      <header className="bg-purple-600 text-white p-5">
        <h2 className="font-semibold text-2xl mb-1">Buscar Señas</h2>
        <p className="text-sm">
          Encuentra imágenes de señas para palabras en la lengua de señas
          peruana.
        </p>
      </header>

      <div className="p-5">
        <div className="mb-4">
          <input
            type="text"
            placeholder="Buscar palabra..."
            className="border border-purple-400 rounded-md px-2 py-1"
          />
        </div>
        <p className="mb-2">Coincidencias</p>

        <article className="border border-green-300 rounded-lg p-4">
          <img
            src="https://via.placeholder.com/300"
            alt="placeholder"
            className="rounded-xl mb-3"
          />
          <footer>
            <h3 className="font-bold mb-1">Palabra de ejemplo</h3>
            <p className="text-sm font-semibold text-purple-800 bg-purple-200 w-fit px-3 py-[2px] rounded-xl">
              Confiabilidad:
              <span> 85%</span>
            </p>
          </footer>
        </article>
      </div>
    </section>
  );
}
