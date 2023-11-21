import React from 'react';
import type ColorI from '../../types/IColor';
import { UniqueColors } from '../../utils/filters';
import { ProductType } from '../../types/MainTypes';
import { AppDispatch } from '../../redux/store';
import { useAppDispatch } from '../../redux/hooks';

import '../../scss/components/filter.scss';
import { CheckboxArray } from '.';

const Color: React.FC<ColorI> = ({ products, keys, children }) => {
  const dispatch: AppDispatch = useAppDispatch();
  let tmpArray: string[] = [];

  products.filter((product: ProductType) => {
    UniqueColors(product, tmpArray, keys);
  });
  const listColors = tmpArray;
  tmpArray = [];

  return (
    <ul className="filter__container" id={keys}>
      <h4 className="filter__title">{children}</h4>
      {listColors.map((color: string, _index) => {
        return (
          <CheckboxArray key={color} color={color} keys={keys} dispatch={dispatch}></CheckboxArray>
        );
      })}
    </ul>
  );
};

export default Color;
