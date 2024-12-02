import { ResultCard } from '../components';
import useSigns from '../hooks/useSigns';

export default function Home() {
  const { state } = useSigns();

  return (
    <main>
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

          {state.signsList.map((sign) => (
            <ResultCard key={sign._id} {...sign} />
          ))}
        </div>
      </section>
    </main>
  );
}
