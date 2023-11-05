import React from 'react';
import styles from '../../scss/components/cards/blogCard.module.scss';

type TypeBlog = {
  category: string;
  title: string;
  description: string;
  author: string;
  date: string;
  image: string;
};

type PropsType = {
  blogs: TypeBlog;
  key?: string;
};

const BlogCard: React.FC<PropsType> = ({ blogs }) => {
  let sliced = blogs.description.slice(0, 60);
  if (sliced.length < blogs.description.length) {
    sliced += '...';
  }

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <img className={styles.image} src={blogs.image} alt="not found" />
        <div className={styles.info}>
          <span className={styles.blogCategory}>{blogs.category}</span>
          <h4 className={styles.titleBlog}>{blogs.title}</h4>
          <p className={styles.description}>{sliced}</p>

          <div className={styles.line}>
            <div className={styles.author}>{`By ${blogs.author}`}</div>
            <div className={styles.arrow}>→</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
