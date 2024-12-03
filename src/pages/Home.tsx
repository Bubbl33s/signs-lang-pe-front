import { useMemo } from 'react';
import { ResultCard, CategorySelect } from '../components';
import useSigns from '../hooks/useSigns';

export default function Home() {
  const { state } = useSigns();
  const filteredList = useMemo(
    () =>
      state.signsList.filter((sign) =>
        state.currentCategory
          ? sign.categoryId === state.currentCategory._id
          : sign
      ),
    [state.currentCategory, state.signsList]
  );

  return (
    <main>
      <section className="rounded-lg bg-white overflow-hidden">
        <header className="bg-purple-600 text-white p-5">
          <h2 className="font-semibold text-2xl mb-1">Buscar Señas</h2>
          <p className="text-sm">
            Encuentra imágenes de señas para palabras en la lengua de señas
            peruana.
          </p>
        </header>

        <div className="p-5 rounded-b-lg border border-purple-400 border-t-0">
          <div className="mb-4">
            <input
              type="text"
              placeholder="Buscar palabra..."
              className="mb-2 border border-purple-400 rounded-md px-2 py-1 w-full h-[37px]"
            />

            <CategorySelect />
          </div>
          <section className="space-y-4">
            {filteredList.map((sign) => (
              <ResultCard key={sign._id} {...sign} />
            ))}
          </section>
        </div>
      </section>
    </main>
  );
}
