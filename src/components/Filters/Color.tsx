import React from 'react';
import type ColorI from '../../types/IColor';
import { UniqueColors } from '../../utils/filters';
import { ProductType } from '../../types/MainTypes';
import { AppDispatch } from '../../redux/store';
import { useAppDispatch } from '../../redux/hooks';
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import '../../scss/components/filter.scss';
import { CheckboxArray } from '.';

const Color: React.FC<ColorI> = ({ products, keys, children }) => {
  const dispatch: AppDispatch = useAppDispatch();

  let tmpArray: string[] = [];

  const [active, setActive] = React.useState(false);

  products.filter((product: ProductType) => {
    UniqueColors(product, tmpArray, keys);
  });
  const listColors = tmpArray;
  tmpArray = [];

  return (
    <Accordion className="filter__container" id={keys}>
      <AccordionSummary
        className="filter__title"
        onClick={() => {
          setActive(!active);
        }}>
        <h4>{children}</h4>
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
        {listColors.map((color: string, _index) => {
          return (
            <CheckboxArray
              key={color}
              color={color}
              keys={keys}
              dispatch={dispatch}></CheckboxArray>
          );
        })}
      </AccordionDetails>
    </Accordion>
  );
};

export default Color;
