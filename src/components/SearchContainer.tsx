export default function SearchContainer() {
  return (
    <section>
      <header>
        <h2>Buscar Señas</h2>
        <p>
          Encuentra imágenes de señas para palabras en la lengua de señas
          peruana
        </p>
      </header>

      <div>
        <input type="text" placeholder="Buscar palabra..." />
      </div>
      <p>Coincidencias</p>

      <article>
        <img src="" alt="" />
        <footer>
          <h3>Palabra de ejemplo</h3>
          <p>
            Confiabilidad:
            <span>85%</span>
          </p>
        </footer>
      </article>
    </section>
  );
}
