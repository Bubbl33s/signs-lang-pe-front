import { useParams } from 'react-router';

export default function ModerateLabel() {
  const { id } = useParams();

  return (
    <div>
      <p>ModerateLabel {id}</p>
    </div>
  );
}
