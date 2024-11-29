export default function Navbar() {
  return (
    <nav className="bg-purple-200 rounded-lg p-1">
      <ul className="font-medium flex text-center">
        <li className="flex-1 py-1 bg-gray-50 rounded-md">
          <a href="/">Buscar</a>
        </li>
        <li className="text-gray-400 flex-1 py-1">
          <a href="/about">Cargar</a>
        </li>
        <li className="text-gray-400 flex-1 py-1">
          <a href="/contact">Moderar</a>
        </li>
      </ul>
    </nav>
  );
}
