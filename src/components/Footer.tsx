import { useState } from 'react';
import InfoModal from './InfoModal';
import { HandIndex } from 'react-bootstrap-icons';

export default function Footer() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState<{
    title: string;
    content: React.ReactNode;
  }>({
    title: '',
    content: null,
  });

  const openModal = (title: string, content: React.ReactNode) => {
    setModalContent({ title, content });
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <footer className="bg-purple-600 text-white p-3">
        <div className="flex gap-2 justify-center">
          <HandIndex className="text-xl" />
          <h2 className="text-lg font-semibold">Lengua de Señas Peruana</h2>
        </div>
        <section className="flex justify-center gap-4 mt-2">
          <button
            onClick={() => openModal('Sobre este proyecto', <div></div>)}
            className="bg-white text-purple-600 px-4 py-2 rounded-md hover:bg-purple-500 hover:text-white"
          >
            Sobre este proyecto
          </button>
          <button
            onClick={() => openModal('Cómo contribuir', <div></div>)}
            className="bg-white text-purple-600 px-4 py-2 rounded-md hover:bg-purple-500 hover:text-white"
          >
            Cómo contribuir
          </button>
        </section>
      </footer>
      {/* Modal reutilizable */}
      <InfoModal
        isOpen={isOpen}
        onClose={closeModal}
        title={modalContent.title}
      >
        {modalContent.content}
      </InfoModal>
    </>
  );
}
