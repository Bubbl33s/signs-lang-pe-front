import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router';
import useSigns from '../hooks/useSigns';
import { ContentService } from '../services/contentService';
import { ArrowBarLeft } from 'react-bootstrap-icons';
import { Label, Content } from '../types';
import { LoadingSpinner, Gallery } from '../components';

export default function SignDetail() {
  const { id } = useParams();
  const { state } = useSigns();
  const [label, setLabel] = useState<Label>();
  const [category, setCategory] = useState<string>('');
  const [contents, setContents] = useState<Content[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      ContentService.getVerifiedContentsByLabelId(id).then((data) => {
        setContents(data);
        setLoading(false);
      });

      setLabel(state.signsList.find((label) => label._id === id));

      setCategory(
        state.categories.find((category) => category._id === label?.categoryId)
          ?.name || ''
      );
    }
  });

  return (
    <main className="p-3 pt-0 mx-auto md:container md:max-w-4xl">
      <header className="flex justify-between items-start mb-5">
        <div>
          <h3 className="text-xl font-bold md:text-2xl">{label?.name}</h3>
          <p className="text-sm text-gray-700 md:text-base">{category}</p>
        </div>

        <Link
          to={'/'}
          className="flex items-center gap-1 bg-purple-300 border border-purple-500 rounded-md py-2 px-3 text-sm font-semibold hover:bg-purple-500 hover:text-white transition-colors"
        >
          <ArrowBarLeft />
          <p>Volver</p>
        </Link>
      </header>

      <section>
        {loading ? <LoadingSpinner /> : <Gallery contents={contents} />}
      </section>
    </main>
  );
}
