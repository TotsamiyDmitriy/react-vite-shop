import React, { LegacyRef } from 'react';
import MiniCard from './Scroller/MiniCard';
import '../scss/pages/Catalog/catalogList.scss';
import type { ProductType, StatusTypes } from '../types/MainTypes';
import { ProductLoader } from './Loader';

interface ICatalogList {
  products: Array<ProductType>;
  uniqueProducts: Array<ProductType>;
  references: Array<LegacyRef<HTMLDivElement>>;
  status: StatusTypes;
}

function noneFunction() {
  return <div className="catalog_list__empty">Sorry, there are no products with such filters</div>;
}

const CatalogList: React.FC<ICatalogList> = ({ products, references, status }) => {
  return (
    <div className="catalog_list" ref={references[0]}>
      <div className="catalog_list__wrapper">
        {status === 'pending'
          ? Array(12)
              .fill(null)
              .map((_, id: number) => <ProductLoader key={id} />)
          : products.length !== 0
          ? products.map((obj: ProductType, index: number) => {
              return (
                <div key={`${obj.name}__${index}`} className="catalog_list__card">
                  <MiniCard
                    key={`${obj.name}__${index}`}
                    product={obj}
                    offerType="offer"></MiniCard>
                </div>
              );
            })
          : noneFunction()}
      </div>
    </div>
  );
};

export default CatalogList;
