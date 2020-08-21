import React from 'react';
import { Comment, Header, Rating, Divider } from 'semantic-ui-react';

const Reviews = ({ ratingsAndReviews }) => {
  return (
    <Comment.Group>
      <Header as='h3' dividing>
        Reviews
      </Header>
      {ratingsAndReviews.map(({ review, name, rating }, index) => (
        <Comment key={index}>
          <Comment.Content>
            <Comment.Author as='span'>{name}</Comment.Author>
            <Comment.Metadata>
              <Rating
                maxRating='5'
                icon='star'
                size='tiny'
                disabled
                rating={rating}
              />
            </Comment.Metadata>
            <Comment.Text>{review}</Comment.Text>
            <Divider />
          </Comment.Content>
        </Comment>
      ))}
    </Comment.Group>
  );
};

export default Reviews;
