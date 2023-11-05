import React from 'react';
import Category from './Category';
import styles from '../../scss/components/categories.module.scss';
import type { PpProps, ICategories } from '../../types/ICategories';

const pp: Array<PpProps> = [
  {
    image: 'https://i.ibb.co/zZkddTD/1.png',
    title: 'Womens Pants',
    settings: {},
  },
  {
    image: 'https://i.ibb.co/SrdZVh9/1left.png',
    title: 'Mens Jacket',
    settings: {},
  },
  {
    image: 'https://i.ibb.co/dfqhqYG/Zhenskaya-moda-vesna-leto-2.jpg',
    title: 'Womens Tops',
    settings: {},
  },
  {
    image: 'https://i.ibb.co/c1LpbR1/5933-970.jpg',
    title: 'Sweater',
    settings: {},
  },
  {
    image: 'https://i.ibb.co/HBbNqXc/183634d4a189fc5e31b6e552865c3b2f.jpg',
    title: 'Pants',
    settings: {},
  },
  {
    image: 'https://i.ibb.co/0GWCp7k/ffa16c9da021e7e229613eaccd3b55de.jpg',
    title: 'Mans Jackets',
    settings: {},
  },
];

const Categories: React.FC<ICategories> = (props) => {
  return (
    <div className={styles.main}>
      <h2 className={styles.title}>{props.title}</h2>
      <div className={styles.container}>
        {pp.map((obj: PpProps, index: number) => (
          <Category key={`${obj.title}__${index}`} className={`category${index}`} {...pp[index]} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
