import { Component } from 'react';
import { ImageModal } from 'components/ImageModal/ImageModal';
import { Image, Li } from './ImageGalleryItem.styled';

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  openModal = () => {
    this.setState({
      isModalOpen: true,
    });
  };

  closeModal = () => {
    this.setState({
      isModalOpen: false,
    })
  };

  render() {
    const { isModalOpen } = this.state;
    const { alt, preview, large } = this.props;

    return (
      <>
        <Li onClick={this.openModal}>
          <Image alt={alt} src={preview} />
        </Li>

        <ImageModal
          isOpen={isModalOpen}
          onClose={this.closeModal}
          alt={alt}
          large={large}
        />
      </>
    );
  }
}
