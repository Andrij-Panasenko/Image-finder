import { GlobalStyle } from './GlobalStyle';
import { Component } from 'react';
import { SearchBar } from './SearchBar/SerachBar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { fetchItem } from './api/api';
import { Loader } from './Loader/Loader';

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
        this.setState({ isLoading: true });
        const requestedImages = await fetchItem(query, page);
        this.setState({ images: requestedImages.hits });
      }
    } catch (error) {
    } finally {
      this.setState({ isLoading: false });
    }
  };

  searchQueryHandler = evt => {
    evt.preventDefault();
    const searchQuery = evt.target.query.value;
    this.setState({
      query: searchQuery,
      page: 1,
      images: [],
    });
  };

  handleLoadMore = () => {
    this.setState(prevState => {
      return {
        page: prevState.page + 1,
      };
    });
  };

  render() {
    const { images, isLoading } = this.state;
    return (
      <>
        <GlobalStyle />
        <SearchBar onSubmit={this.searchQueryHandler} />
        {isLoading && <Loader />}
        {images.length > 0 && (
          <ImageGallery images={images} />
        )}
        <Button onLoad={this.handleLoadMore} />
      </>
    );
  }
}


