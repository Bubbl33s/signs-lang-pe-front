import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router';
import useSigns from '../hooks/useSigns';
import { ContentService } from '../services/contentService';
import { Label, Content } from '../types';

export default function ModerateLabel() {
  const { id } = useParams();
  const { state } = useSigns();
  const [label, setLabel] = useState<Label>();
  const [contents, setContents] = useState<Content[]>([]);

  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      setLabel(state.signsList.find((label) => label._id === id));

      ContentService.getUnverifiedContentsByLabelId(id).then((data) => {
        setContents(data);
      });
    }
  }, [id]);

  return (
    <div>
      <header>
        <h3>{label?.name}</h3>
        <Link to={'../pick'}>Volver</Link>
      </header>

      <ul>
        {contents.map((content) => (
          <li key={content._id}>
            <img src={content.url} alt={content.labelId} />
          </li>
        ))}
      </ul>
    </div>
  );
}
