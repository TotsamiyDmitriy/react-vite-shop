import React, { useEffect } from 'react';
import '../../scss/components/filter.scss';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { reloadFilters, switchFilters } from '../../redux/catalogSlice';
import { ProductType } from '../../types/MainTypes';
import { UniqueFilter } from '../../utils/filters';
import { AppDispatch } from '../../redux/store';

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

  const state = useAppSelector(({ catalogReducer }) => ({
    category: catalogReducer.category,
  }));
  tmpArray = [];

  useEffect(() => {
    dispatch(reloadFilters());
  }, [state.category]);

  function HandlerChecker(item: any) {
    dispatch(switchFilters([item[keyItem], keyItem]));
  }

  return (
    <ul className="filter__container" id={keyItem}>
      <h4 className="filter__title">{title}</h4>
      {listFilters.map((item: any, index: number) => {
        return (
          <div key={`${item[keyItem]}`} className="filter_input__wrapper">
            <input
              className="custom-checkbox"
              onChange={() => HandlerChecker(item)}
              key={item[keyItem]}
              id={item[keyItem]}
              type="checkbox"
              name={item[keyItem]}
            />
            <label key={`${index}_${item[keyItem]}`} htmlFor={item[keyItem]}>
              {item[keyItem]}
            </label>
          </div>
        );
      })}
    </ul>
  );
};

export default Filter;
