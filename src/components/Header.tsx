import { HandIndex } from 'react-bootstrap-icons';

export default function Header() {
  return (
    <header className="text-center p-4">
      <div className="flex items-center justify-center font-black mb-2 text-purple-600 gap-2">
        <HandIndex className="text-xl max-[350px]:hidden" />
        <h1 className="text-2xl text-nowrap sm:text-3xl">
          Lengua de Señas Peruana
        </h1>
      </div>
      <p className="text-gray-700 text-nowrap">
        Descubre y comparte el lenguaje de señas
      </p>
    </header>
  );
}
