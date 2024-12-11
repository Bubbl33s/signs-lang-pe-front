export default function HowToContribute() {
  return (
    <div className="px-4 text-gray-700">
      <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 text-center text-purple-600">
        Cómo Contribuir
      </h2>
      <p className="text-sm sm:text-base lg:text-lg mb-3">
        Este proyecto ofrece dos formas principales para que los usuarios puedan
        contribuir al crecimiento y la calidad del contenido disponible en la
        plataforma.
      </p>
      <div className="mb-4">
        <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-2 text-purple-500">
          1. Subir contenido
        </h3>
        <ul className="list-decimal list-inside space-y-2 ps-2 lg:ps-4">
          <li className="text-sm sm:text-base lg:text-lg">
            Puedes contribuir subiendo nuevas palabras o frases, o añadiendo
            contenido a palabras ya existentes en los registros.
          </li>
          <li className="text-sm sm:text-base lg:text-lg">
            Asegúrate de incluir la categoría adecuada para cada palabra o frase
            (por ejemplo, salud, educación, tecnología, etc.).
          </li>
          <li className="text-sm sm:text-base lg:text-lg">
            Es necesario iniciar sesión para poder subir contenido. Esto nos
            permite garantizar la calidad y trazabilidad de las contribuciones.
          </li>
        </ul>
      </div>
      <div className="mb-4">
        <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-2 text-purple-500">
          2. Verificar contenido
        </h3>
        <ul className="list-decimal list-inside space-y-2 ps-2 lg:ps-4">
          <li className="text-sm sm:text-base lg:text-lg">
            Las personas con el rol de moderador pueden verificar el contenido
            subido por los usuarios.
          </li>
          <li className="text-sm sm:text-base lg:text-lg">
            Este proceso consiste en validar la exactitud y la calidad del
            contenido aportado.
          </li>
          <li className="text-sm sm:text-base lg:text-lg">
            Una vez verificado, el contenido validado será visible en las
            búsquedas realizadas por otros usuarios.
          </li>
        </ul>
      </div>
      <p className="text-sm sm:text-base lg:text-lg mt-6">
        ¡Gracias por contribuir a la difusión y crecimiento del Lenguaje de
        Señas Peruano! Tu participación ayuda a construir una comunidad más
        inclusiva y conectada.
      </p>
    </div>
  );
}
