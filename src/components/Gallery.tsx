import ImageGallery from 'react-image-gallery';
import { Content } from '../types';
import 'react-image-gallery/styles/css/image-gallery.css';

type GalleryProps = {
  contents: Content[];
};

type Image = {
  original: string;
  thumbnail: string;
  originalClass?: string;
};

export default function Gallery({ contents }: GalleryProps) {
  const images: Image[] = contents.map((content) => ({
    original: content.url,
    thumbnail: content.url,
    originalClass: 'md:max-h-[550px] md:object-cover',
  }));

  return (
    <ImageGallery
      items={images}
      showBullets={true}
      showFullscreenButton={false}
    />
  );
}
