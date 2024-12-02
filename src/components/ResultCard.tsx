export default function ResultCard() {
  return (
    <article className="border border-green-300 rounded-lg p-4">
      <img
        src="https://via.placeholder.com/300"
        alt="placeholder"
        className="rounded-xl mb-3 w-full"
      />
      <footer>
        <h3 className="font-bold mb-1">Palabra de ejemplo</h3>
        <p className="text-sm font-semibold text-purple-800 bg-purple-200 w-fit px-3 py-[2px] rounded-xl">
          Confiabilidad:
          <span> 85%</span>
        </p>
      </footer>
    </article>
  );
}
