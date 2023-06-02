import * as React from 'react';
import { Grid } from '../Grid/Grid.styled';
import { CardItem } from '../ImageCard/ImageCard.styled';

export const ImageGallery = ({ images = [] }) => {
  return (
    <Grid>
      {images.map(({ id, avg_color, src: { large }, alt }) => (
        <CardItem key={id} color={avg_color}>
          <img src={large} alt={alt} />
        </CardItem>
      ))}
    </Grid>
  );
};
