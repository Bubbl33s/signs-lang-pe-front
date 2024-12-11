import { useState } from 'react';
import InfoModal from './InfoModal';
import AboutUs from './AboutUs';
import HowToContribute from './HowToContribute';
import Importance from './Importance';
import Scalabilty from './Scalabilty';
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
    <footer className="bg-purple-600 text-white p-6">
      <div className="flex gap-2 justify-center mb-4">
        <HandIndex className="text-xl" />
        <h2 className="text-lg font-semibold">Lengua de Señas Peruana</h2>
      </div>
      <section className="mt-2 overflow-hidden grid grid-cols-2 gap-3 md:flex md:justify-center md:gap-6">
        <button
          onClick={() => openModal('Sobre este proyecto', <AboutUs />)}
          className="font-medium hover:text-purple-200 hover:scale-105 transition-all underline"
        >
          Sobre este proyecto
        </button>

        <button
          onClick={() => openModal('Cómo contribuir', <HowToContribute />)}
          className="font-medium hover:text-purple-200 hover:scale-105 transition-all underline"
        >
          Cómo contribuir
        </button>

        <button
          onClick={() =>
            openModal('La importancia de contribuir', <Importance />)
          }
          className="font-medium hover:text-purple-200 hover:scale-105 transition-all underline"
        >
          La importancia de contribuir
        </button>

        <button
          onClick={() =>
            openModal('La importancia de contribuir', <Scalabilty />)
          }
          className="font-medium hover:text-purple-200 hover:scale-105 transition-all underline"
        >
          Escalabilidad
        </button>
      </section>
      <InfoModal
        isOpen={isOpen}
        onClose={closeModal}
        title={modalContent.title}
      >
        {modalContent.content}
      </InfoModal>
    </footer>
  );
}
