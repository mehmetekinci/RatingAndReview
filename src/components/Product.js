import React, { useState, useEffect } from 'react';
import Carpet from '../img/carpet.jpeg';
import { Card, Item, Rating } from 'semantic-ui-react';

function Product() {
  const [ratingAmount, setRatingAmount] = useState(0);
  const [accumulation, setAccumulation] = useState(0);
  const [totalRating, setTotalRating] = useState([]);

  useEffect(() => {
    setTotalRating([...totalRating, ratingAmount]);
    let total = totalRating.reduce((acc, rating) => acc + rating, 0);
    setAccumulation(total);
  }, [ratingAmount]);

  return (
    <>
      <Card centered>
        <Item.Group>
          <Item>
            <Item.Image size='medium' src={Carpet} />
          </Item>
        </Item.Group>
        <Item>
          <h3>Alaadin's Carpet</h3>
        </Item>
        <Item>
          <p>$2.900,00</p>
        </Item>
        <Item>
          <Rating
            maxRating='5'
            icon='star'
            size='large'
            onRate={(e, data) => {
              setRatingAmount(data.rating);
            }}
            rating={Math.ceil(accumulation / totalRating.length - 1)}
          />
        </Item>
        <Item>
          <p>{Math.ceil(accumulation / totalRating.length - 1)}</p>
        </Item>
      </Card>
    </>
  );
}

export default Product;
