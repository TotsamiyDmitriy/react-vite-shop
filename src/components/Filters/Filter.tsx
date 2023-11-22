import React from 'react';
import '../../scss/components/filter.scss';
import { useAppDispatch } from '../../redux/hooks';
import { ProductType } from '../../types/MainTypes';
import { UniqueFilter } from '../../utils/filters';
import { AppDispatch } from '../../redux/store';
import { Checkbox } from '.';
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';

interface IFilter {
  products: ProductType[];
  keyItem: string;
  title: string;
  indexBlock: number;
}

const Filter: React.FC<IFilter> = ({ title, keyItem, products }) => {
  const dispatch: AppDispatch = useAppDispatch();

  let tmpArray: Array<string> = [];

  const [active, setActive] = React.useState(false);

  const listFilters = products.filter((item: ProductType) => UniqueFilter(item, keyItem, tmpArray));

  tmpArray = [];

  return (
    <Accordion className="filter__container" id={keyItem}>
      <AccordionSummary
        className="filter__title"
        onClick={() => {
          setActive(!active);
        }}>
        <h4>{title}</h4>
        <svg
          className={`filter__title_svg ${active ? 'active' : ''}`}
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M7.5 11.25L15 18.75L22.5 11.25"
            stroke="#272727"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </AccordionSummary>
      <AccordionDetails>
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
      </AccordionDetails>
    </Accordion>
  );
};

export default Filter;
