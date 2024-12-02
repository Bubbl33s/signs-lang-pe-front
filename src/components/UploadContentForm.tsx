import { useEffect, useState } from 'react';
import useSigns from '../hooks/useSigns';
import DragDrop from './DragDrop';
import CategorySelect from './CategorySelect';
import LabelSelect from './LabelSelect';

export default function UploadContentForm() {
  const [isRegistered, setIsRegistered] = useState(true);
  const { state } = useSigns();
  const [filteredList, setFilteredList] = useState(state.signsList);

  useEffect(() => {
    setFilteredList(
      state.signsList.filter((sign) =>
        state.currentCategory
          ? sign.categoryId === state.currentCategory._id
          : sign
      )
    );
  }, [state.currentCategory, state.signsList]);

  return (
    <form className="space-y-3 divide-y-2 divide-purple-200">
      <div>
        <label className="inline-flex items-center cursor-pointer gap-3">
          <span
            className={`font-medium ${
              isRegistered ? 'text-gray-900' : 'text-gray-400'
            }`}
          >
            Palabra registrada
          </span>
          <input
            type="checkbox"
            id="is-registered"
            value=""
            className="sr-only peer"
            onChange={(e) => setIsRegistered(!e.target.checked)}
          />
          <div className="relative w-11 h-6 bg-purple-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-500"></div>
          <span
            className={`font-medium ${
              isRegistered ? 'text-gray-400' : 'text-gray-900'
            }`}
          >
            Nueva palabra
          </span>
        </label>
      </div>

      <div className="pt-3">
        <div className="mb-3">
          <label htmlFor="categories">Categorías</label>
          <CategorySelect defaultText="Selecciona una categoría" />
        </div>

        <div>
          <label htmlFor={isRegistered ? 'label' : 'label-name'}>Palabra</label>
          {isRegistered ? (
            <LabelSelect labels={filteredList} />
          ) : (
            <input
              type="text"
              id="label-name"
              className="bg-gray-50 border border-purple-400 text-gray-900 text-sm rounded-md focus:ring-purple-500 focus:border-purple-500 block w-full p-2 h-[37px]"
              placeholder="Ingresa la palabra"
            />
          )}
        </div>
      </div>
      <div className="pt-3">
        <DragDrop />
      </div>
    </form>
  );
}
