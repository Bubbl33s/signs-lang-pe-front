export default function AboutUs() {
  return (
    <div className="px-4 text-gray-700">
      <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 text-center text-purple-600">
        Sobre Este Proyecto
      </h2>
      <p className="text-sm sm:text-base lg:text-lg mb-3">
        Este proyecto tiene como objetivo promover la inclusión y la
        accesibilidad, proporcionando una plataforma para aprender, compartir y
        explorar el Lenguaje de Señas Peruano (LSP). La lengua de señas es un
        medio vital de comunicación para la comunidad sorda, y este sitio busca
        crear un espacio donde todos puedan aprender y contribuir al
        reconocimiento y la difusión de esta importante herramienta de
        expresión.
      </p>
      <div className="mb-4">
        <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-3 text-purple-500">
          ¿Qué encontrarás aquí?
        </h3>
        <ul className="list-disc list-inside space-y-1 ps-2 lg:ps-4">
          <li className="text-sm sm:text-base lg:text-lg">
            <span className="font-medium text-purple-600">
              Buscador de Señales:
            </span>{' '}
            Encuentra señales específicas para palabras o frases comunes en el
            LSP.
          </li>
          <li className="text-sm sm:text-base lg:text-lg">
            <span className="font-medium text-purple-600">Galería Visual:</span>{' '}
            Una colección de imágenes y videos que muestran cómo realizar cada
            señal.
          </li>
          <li className="text-sm sm:text-base lg:text-lg">
            <span className="font-medium text-purple-600">
              Contribuciones de la Comunidad:
            </span>{' '}
            Una sección donde los usuarios pueden añadir nuevas señales,
            aportando al crecimiento del contenido disponible.
          </li>
          <li className="text-sm sm:text-base lg:text-lg">
            <span className="font-medium text-purple-600">
              Cuenta Personalizada:
            </span>{' '}
            Crea tu cuenta para guardar tus señales favoritas, contribuir al
            proyecto y participar en la comunidad.
          </li>
        </ul>
      </div>
      <div>
        <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-2 text-purple-500">
          ¿Por qué este proyecto?
        </h3>
        <p className="text-sm mb-3 sm:text-base lg:text-lg">
          En Perú, como en muchos otros países, las barreras de comunicación
          afectan profundamente a las personas sordas. Creemos que la tecnología
          puede ayudar a derribar estas barreras, brindando herramientas
          accesibles para aprender la lengua de señas y promoviendo una sociedad
          más inclusiva.
        </p>
      </div>
    </div>
  );
}
