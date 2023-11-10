export const ImageGalleryItem = ({ alt, preview, large }) => {
  return (
    <>
      <li>
        <img alt={alt} src={preview} />
      </li>
    </>
  );
};
