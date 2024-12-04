import '../assets/styles/CategorySelect.css';
import useSigns from '../hooks/useSigns';

type CategorySelectProps = {
  defaultText?: string;
};

export default function CategorySelect({
  defaultText = 'Todas las categorías',
}: CategorySelectProps) {
  const { state, dispatch } = useSigns();

  return (
    <div className="flex gap-1">
      <select
        id="category-id"
        className="bg-gray-50 border border-purple-400 text-gray-900 text-sm rounded-md focus:ring-purple-500 focus:border-purple-500 block w-full p-2"
        onChange={(e) =>
          dispatch({
            type: 'set-current-category',
            payload:
              e.target.value !== ''
                ? state.categories.find(
                    (category) => category._id === e.target.value
                  ) || null
                : null,
          })
        }
      >
        <option value={''}>{defaultText}</option>
        {state.categories.map((category) => (
          <option key={category._id} value={category._id}>
            {' '}
            {category.name}
          </option>
        ))}
      </select>

      <div className="logo p-1">
        <img
          src={state.currentCategory?.icon || '/dot.svg'}
          alt=""
          className="w-8 text-purple-600"
        />
      </div>
    </div>
  );
}
