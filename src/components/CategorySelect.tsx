import { useState } from 'react';
import '../assets/styles/CategorySelect.css';
import useSigns from '../hooks/useSigns';
import { Category } from '../types';

export default function CategorySelect() {
  const { state } = useSigns();
  const [currentCategory, setCurrentCategory] = useState({} as Category | null);

  return (
    <div className="flex gap-1">
      <select
        id="categories"
        className="bg-gray-50 border border-purple-400 text-gray-900 text-sm rounded-md focus:ring-purple-500 focus:border-purple-500 block w-full p-2"
        onChange={(e) =>
          setCurrentCategory(
            e.target.value !== ''
              ? state.categories.find(
                  (category) => category._id === e.target.value
                ) || null
              : null
          )
        }
      >
        <option value={''}>Todas las categorías</option>
        {state.categories.map((category) => (
          <option key={category._id} value={category._id}>
            {' '}
            {category.name}
          </option>
        ))}
      </select>

      <div className="logo p-1">
        <img
          src={currentCategory?.icon || '/dot.svg'}
          alt=""
          className="w-8 text-purple-600"
        />
      </div>
    </div>
  );
}
