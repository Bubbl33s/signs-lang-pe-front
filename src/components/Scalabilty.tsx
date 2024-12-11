export default function Scalabilty() {
  return (
    <div className="px-4 text-gray-700">
      <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 text-center text-purple-600">
        Escalabilidad y Futuro del Proyecto
      </h2>
      <p className="text-sm sm:text-base lg:text-lg mb-3">
        Actualmente, la plataforma permite únicamente la{' '}
        <b>subida de imágenes</b> para representar las señas. Sabemos que muchas
        señas requieren movimiento para ser correctamente interpretadas, y
        entendemos la importancia de incorporar esta característica. Por ello,
        estamos trabajando en una futura actualización que permitirá la{' '}
        <b>carga de videos</b> para reflejar con mayor precisión las señas que
        incluyen dinámicas de movimiento.
      </p>
      <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-2 text-purple-500">
        ¿Por qué subir múltiples imágenes para una misma seña?
      </h3>
      <p className="text-sm sm:text-base lg:text-lg mb-2">
        Subir diferentes imágenes de una misma seña es crucial para el
        desarrollo de este proyecto. Estas imágenes serán utilizadas para{' '}
        <b>entrenar un modelo de inteligencia artificial</b> capaz de reconocer
        señas en tiempo real.
      </p>
      <ul className="mb-3 list-disc list-inside space-y-2 ps-2 lg:ps-4">
        <li className="text-sm sm:text-base lg:text-lg">
          Cada imagen aporta diversidad al conjunto de datos, lo que mejora la
          precisión del modelo para identificar una seña en distintas
          condiciones, como ángulos, iluminación o estilos de ejecución.
        </li>
        <li className="text-sm sm:text-base lg:text-lg">
          Con el tiempo, este modelo se integrará como un{' '}
          <b>diccionario en tiempo real</b>, ayudando a las personas a buscar y
          aprender señas de forma rápida y efectiva.
        </li>
      </ul>
      <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-2 text-purple-500">
        Tu apoyo marca la diferencia
      </h3>
      <p className="text-sm sm:text-base lg:text-lg mb-3">
        Cada imagen que subes contribuye al desarrollo de un futuro en el que la
        tecnología sea una herramienta para derribar barreras de comunicación.
        Gracias a tu participación, este proyecto podrá escalar y beneficiar a
        más personas.
      </p>
      <div className="text-center">
        <p className="text-sm sm:text-base lg:text-lg font-semibold text-gray-600">
          ¡Únete a este esfuerzo y sé parte del cambio hacia una sociedad más
          inclusiva!
        </p>
      </div>
    </div>
  );
}
