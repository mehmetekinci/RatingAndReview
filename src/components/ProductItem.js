import React from 'react';

import Card from './Card';

import carpet from '../img/carpet.jpeg';

const ProductItem = ({ average, ratingsAndReviews }) => {
  return (
    <Card
      image={carpet}
      header="Alaadin's Carpet"
      price='2.900,00'
      rating={average}
      reviews={ratingsAndReviews}
    />
  );
};

export default ProductItem;
