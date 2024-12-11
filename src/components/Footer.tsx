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
    <>
      <footer className="bg-purple-600 text-white p-3">
        <div className="flex gap-2 justify-center">
          <HandIndex className="text-xl" />
          <h2 className="text-lg font-semibold">Lengua de Señas Peruana</h2>
        </div>
        <section className="flex justify-center gap-4 mt-2">
          <button
            onClick={() => openModal('Sobre este proyecto', <AboutUs />)}
            className="font-medium hover:text-purple-200 hover:scale-105 transition-all"
          >
            Sobre este proyecto
          </button>

          <button
            onClick={() => openModal('Cómo contribuir', <HowToContribute />)}
            className="font-medium hover:text-purple-200 hover:scale-105 transition-all"
          >
            Cómo contribuir
          </button>

          <button
            onClick={() =>
              openModal('La importancia de contribuir', <Importance />)
            }
            className="font-medium hover:text-purple-200 hover:scale-105 transition-all"
          >
            La importancia de contribuir
          </button>

          <button
            onClick={() =>
              openModal('La importancia de contribuir', <Scalabilty />)
            }
            className="font-medium hover:text-purple-200 hover:scale-105 transition-all"
          >
            Escalabilidad
          </button>
        </section>
      </footer>

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
