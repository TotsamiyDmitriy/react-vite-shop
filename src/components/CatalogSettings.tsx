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
}
const keys = ['brandName', 'offers'];

const titles = ['Brand', 'Discount Range'];

const CatalogSettings: React.FC<IFilter> = ({ uniqueProducts, reference }) => {
  const dispatch: AppDispatch = useAppDispatch();

  function clearAllHandler() {
    dispatch(clearAllFilters());
    const nodes = Array.from(
      document.querySelectorAll(`#brandName div input`) as NodeListOf<HTMLInputElement>,
    )
      .concat(
        Array.from(document.querySelectorAll(`#offers div input`) as NodeListOf<HTMLInputElement>),
      )
      .concat(
        Array.from(
          document.querySelectorAll(`#sizes div input`) as NodeListOf<HTMLInputElement>,
        ).concat(
          Array.from(
            document.querySelectorAll(`#colors div input`) as NodeListOf<HTMLInputElement>,
          ),
        ),
      );

    nodes.forEach((element: HTMLInputElement) => {
      element.checked = false;
    });
  }
  return (
    <div className="filter" ref={reference}>
      <div className="filter_wrapper">
        <h4 className="filter_title">Filters</h4>
        <a className="filter_button" onClick={clearAllHandler}>
          Clear all
        </a>
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
