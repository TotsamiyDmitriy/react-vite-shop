import React from 'react';
import { MiniCard, MegaCard } from '..';
import { useAppSelector } from '../../redux/hooks';
import styles from '../../scss/components/scroller.module.scss';
import { ProductType } from '../../types/MainTypes';
import { Skeleton } from '@mui/material';

interface ScrollerType {
  offerType: string;
  title: string;
}

const Scroller: React.FC<ScrollerType> = ({ offerType, title }) => {
  const state = useAppSelector(({ catalogReducer }) => ({
    products: catalogReducer.currentProducts,
    status: catalogReducer.status,
  }));

  return (
    <div className={styles.root}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.box}>
        {state.status === 'pending'
          ? Array(12)
              .fill(null)
              .map((_el, id: number) => (
                <div className={styles.component} key={`${id}`}>
                  {offerType === 'product' ? (
                    <Skeleton
                      variant="rounded"
                      width={410}
                      height={404}
                      animation="wave"></Skeleton>
                  ) : offerType === 'offer' ? (
                    <Skeleton
                      variant="rounded"
                      width={489}
                      height={567}
                      animation="wave"></Skeleton>
                  ) : (
                    ''
                  )}
                </div>
              ))
          : state.products.map((val: ProductType, id: number) => (
              <div className={styles.component} key={`${val}__${id}`}>
                {offerType === 'product' ? (
                  <MiniCard key={`${val}__${id}`} product={val} offerType={offerType}></MiniCard>
                ) : offerType === 'offer' ? (
                  <MegaCard key={`${val}__${id}`} product={val} offerType={offerType}></MegaCard>
                ) : (
                  ''
                )}
              </div>
            ))}
      </div>
    </div>
  );
};

export default Scroller;
