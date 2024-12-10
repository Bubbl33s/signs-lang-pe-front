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
    <ul className="space-y-2">
      {filteredSigns.map((sign) => (
        <li key={sign._id}>
          <Link
            to={`../label/${sign._id}`}
            className="rounded-lg bg-purple-600 text-white py-2 px-4 flex justify-between items-center font-semibold text-base hover:bg-purple-300 hover:text-purple-600 hover:cursor-pointer hover:shadow-lg transition-all"
          >
            <h2>{sign.name}</h2>
            <p>{sign.unverifiedCount} pendientes</p>
          </Link>
        </li>
      ))}
    </ul>
  ) : (
    <p className="my-3 text-center">
      No hay etiquetas pendientes de moderación
    </p>
  );
}
