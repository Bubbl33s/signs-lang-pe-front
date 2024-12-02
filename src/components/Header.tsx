import { HandIndex } from 'react-bootstrap-icons';

export default function Header() {
  return (
    <header className="p-2 text-center">
      <div className="flex items-center font-black mb-3 text-purple-600">
        <HandIndex className="text-3xl" />
        <h1 className="text-4xl">Lengua de Señas Peruana</h1>
      </div>
      <p className="text-gray-700">
        Descubre, aprende y comparte el lenguaje de señas
      </p>
    </header>
  );
}
