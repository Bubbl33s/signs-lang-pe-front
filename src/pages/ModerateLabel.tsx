import DeleteConfirmationModal from '../components/DeleteConfirmationModal';
import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router';
import { ArrowBarLeft } from 'react-bootstrap-icons';
import SwiperCore from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { LoadingSpinner } from '../components';
import useSigns from '../hooks/useSigns';
import { ContentService } from '../services/contentService';
import { showToast } from '../helpers/toastify';
import { Label, Content } from '../types';
import 'swiper/css';
import 'swiper/css/pagination';

export default function ModerateLabel() {
  const { id } = useParams();
  const { state } = useSigns();
  const [label, setLabel] = useState<Label>();
  const [contents, setContents] = useState<Content[]>([]);
  const [initialLoading, setInitialLoading] = useState(true);
  const [loading, setLoading] = useState(false);
  const swiperRef = useRef<SwiperCore | null>(null);

  // Estado para el modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [contentToDelete, setContentToDelete] = useState<Content | null>(null);

  useEffect(() => {
    if (id) {
      setLabel(state.signsList.find((label) => label._id === id));

      ContentService.getUnverifiedContentsByLabelId(id).then((data) => {
        setContents(data);
        setInitialLoading(false);
      });
    }
  }, [id]);

  const handleDeleteConfirmation = (content: Content) => {
    setContentToDelete(content);
    setIsModalOpen(true);
  };

  const handleValidation = async (
    contentId: string,
    action: 'validate' | 'reject'
  ) => {
    setLoading(true);

    try {
      if (action === 'validate') {
        await ContentService.verifyContent(contentId);

        showToast({
          text: 'Imagen validada',
          color: 'success',
        });
      } else {
        await ContentService.deleteContent(contentId);

        showToast({
          text: 'Contenido eliminado',
          color: 'info',
        });
      }

      if (swiperRef.current) {
        swiperRef.current.slideNext();
      }

      setTimeout(() => {
        setContents((prevContents) =>
          prevContents.filter((content) => content._id !== contentId)
        );
      }, 500);
    } catch (error) {
      console.error('Error processing content:', error);
    } finally {
      setLoading(false);
    }
  };

  const confirmDelete = async () => {
    if (contentToDelete) {
      await handleValidation(contentToDelete._id, 'reject');
      setIsModalOpen(false);
      setContentToDelete(null);
    }
  };

  return (
    <div>
      <header className="flex justify-between items-center mb-5">
        <h3 className="text-xl font-bold sm:text-2xl">{label?.name}</h3>
        <Link
          to={'../pick'}
          className="flex items-center gap-1 bg-purple-300 border border-purple-500 rounded-md py-2 px-3 text-sm font-semibold hover:bg-purple-500 hover:text-white transition-colors"
        >
          <ArrowBarLeft />
          <p>Volver</p>
        </Link>
      </header>

      {contents.length > 0 ? (
        <div>
          <div className="custom-pagination flex justify-center mb-3"></div>

          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            pagination={{
              clickable: false,
              el: '.custom-pagination',
            }}
            modules={[Pagination]}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
          >
            {contents.map((content) => (
              <SwiperSlide key={content._id}>
                <div className="flex flex-col items-center">
                  <img
                    src={content.url}
                    alt={content.labelId}
                    className="h-56 rounded-lg shadow-md sm:h-64 md:h-80 lg:h-96"
                  />
                  <div className="flex gap-2 mt-4">
                    <button
                      onClick={() => handleDeleteConfirmation(content)}
                      disabled={loading}
                      className="bg-red-500 text-white py-[6px] px-4 rounded-md hover:bg-red-700 transition-colors"
                    >
                      Rechazar
                    </button>
                    <button
                      onClick={() => handleValidation(content._id, 'validate')}
                      disabled={loading}
                      className="text-white font-bold bg-purple-500 py-[6px] px-4 rounded-md hover:bg-purple-700 transition-colors"
                    >
                      Aceptar
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ) : (
        <div className="text-gray-600 text-center">
          {initialLoading ? (
            <LoadingSpinner />
          ) : (
            <p className="my-3 text-center">
              No hay contenidos pendientes de verificación.
            </p>
          )}
        </div>
      )}

      {isModalOpen && (
        <DeleteConfirmationModal
          isOpen={isModalOpen}
          onConfirm={confirmDelete}
          onClose={() => setIsModalOpen(false)}
          title="Rechazar contenido"
          message="Al rechazar el contenido, este será eliminado de la plataforma."
        />
      )}
    </div>
  );
}
