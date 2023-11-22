import React from 'react';
import Category from './Category';
import styles from '../../scss/components/categories.module.scss';
import type { PpProps, ICategories } from '../../types/ICategories';
import { useAppDispatch } from '../../redux/hooks';
import { setFilters } from '../../redux/catalogSlice';

const categories: Array<PpProps> = [
  {
    image: 'https://i.ibb.co/zZkddTD/1.png',
    title: 'Womens Pants',
    settings: {
      to: 'catalog/1',
      filters: {
        brandName: ['Hell'],
        offers: [],
        colors: [],
        sizes: [],
      },
    },
  },
  {
    image: 'https://i.ibb.co/SrdZVh9/1left.png',
    title: 'Mens Jacket',
    settings: {
      to: 'catalog/0',
      filters: {
        brandName: ['Linkoln'],
        offers: [],
        colors: ['red'],
        sizes: [],
      },
    },
  },
  {
    image: 'https://i.ibb.co/dfqhqYG/Zhenskaya-moda-vesna-leto-2.jpg',
    title: 'Womens Tops',
    settings: {
      to: 'catalog/1',
      filters: {
        brandName: ['Linkoln'],
        offers: [],
        colors: ['red', 'green'],
        sizes: [],
      },
    },
  },
  {
    image: 'https://i.ibb.co/c1LpbR1/5933-970.jpg',
    title: 'Sweater',
    settings: {
      to: 'catalog/',
      filters: {
        brandName: ['asasasasa'],
        offers: [],
        colors: ['red'],
        sizes: ['M', 'S'],
      },
    },
  },
  {
    image: 'https://i.ibb.co/HBbNqXc/183634d4a189fc5e31b6e552865c3b2f.jpg',
    title: 'Pants',
    settings: {
      to: 'catalog/',
      filters: {
        brandName: ['Hell'],
        offers: [],
        colors: [],
        sizes: [],
      },
    },
  },
  {
    image: 'https://i.ibb.co/0GWCp7k/ffa16c9da021e7e229613eaccd3b55de.jpg',
    title: 'Mans Jackets',
    settings: {
      to: 'catalog/0',
      filters: {
        brandName: ['Linkoln'],
        offers: [],
        colors: [],
        sizes: [],
      },
    },
  },
];

const Categories: React.FC<ICategories> = (props) => {
  const dispatch = useAppDispatch();

  function Dispatcher(settings: any) {
    dispatch(setFilters(settings));
  }

  return (
    <div className={styles.main}>
      <h2 className={styles.title}>{props.title}</h2>
      <div className={styles.container}>
        {categories.map((obj: PpProps, index: number) => (
          <Category
            key={`${obj.title}__${index}`}
            className={`category${index}`}
            {...categories[index]}
            settings={obj.settings}
            dispatcher={Dispatcher}
          />
        ))}
      </div>
    </div>
  );
};

export default Categories;
