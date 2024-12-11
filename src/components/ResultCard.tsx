import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import useSigns from '../hooks/useSigns';
import { Label } from '../types';

export default function ResultCard({
  _id,
  name,
  reliability,
  primaryContent,
  categoryId,
  verifiedCount,
}: Label) {
  const { state } = useSigns();
  const [category, setCategory] = useState<string>('');

  useEffect(() => {
    setCategory(
      state.categories.find((category) => category._id === categoryId)?.name ||
        ''
    );
  }, [state.categories, categoryId]);

  return (
    <article className="border border-green-300 rounded-lg p-4 hover:cursor-pointer hover:bg-green-50 hover:shadow-lg transition-all h-fit">
      <Link to={`/search/${_id}`}>
        <img
          src={primaryContent?.url || 'https://via.placeholder.com/300'}
          alt="placeholder"
          className="rounded-xl mb-4 h-44 object-cover block mx-auto"
        />
        <footer className="flex justify-between items-start">
          <div className="flex flex-col gap-1">
            <h3 className="font-bold md:text-lg lg:text-xl">{name}</h3>
            <p className="text-sm lg:text-base">{category}</p>
          </div>
          <div className="text-sm flex flex-col items-end gap-1 mt-[2px] md:gap-2">
            <p className="font-semibold text-purple-800 bg-purple-200 w-fit px-3 py-[2px] rounded-xl">
              Confiabilidad:
              <span> {reliability}%</span>
            </p>
            <p className="text-gray-600">
              {`${verifiedCount} ${verifiedCount === 1 ? 'aporte' : 'aportes'}`}
            </p>
          </div>
        </footer>
      </Link>
    </article>
  );
}
