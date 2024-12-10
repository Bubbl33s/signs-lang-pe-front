import { Label } from '../types';

type LabelSelectProps = {
  labels: Label[];
  setLabelId: (labelId: string) => void;
};

export default function LabelSelect({ labels, setLabelId }: LabelSelectProps) {
  return (
    <div className="flex gap-1">
      <select
        id="label-id"
        className="bg-gray-50 border border-purple-400 text-gray-900 text-sm rounded-md focus:ring-purple-500 focus:border-purple-500 block w-full p-2"
        disabled={labels.length === 0}
        onChange={(e) => setLabelId(e.target.value)}
      >
        {labels.length === 0 ? (
          <option selected value="No hay entradas">
            No hay entradas
          </option>
        ) : (
          <option selected value="">
            Selecciona la palabra
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
