import React, { LegacyRef } from 'react';
import { PriceRange } from './';
import '../scss/pages/Catalog/catalogSettings.scss';
import type { ProductType } from '../types/MainTypes';
import { Color, Filter } from './Filters/';
import { AppDispatch } from '../redux/store';
import { useAppDispatch } from '../redux/hooks';
import { clearAllFilters } from '../redux/catalogSlice';
interface IFilter {
  uniqueProducts: ProductType[];
  reference: LegacyRef<HTMLDivElement>;
  setFiltersModal: React.Dispatch<any>;
  filterHaldler: () => any;
}
const keys = ['brandName', 'offers'];

const titles = ['Brand', 'Discount Range'];

const CatalogSettings: React.FC<IFilter> = ({ uniqueProducts, reference, filterHaldler }) => {
  const dispatch: AppDispatch = useAppDispatch();

  function clearAllHandler() {
    dispatch(clearAllFilters());
  }

  return (
    <div className="filter" ref={reference}>
      <div className="filter_wrapper">
        <h4 className="filter_title">Filters</h4>
        <div className="filter_mobile_wrapper">
          <a className="filter_button" onClick={clearAllHandler}>
            Clear all
          </a>
          <svg
            className="filter_XMark"
            onClick={filterHaldler}
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            width="24">
            <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
          </svg>
        </div>
      </div>
      <PriceRange className="filter_priceRange"></PriceRange>
      {keys.map((key: string, index: number) => {
        return (
          <Filter
            products={uniqueProducts}
            keyItem={key}
            title={titles[index]}
            key={`${key}`}
            indexBlock={index}
          />
        );
      })}
      <Color products={uniqueProducts} keys="colors">
        Colors
      </Color>
      <Color products={uniqueProducts} keys="sizes">
        Sizes
      </Color>
    </div>
  );
};

export default CatalogSettings;
