import React from 'react';

import styles from '../scss/components/rating.module.scss';
import { IRating } from '../types/IRating';

const Rating: React.FC<IRating> = ({ rating }) => {
  return (
    <div className={styles.rating}>
      <div className={styles.ratingBody}>
        <div className={styles.ratingActive}></div>
        <div className={styles.ratingItems}>
          <div className={styles.ratingItem}></div>
          <div className={styles.ratingItem}></div>
          <div className={styles.ratingItem}></div>
          <div className={styles.ratingItem}></div>
          <div className={styles.ratingItem}></div>
        </div>
      </div>
      <div className={styles.ratingValue}></div>
    </div>
  );
};

export default Rating;
