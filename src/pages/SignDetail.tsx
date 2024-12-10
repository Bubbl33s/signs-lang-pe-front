import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router';
import useSigns from '../hooks/useSigns';
import { ContentService } from '../services/contentService';
import { ArrowBarLeft } from 'react-bootstrap-icons';
import { Label, Content } from '../types';

export default function SignDetail() {
  const { id } = useParams();
  const { state } = useSigns();
  const [label, setLabel] = useState<Label>();
  const [contents, setContents] = useState<Content[]>([]);

  useEffect(() => {
    if (id) {
      setLabel(state.signsList.find((label) => label._id === id));

      ContentService.getContentsByLabelId(id).then((data) => {
        setContents(data);
      });
    }
  }, [id]);

  return (
    <div>
      <header className="flex justify-between items-center mb-5">
        <h3 className="text-xl font-bold">{label?.name}</h3>
        <Link
          to={'/'}
          className="flex items-center gap-1 bg-purple-300 border border-purple-500 rounded-md py-2 px-3 text-sm font-semibold hover:bg-purple-500 hover:text-white transition-colors"
        >
          <ArrowBarLeft />
          <p>Volver</p>
        </Link>
      </header>
    </div>
  );
}
