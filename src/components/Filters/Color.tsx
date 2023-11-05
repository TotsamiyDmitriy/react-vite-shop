import React from 'react';
import type ColorI from '../../types/IColor';
import { UniqueColors } from '../../utils/filters';
import { ProductType } from '../../types/MainTypes';
import { AppDispatch } from '../../redux/store';
import { useAppDispatch } from '../../redux/hooks';
import { switchArrayFilters } from '../../redux/catalogSlice';

import '../../scss/components/filter.scss';

const Color: React.FC<ColorI> = ({ products, keys, children }) => {
  const dispatch: AppDispatch = useAppDispatch();
  let tmpArray: string[] = [];

  products.filter((product: ProductType) => {
    UniqueColors(product, tmpArray, keys);
  });
  const listColors = tmpArray;
  tmpArray = [];

  function HandlerChecker(item: string[]) {
    dispatch(switchArrayFilters(item));
  }
  return (
    <ul className="filter__container" id={keys}>
      <h4 className="filter__title">{children}</h4>
      {listColors.map((color: any, index) => {
        return (
          <div key={`${color}`} className="filter_input__wrapper">
            <input
              className="custom-checkbox"
              onChange={() => HandlerChecker([color, keys])}
              key={color}
              id={color}
              type="checkbox"
              name={color}
            />
            <label key={`${index}_${color}`} htmlFor={color}>
              {color}
            </label>
          </div>
        );
      })}
    </ul>
  );
};

export default Color;
