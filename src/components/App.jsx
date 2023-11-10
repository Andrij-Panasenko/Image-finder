import { GlobalStyle } from './GlobalStyle';
import { Component } from 'react';
import { SearchBar } from './SearchBar/SerachBar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import { Button } from './Button/Button';
import { fetchItem } from './api/api';

export class App extends Component {
  state = {
    images: [],
    query: '',
    isLoading: false,
    page: 1,
  };

  async componentDidMount() {}

  async componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;

    try {
      if (prevState.query !== query || prevState.page !== page) {
        const request = await fetchItem(query, page);
        this.setState({ images: request });
      }
    } catch (error) {} finally {}
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

  handleLoadMore = () => {
    this.setState(prevState => {
      return {
        page: prevState.page + 1,
      };
    });
  };
  render() {
    return (
      <>
        <GlobalStyle />
        <SearchBar onSubmit={this.searchQueryHandler} />
        <ImageGallery >
          <ImageGalleryItem />
        </ImageGallery>
        <Button />
      </>
    );
  }
}
