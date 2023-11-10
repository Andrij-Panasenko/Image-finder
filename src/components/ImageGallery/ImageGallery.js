import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ images }) => {
  return (
    <>
      <ul>
        {images.map(img => (
          <ImageGalleryItem
            key={img.id}
            alt={img.tags}
            preview={img.webformatURL}
            large={img.largeImageURL}
          />
        ))}
      </ul>
    </>
  );
};
