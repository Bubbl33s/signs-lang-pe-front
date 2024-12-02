import { UploadContentForm } from '../components';

export default function Upload() {
  return (
    <main>
      <div className="rounded-lg border border-purple-400 p-4">
        <h3 className="text-center text-lg mb-3">Agregar contenido</h3>

        <UploadContentForm />
      </div>
    </main>
  );
}
