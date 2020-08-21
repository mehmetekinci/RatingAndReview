import React, { useState, useEffect } from 'react';
import carpet from '../img/carpet.jpeg';
import {
  Card,
  Item,
  Rating,
  Label,
  Button,
  Form,
  Image,
} from 'semantic-ui-react';
import Reviews from './Reviews';

function Product() {
  const initialValues = [
    { rating: 4, review: 'Very nice carpet.', name: 'Mehmet' },
    {
      rating: 5,
      review: 'Excellent.',
      name: 'Carla',
    },
    {
      rating: 1,
      review: 'Most expensive carpet that I have seen ever,Maaaan.',
      name: 'Jan',
    },
  ];
  const [visible, setVisible] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [ratingsAndReviews, setRatingsAndReviews] = useState(initialValues);
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');
  const [name, setName] = useState('');

  const totalRating = ratingsAndReviews.reduce(
    (acc, { rating }) => acc + rating,
    0
  );

  const avarage = (totalRating / ratingsAndReviews.length || 0).toFixed(1);

  function addNewRatingAndReview() {
    setRatingsAndReviews([{ rating, review, name }, ...ratingsAndReviews]);
    setVisible(false);
    setReview('');
    setRating(0);
    setDisabled(true);
  }

  useEffect(() => {
    if (review.length > 5 && rating > 0 && name !== '') {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [review, rating, name]);

  return (
    <div style={{ maxWidth: '750px', margin: 'auto' }}>
      <Card centered>
        <Image src={carpet}></Image>
        <Card.Content>
          <Card.Header>Alaadin's Carpet</Card.Header>
          <Card.Description>$2.900,00</Card.Description>
          <Rating
            maxRating='5'
            icon='star'
            size='large'
            disabled
            rating={Math.round(avarage)}
          />
          <Label>
            {`
            ${avarage} 
            | ${
              ratingsAndReviews.length === undefined
                ? '0'
                : ratingsAndReviews.length
            } users rated this!`}
          </Label>
        </Card.Content>
      </Card>
      {visible === false && (
        <div style={{ textAlign: 'center' }}>
          <Button
            size='huge'
            style={{ margin: 'auto' }}
            animated='fade'
            onClick={() => setVisible(true)}
          >
            <Button.Content visible>Please Rate and Review!</Button.Content>
            <Button.Content hidden>Click!</Button.Content>
          </Button>
        </div>
      )}
      {visible === true && (
        <>
          <Item>
            <Rating
              maxRating='5'
              icon='star'
              size='large'
              onRate={(e, data) => {
                setRating(data.rating);
              }}
              style={{ paddingBottom: '20px' }}
            />
          </Item>
          <Item>
            <Form
              onSubmit={(e) => {
                e.preventDefault();
                addNewRatingAndReview();
              }}
            >
              <Form.Input
                placeholder='Name'
                name='name'
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <Form.Input
                placeholder='Write your review here'
                name='review'
                onChange={(e) => {
                  setReview(e.target.value);
                }}
              />
              <Button
                disabled={disabled}
                type='submit'
                style={{ marginBottom: '20px' }}
              >
                Send
              </Button>
            </Form>
          </Item>
        </>
      )}
      <Reviews ratingsAndReviews={ratingsAndReviews} />
    </div>
  );
}

export default Product;
