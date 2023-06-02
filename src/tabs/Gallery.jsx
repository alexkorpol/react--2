import { Component } from 'react';
import { getImages } from 'service/image-service';
import { Button, SearchForm, Grid, GridItem, Text, CardItem } from 'components';

export class Gallery extends Component {
  state = {
    query: 'cat',
    page: 12,
  };

  componentDidMount() {
    const { query, page } = this.state;

    const fetchImages = () => {
      getImages(query, page).then(data => console.log(data));
    };

    fetchImages();
  }

  render() {
    return (
      <>
        <Text textAlign="center">Sorry. There are no images ... 😭</Text>
      </>
    );
  }
}
