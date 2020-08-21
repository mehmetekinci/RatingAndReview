import React, { useState } from 'react';

import Reviews from './Reviews';
import ProductItem from './ProductItem';
import ReviewForm from './ReviewForm';

const initialReviews = [
  {
    rating: 4,
    review: 'Very nice carpet.',
    name: 'Mehmet',
    date: '5/8/2020',
  },
  {
    rating: 5,
    review: 'Excellent.',
    name: 'Carla',
    date: '5/10/2020',
  },
  {
    rating: 1,
    review: 'Most expensive carpet that I have seen ever,Maaaan.',
    name: 'Jan',
    date: '7/10/2020',
  },
];

function Product() {
  const [visible, setVisible] = useState(false);
  const [reviews, setReviews] = useState(initialReviews);

  const totalRating = reviews.reduce((acc, { rating }) => acc + rating, 0);
  const average = (totalRating / reviews.length || 0).toFixed(1);

  return (
    <div className='container'>
      <ProductItem ratingsAndReviews={reviews} average={average} />
      {visible && (
        <ReviewForm
          setReviews={setReviews}
          setVisible={setVisible}
          reviews={reviews}
        />
      )}
      <button
        className={visible ? 'btn' : 'btn center'}
        onClick={() => setVisible(!visible)}
      >
        {visible ? 'Cancel' : 'Please Rate and Review!'}
      </button>
      <Reviews ratingsAndReviews={reviews} />
    </div>
  );
}

export default Product;
