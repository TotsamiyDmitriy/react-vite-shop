import React from 'react';
import '../../scss/components/filter.scss';
import { useAppDispatch } from '../../redux/hooks';
import { ProductType } from '../../types/MainTypes';
import { UniqueFilter } from '../../utils/filters';
import { AppDispatch } from '../../redux/store';
import { Checkbox } from '.';

interface IFilter {
  products: ProductType[];
  keyItem: string;
  title: string;
  indexBlock: number;
}

const Filter: React.FC<IFilter> = ({ title, keyItem, products }) => {
  const dispatch: AppDispatch = useAppDispatch();

  let tmpArray: Array<string> = [];

  const listFilters = products.filter((item: ProductType) => UniqueFilter(item, keyItem, tmpArray));

  tmpArray = [];

  return (
    <ul className="filter__container" id={keyItem}>
      <h4 className="filter__title">{title}</h4>
      {listFilters.map((item: any, index: number) => {
        return (
          <Checkbox
            key={item[keyItem]}
            item={item}
            index={index}
            keyItem={keyItem}
            dispatch={dispatch}></Checkbox>
        );
      })}
    </ul>
  );
};

export default Filter;
