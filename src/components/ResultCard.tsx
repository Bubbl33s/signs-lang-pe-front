import { Link } from 'react-router';
import { Label } from '../types';

export default function ResultCard({
  _id,
  name,
  reliability,
  primaryContent,
}: Label) {
  return (
    <article className="border border-green-300 rounded-lg p-4 hover:cursor-pointer hover:bg-green-50 hover:shadow-lg transition-all">
      <Link to={`/search/${_id}`}>
        <img
          src={primaryContent?.url || 'https://via.placeholder.com/300'}
          alt="placeholder"
          className="rounded-xl mb-3 h-44 object-cover block mx-auto"
        />
        <footer>
          <h3 className="font-bold mb-1">{name}</h3>
          <p className="text-sm font-semibold text-purple-800 bg-purple-200 w-fit px-3 py-[2px] rounded-xl">
            Confiabilidad:
            <span> {reliability}%</span>
          </p>
        </footer>
      </Link>
    </article>
  );
}
