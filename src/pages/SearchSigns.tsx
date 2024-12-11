import { useMemo, useEffect, useState } from 'react';
import { ResultCard, CategorySelect } from '../components';
import useSigns from '../hooks/useSigns';
import { Link } from 'react-router';
import Fuse from 'fuse.js';
import { ArrowBarRight } from 'react-bootstrap-icons';

export default function SearchSigns() {
  const { state, dispatch } = useSigns();
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredList, setFilteredList] = useState(state.signsList);
  const [searchingByWord, setSearchingByWord] = useState(false);

  const fuse = useMemo(
    () =>
      new Fuse(state.signsList, {
        keys: ['name'],
        threshold: 0.3,
      }),
    [state.signsList]
  );

  useEffect(() => {
    dispatch({ type: 'set-current-category', payload: null });
  }, []);

  const filteredByCategory = useMemo(
    () =>
      state.signsList.filter((sign) =>
        state.currentCategory
          ? sign.categoryId === state.currentCategory._id
          : sign
      ),
    [state.currentCategory, state.signsList]
  );

  useEffect(() => {
    const filteredByCategoryAndSearch = state.currentCategory
      ? filteredByCategory.filter((sign) =>
          fuse
            .search(searchQuery)
            .some((result) => result.item._id === sign._id)
        )
      : fuse.search(searchQuery).map((result) => result.item);

    if (searchQuery.trim() === '') {
      setFilteredList(filteredByCategory);
      setSearchingByWord(false);
    } else {
      setFilteredList(filteredByCategoryAndSearch);
      setSearchingByWord(true);
    }
  }, [searchQuery, filteredByCategory, fuse, state.currentCategory]);

  return (
    <main className="max-w-xl mx-auto md:container">
      <section className="rounded-lg bg-white overflow-hidden">
        <header className="bg-purple-600 text-white p-3 sm:p-5">
          <h2 className="font-semibold text-xl mb-1 sm:text-2xl">
            Buscar Señas
          </h2>
          <p className="text-sm">
            Encuentra imágenes de señas para palabras en la lengua de señas
            peruana.
          </p>
        </header>

        <div className="p-5 min-h-96 rounded-b-lg border border-purple-400 border-t-0 lg:flex lg:gap-8 lg:min-h-[500px]">
          <div className="mb-4 md:flex md:items-start md:gap-5 lg:flex-col lg:gap-2">
            <div className="md:flex-1 lg:flex-none lg:w-full">
              <label htmlFor="word" className="mb-1 block">
                Palabra
              </label>
              <input
                type="text"
                id="word"
                placeholder="Buscar palabra..."
                onChange={(e) => setSearchQuery(e.target.value)}
                className="mb-2 border border-purple-400 rounded-md px-2 py-1 w-full h-[37px]"
              />
            </div>

            <div className="flex-1 lg:flex-none">
              <label htmlFor="categories">Categoría</label>
              <div className="mt-1">
                <CategorySelect />
              </div>
            </div>
          </div>

          {filteredList.length > 0 ? (
            <section className="space-y-4 sm:grid sm:grid-cols-2 sm:space-y-0 sm:gap-3 md:flex-1 2xl:grid-cols-3">
              {filteredList.map((sign) => (
                <ResultCard key={sign._id} {...sign} />
              ))}
            </section>
          ) : (
            <div className="py-3 flex flex-col justify-center items-center gap-3 lg:flex-1">
              {searchingByWord ? (
                <p className="text-center text-gray-500">
                  No hemos encontrado la palabra que buscas. ¡Sé el primero en
                  aportar!
                </p>
              ) : (
                <p className="text-center text-gray-500">
                  Aún no se han hecho aportes para esta categoría. ¡Sé el
                  primero en contribuir!
                </p>
              )}

              <Link
                to={'/contribute/upload'}
                className="w-fit flex items-center gap-1 bg-purple-300 border border-purple-500 rounded-md py-2 px-3 text-sm font-semibold hover:bg-purple-500 hover:text-white transition-colors"
              >
                <p>Cargar imágenes</p>
                <ArrowBarRight />
              </Link>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
