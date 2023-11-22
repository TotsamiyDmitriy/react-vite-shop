import React from 'react';
import styles from '../../scss/components/tag.module.scss';

interface ITag {
  [x: string]: any;
  tagName: string;
  id?: number;
}

const Tag: React.FC<ITag> = ({ tagName }) => {
  return (
    <div className={styles.main}>
      <svg
        className={styles.xMark}
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M16.2296 7.06301L14.9371 5.77051L11 9.70759L7.06289 5.77051L5.77039 7.06301L9.70747 11.0001L5.77039 14.9372L7.06289 16.2297L11 12.2926L14.9371 16.2297L16.2296 14.9372L12.2925 11.0001L16.2296 7.06301Z"
          fill="#848484"
        />
      </svg>
      Tag for : {tagName}
    </div>
  );
};

export default Tag;
