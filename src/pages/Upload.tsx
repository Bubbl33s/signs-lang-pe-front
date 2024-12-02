import { UploadContentForm } from '../components';

export default function Upload() {
  return (
    <main className="overflow-hidden">
      <header className="bg-purple-600 text-white rounded-t-lg py-2">
        <h3 className="text-center text-lg font-bold">Agregar contenido</h3>
      </header>
      <div className="rounded-lg border border-purple-400 border-t-0 rounded-t-none p-4 pt-6">
        <UploadContentForm />
      </div>
    </main>
  );
}
