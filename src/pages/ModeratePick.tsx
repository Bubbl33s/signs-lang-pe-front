import { Link } from 'react-router';
import useSigns from '../hooks/useSigns';

export default function ModeratePick() {
  const { state } = useSigns();

  return (
    <ul className="space-y-2">
      {state.signsList.map((sign) => (
        <li key={sign._id}>
          <Link
            to={`../label/${sign._id}`}
            className="rounded-lg bg-purple-600 text-white py-2 px-4 flex justify-between items-center font-semibold text-base hover:bg-purple-300 hover:text-purple-600 hover:cursor-pointer transition-colors"
          >
            <h2>{sign.name}</h2>
            <p>{sign.unverifiedCount} pendientes</p>
          </Link>
        </li>
      ))}
    </ul>
  );
}
