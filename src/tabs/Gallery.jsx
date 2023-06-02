import { Component } from 'react';
import { getImages } from 'service/image-service';
import { Button, SearchForm, Text, ImageGallery } from 'components';

const INITIAL_STATE = {
  query: '',
  page: 1,
  images: [],
};

export class Gallery extends Component {
  state = {
    ...INITIAL_STATE,
  };

  async componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;

    if (prevState.query !== query || prevState.page !== page) {
      await this.getPhotos(query, page);
    }
  }

  getPhotos = async (query, page) => {
    if (!query) return;

    try {
      const data = await getImages(query, page);
      this.setState(prevState => ({
        images: [...prevState.images, ...data.photos],
      }));
    } catch (err) {
      console.log(err);
    }
  };

  handleFormSubmit = query => this.setState({ ...INITIAL_STATE, query });

  handleButtonClick = () =>
    this.setState(prevState => ({ page: prevState.page + 1 }));

  render() {
    const { images } = this.state;

    return (
      <>
        <SearchForm onSubmit={this.handleFormSubmit} />

        {!images.length && (
          <Text textAlign="center">Sorry. There are no images ... 😭</Text>
        )}

        <ImageGallery images={images} />

        <Button onClick={this.handleButtonClick}>Load more</Button>
      </>
    );
  }
}
