import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import useSigns from '../hooks/useSigns';
import { LabelService } from '../services/labelService';
import { LoadingSpinner } from '../components';

export default function ModeratePick() {
  const { state, dispatch } = useSigns();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const labels = await LabelService.getSigns();
      dispatch({ type: 'set-signs-list', payload: labels });

      setLoading(false);
    })();
  }, [dispatch]);

  return loading ? (
    <LoadingSpinner />
  ) : (
    <ul className="space-y-2">
      {state.signsList.map(
        (sign) =>
          sign.unverifiedCount > 0 && (
            <li key={sign._id}>
              <Link
                to={`../label/${sign._id}`}
                className="rounded-lg bg-purple-600 text-white py-2 px-4 flex justify-between items-center font-semibold text-base hover:bg-purple-300 hover:text-purple-600 hover:cursor-pointer transition-colors"
              >
                <h2>{sign.name}</h2>
                <p>{sign.unverifiedCount} pendientes</p>
              </Link>
            </li>
          )
      )}
    </ul>
  );
}
