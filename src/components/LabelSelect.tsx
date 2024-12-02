import { Label } from '../types';

export default function LabelSelect({ labels }: { labels: Label[] }) {
  return (
    <div className="flex gap-1">
      <select
        id="label"
        className="bg-gray-50 border border-purple-400 text-gray-900 text-sm rounded-md focus:ring-purple-500 focus:border-purple-500 block w-full p-2"
        disabled={labels.length === 0}
      >
        {labels.length === 0 && (
          <option selected value="No hay entradas" disabled>
            No hay entradas
          </option>
        )}
        {labels.map((label) => (
          <option key={label._id} value={label._id}>
            {' '}
            {label.name}
          </option>
        ))}
      </select>
    </div>
  );
}
