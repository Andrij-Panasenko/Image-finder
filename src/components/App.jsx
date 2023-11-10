import { GlobalStyle } from './GlobalStyle';
import { Component } from 'react';
import { SearchBar } from './SearchBar/SerachBar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { fetchItem } from './api/api';

export class App extends Component {
  state = {
    images: [],
    query: '',
    isLoading: false,
    page: 1,
  };


  async componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;

    try {
      if (prevState.query !== query || prevState.page !== page) {
        const requestedImages = await fetchItem(query, page);
        this.setState({ images: requestedImages.hits });
      }
    } catch (error) {
    } finally {
    }
  }

  searchQueryHandler = evt => {
    evt.preventDefault();
    const searchQuery = evt.target.query.value;
    this.setState({
      query: searchQuery,
      page: 1,
      images: [],
    });
  };

  render() {
    const { images } = this.state;
    return (
      <>
        <GlobalStyle />
        <SearchBar onSubmit={this.searchQueryHandler} />
        {images.length > 0 ? (
          <ImageGallery
            images={images}
          />
        ) : (<b>placeholder</b>)}
        <Button />
      </>
    );
  }
}


  // handleLoadMore = () => {
  //   this.setState(prevState => {
  //     return {
  //       page: prevState.page + 1,
  //     };
  //   });
  // };