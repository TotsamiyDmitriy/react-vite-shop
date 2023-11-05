import React from 'react';
import { ReviewType } from '../types/MainTypes';
import styles from '../scss/components/review.module.scss';

import Rating from '@mui/material/Rating';

interface IReview {
  review: ReviewType;
}

const Review: React.FC<IReview> = ({ review }) => {
  let slicedText = review.description.slice(0, 255);
  if (slicedText.length < review.description.length) {
    slicedText += '...';
  }

  const [readMore, setReadMore] = React.useState(false);

  return (
    <div className={styles.main}>
      <span>
        <Rating defaultValue={review.rating} precision={0.5} readOnly size="small"></Rating>
        {review.rating}
      </span>
      <div className={styles.description}>
        {readMore === false ? slicedText : review.description}
        {slicedText.length < review.description.length ? (
          <span className={styles.readMore} onClick={() => setReadMore(!readMore)}>
            {readMore === false ? 'Read More' : 'Less'}
          </span>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Review;
