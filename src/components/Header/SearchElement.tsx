import React from 'react';
import { ProductType } from '../../types/MainTypes';
import styles from '../../scss/components/searchElement.module.scss';
interface ISearchEl {
  element: ProductType;
  itemHandler: () => void;
}

const SearchElement: React.FC<ISearchEl> = ({ element, itemHandler }) => {
  const price = element.price - (element.price * element.offers) / 100;

  return (
    <div className={styles.main} onClick={itemHandler}>
      <div className={styles.info}>
        <img className={styles.photo} src={element.photos[0]} alt="photo" />
        <div className={styles.infoText}>
          <h4 className={styles.title}>{element.name}</h4>
          <p className={styles.brand}>{element.brandName}</p>
        </div>
      </div>
      <div className={styles.infoPrice}>
        <span className={styles.price}>{` Rs. ${price}`}</span>
      </div>
    </div>
  );
};

export default SearchElement;
