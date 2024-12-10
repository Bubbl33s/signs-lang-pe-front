import ImageGallery from 'react-image-gallery';
import { Content } from '../types';
import 'react-image-gallery/styles/css/image-gallery.css';

type GalleryProps = {
  contents: Content[];
};

type Image = {
  original: string;
  thumbnail: string;
};

export default function Gallery({ contents }: GalleryProps) {
  const images: Image[] = contents.map((content) => ({
    original: content.url,
    thumbnail: content.url,
  }));

  return <ImageGallery items={images} />;
}
