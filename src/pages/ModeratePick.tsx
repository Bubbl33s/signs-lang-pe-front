import useSigns from '../hooks/useSigns';

export default function ModeratePick() {
  const { state } = useSigns();

  return (
    <div className="space-y-2">
      {state.signsList.map((sign) => (
        <div
          key={sign._id}
          className="rounded-lg bg-purple-600 text-white py-2 px-4 flex justify-between items-center font-semibold text-base hover:bg-purple-300 hover:text-purple-600 hover:cursor-pointer transition-colors"
        >
          <h2>{sign.name}</h2>
          <p>{sign.unverifiedCount}</p>
        </div>
      ))}
    </div>
  );
}
