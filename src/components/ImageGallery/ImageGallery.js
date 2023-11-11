import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { List } from './ImageGalery.styled';

export const ImageGallery = ({ images }) => {
  return (
    <>
      <List>
        {images.map(img => (
          <ImageGalleryItem
            key={img.id}
            alt={img.tags}
            preview={img.webformatURL}
            large={img.largeImageURL}
          />
        ))}
      </List>
    </>
  );
};
