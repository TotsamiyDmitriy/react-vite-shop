import React, { useRef } from 'react';
import '../scss/components/sortBy.scss';
import { useAppDispatch } from '../redux/hooks';
import { setSortBy } from '../redux/catalogSlice';

interface SortI {
  sort: string;
  setSort: Function;
}

const SortBy: React.FC<SortI> = ({ sort }) => {
  const dispatch = useAppDispatch();

  const sortType = [
    { title: 'Popularity', request: '_sort=rating&_order=desc' },
    { title: 'Price - Low to High', request: '_sort=price&_order=asc' },
    { title: 'Price - High to Low', request: '_sort=price&_order=desc' },
    { title: 'Price - Newest', request: '_sort=offers&_order=asc' },
  ];

  const refSort = useRef<HTMLDivElement>(null);
  const refSorted = useRef<HTMLDivElement>(null);
  const sortNode = refSort.current;
  const sortedNode = refSorted.current;

  const sortHandler = () => {
    sortNode !== null && sortNode.classList.toggle('active');
    sortedNode !== null && sortedNode.classList.toggle('active');
  };

  return (
    <div className="main" onClick={sortHandler} ref={refSort}>
      SortBy
      <svg
        className="svg"
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M7.5 11.25L15 18.75L22.5 11.25"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <div className="sorting_block" ref={refSorted}>
        <ul>
          {sortType.map((item: { title: string; request: string }) => {
            return (
              <li
                key={`${item.title}__${item.request}`}
                className={`${item.request === sort ? `active` : ``}`}
                onClick={() => dispatch(setSortBy(item.request))}>
                {item.title}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default SortBy;
