import React, { useEffect, useState } from 'react';
import ReactSlider from 'react-slider';
import styles from '../scss/components/priceRange.module.scss';
import '../scss/components/rangeSlider.scss';

import type { IPriceRange } from '../types/IPriceRange';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import Button from './Button';
import { setPriceRangeFilter } from '../redux/catalogSlice';

const PriceRange: React.FC<IPriceRange> = () => {
  const { priceRangeProducts, PriceRangeFilter, products } = useAppSelector(
    ({ catalogReducer }) => ({
      priceRangeProducts: catalogReducer.priceRangeProducts,
      PriceRangeFilter: catalogReducer.priceRangeFilter,
      products: catalogReducer.products,
    }),
  );
  const dispatch = useAppDispatch();

  const [range, setRange] = useState(priceRangeProducts);

  useEffect(() => {
    if (PriceRangeFilter.length == 0) {
      setRange(priceRangeProducts);
    } else {
      setRange(PriceRangeFilter);
    }
  }, [products]);

  const submitHandler = () => {
    dispatch(setPriceRangeFilter(range));
  };

  return (
    <div className={styles.main}>
      <div className={styles.title}>Price</div>
      <div className={styles.wrapper}>
        <ReactSlider
          className={styles.slider}
          thumbClassName={styles.thumb}
          trackClassName={'track'}
          value={range}
          ariaLabel={['Leftmost thumb', 'Rightmost thumb']}
          renderThumb={(props) => <div {...props}></div>}
          minDistance={100}
          min={priceRangeProducts[0]}
          max={priceRangeProducts[1]}
          onAfterChange={(value, index) => {
            if (index === 0) {
              setRange([value[0], range[1]]);
            } else {
              setRange([range[0], value[1]]);
            }
          }}
        />
        <Button className={styles.button} onClick={submitHandler}>
          Submit
        </Button>
      </div>
      <div className={styles.minMax}>
        <div className={styles.min}>
          <span className={styles.titleMin}>Min</span>
          <div className={styles.inputMin}>
            Rs.
            <span>{range[0]}</span>
          </div>
        </div>
        <div className={styles.max}>
          <span className={styles.titleMax}>Max</span>
          <div className={styles.inputMax}>
            Rs.
            <span>{range[1]}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceRange;
