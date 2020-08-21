import React from 'react';
import StarRating from './StarRating';

const Card = ({ image, header, price, rating, reviews }) => {
  return (
    <div className='card'>
      <img className='card__image' src={image} alt='carpet' width='300' />
      <div className='card__content'>
        <h2 className='card__header'>{header}</h2>
        <p className='card__price'>${price}</p>
        <div className='card__review'>
          <StarRating value={rating} readonly size={10} />
          <div data-testid='rating' className='card__label'>
            {`${rating} | ${reviews.length || 0} users rated this!`}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
