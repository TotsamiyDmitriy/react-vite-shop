import React from 'react';
import styles from '../../scss/components/blog/blogCard.module.scss';
import Rating from '@mui/material/Rating';
interface ppI {
  author: string;
  image: string;
  description: string;
}

const CommentCard: React.FC<ppI> = (props) => {
  return (
    <div className={styles.main}>
      <img src={props.image} alt="not found" className={styles.image} />
      <Rating value={4} size="small" readOnly />
      <div className={styles.description}>
        <span>{props.description}</span>
      </div>
    </div>
  );
};

export default CommentCard;
