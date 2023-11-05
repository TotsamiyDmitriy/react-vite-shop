import React from 'react';
import { BlogCard } from '..';
import styles from '../../scss/components/scroller.module.scss';
import Button from '../Button';

type TypeBlog = {
  category: string;
  title: string;
  description: string;
  author: string;
  date: string;
  image: string;
};

type PropsType = {
  blogs: Array<TypeBlog>;
  title: string;
};

const Scroller: React.FC<PropsType> = (props) => {
  return (
    <div className={styles.root}>
      <h2 className={styles.title}>{props.title}</h2>
      <div className={styles.box}>
        {props.blogs.map((val: TypeBlog, id: number) => (
          <div className={styles.component} key={`${val}__${id}`}>
            <BlogCard key={`${val}__${id}`} blogs={val}></BlogCard>
          </div>
        ))}
      </div>
      <div className={styles.buttonCase}>
        <Button className={styles.button}>View all</Button>
      </div>
    </div>
  );
};

export default Scroller;
