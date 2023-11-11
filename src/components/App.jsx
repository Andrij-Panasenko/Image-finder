import { GlobalStyle } from './GlobalStyle';
import { Component } from 'react';

import toast, { Toaster } from 'react-hot-toast';
import { SearchBar } from './SearchBar/SerachBar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { fetchItem } from './api/api';
// import { Loader } from './Loader/Loader';

export class App extends Component {
  state = {
    images: [],
    query: '',
    isLoading: false,
    page: 1,
  };

  async componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;

    const searchQuery = query.split('/')[1].trim();

    if (searchQuery === '') {
      toast.error('Search field should be filled');
      this.setState({ query: '' });
      return;
    }

    try {
      if (prevState.query !== query || prevState.page !== page) {
        // this.setState({ isLoading: true });

        const requestedImages = await fetchItem(searchQuery, page);

        if (requestedImages.hits.length === 0) {
          toast.error('There are no results for your request');
          this.setState({query: ''});
          return;
        }

        this.setState({ images: requestedImages.hits });
      }
    } catch (error) {
      toast.error('Ooops! Something went wrong. Try reloading page!');
    } finally {
      // this.setState({ isLoading: false });
    }
  }

  searchQueryHandler = evt => {
    evt.preventDefault();
    const searchQuery = evt.target.query.value;
    const query = searchQuery.toLowerCase();
    this.setState({
      query: `${Date.now()}/${query}`,
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
        <Toaster />
        <SearchBar onSubmit={this.searchQueryHandler} />
        {/* {isLoading && <Loader />} */}
        {images.length > 0 && (
          <>
            <ImageGallery images={images} />
            <Button onLoad={this.handleLoadMore} />
          </>
        )}
      </>
    );
  }
}
