import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import useSigns from '../hooks/useSigns';
import { LabelService } from '../services/labelService';
import { LoadingSpinner } from '../components';
import { Label } from '../types';

export default function ModeratePick() {
  const { state, dispatch } = useSigns();
  const [loading, setLoading] = useState(true);
  const [filteredSigns, setFilteredSigns] = useState<Label[]>([]);

  useEffect(() => {
    setFilteredSigns(
      state.signsList.filter((sign) => sign.unverifiedCount > 0)
    );
  }, [state.signsList]);

  useEffect(() => {
    (async () => {
      const labels = await LabelService.getSigns();
      dispatch({ type: 'set-signs-list', payload: labels });

      setLoading(false);
    })();
  }, [dispatch]);

  return loading ? (
    <LoadingSpinner />
  ) : filteredSigns.length > 0 ? (
    <div>
      <ul className="space-y-2 sm:grid sm:grid-cols-2 sm:space-y-0 sm:gap-3 lg:grid-cols-3">
        {filteredSigns.map((sign) => (
          <li key={sign._id}>
            <Link
              to={`../label/${sign._id}`}
              className="rounded-lg bg-purple-600 text-white py-2 px-4 flex justify-between items-center text-base hover:bg-purple-300 hover:text-purple-600 hover:cursor-pointer hover:shadow-lg transition-all sm:flex sm:flex-col sm:py-4"
            >
              <h2 className="font-semibold sm:text-xl">{sign.name}</h2>
              <p>{sign.unverifiedCount} pendientes</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  ) : (
    <p className="my-3 text-center">
      No hay etiquetas pendientes de moderación
    </p>
  );
}
