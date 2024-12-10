import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router';
import { ArrowBarLeft } from 'react-bootstrap-icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import useSigns from '../hooks/useSigns';
import { ContentService } from '../services/contentService';
import { Label, Content } from '../types';
import 'swiper/css';

export default function ModerateLabel() {
  const { id } = useParams();
  const { state } = useSigns();
  const [label, setLabel] = useState<Label>();
  const [contents, setContents] = useState<Content[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (id) {
      setLabel(state.signsList.find((label) => label._id === id));

      ContentService.getUnverifiedContentsByLabelId(id).then((data) => {
        setContents(data);
      });
    }
  }, [id]);

  const handleValidation = async (
    contentId: string,
    action: 'validate' | 'reject'
  ) => {
    setLoading(true);

    try {
      if (action === 'validate') {
        // await ContentService.validateContent(contentId);
      } else {
        // await ContentService.rejectContent(contentId);
      }

      // Remove content from the list
      setContents((prevContents) =>
        prevContents.filter((content) => content._id !== contentId)
      );
    } catch (error) {
      console.error('Error processing content:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <header className="flex justify-between items-center mb-5">
        <h3 className="text-xl font-bold">{label?.name}</h3>
        <Link
          to={'../pick'}
          className="flex items-center gap-1 bg-purple-300 border border-purple-500 rounded-md py-2 px-3 text-sm font-semibold hover:bg-purple-500 hover:text-white transition-colors"
        >
          <ArrowBarLeft />
          <p>Volver</p>
        </Link>
      </header>

      {contents.length > 0 ? (
        <Swiper spaceBetween={50} slidesPerView={1}>
          {contents.map((content) => (
            <SwiperSlide key={content._id}>
              <div className="flex flex-col items-center">
                <img
                  src={content.url}
                  alt={content.labelId}
                  className="max-w-full max-h-96 rounded-lg shadow-md"
                />
                <div className="flex gap-2 mt-4">
                  <button
                    onClick={() => handleValidation(content._id, 'reject')}
                    disabled={loading}
                    className="font-bold bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-700 transition-colors"
                  >
                    Rechazar
                  </button>
                  <button
                    onClick={() => handleValidation(content._id, 'validate')}
                    disabled={loading}
                    className="font-bold bg-green-500 py-2 px-4 rounded-md hover:bg-green-700 transition-colors"
                  >
                    Aceptar
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <p className="text-gray-600 text-center mt-10">
          No hay contenidos pendientes de verificación.
        </p>
      )}
    </div>
  );
}
