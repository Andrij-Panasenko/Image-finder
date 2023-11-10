import { Component } from 'react';
import { ImageModal } from 'components/ImageModal/ImageModal';

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
       <li onClick={this.openModal}>
         <img alt={alt} src={preview} />
       </li>
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
