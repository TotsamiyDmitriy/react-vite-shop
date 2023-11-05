import React from 'react';
import '../../scss/components/search.scss';

import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setSearch, setSearchAll } from '../../redux/catalogSlice';
import { NavLink, useLocation } from 'react-router-dom';
import { ProductType } from '../../types/MainTypes';
import { SearchElement } from '.';

type SearchProps = {
  className?: string;
};

const Search: React.FC<SearchProps> = ({ className }) => {
  const dispatch = useAppDispatch();
  const state = useAppSelector(({ catalogReducer }) => ({
    uniqueProducts: catalogReducer.uniqueProducts,
    currentProducts: catalogReducer.currentProducts,
    searchProducts: catalogReducer.searchProducts,
    search: catalogReducer.searchQuery,
    searchAll: catalogReducer.searchAllQuery,
  }));

  const itemHandler = () => {
    dispatch(setSearchAll(''));
  };

  const searchBtnHandler = () => {
    dispatch(setSearch(state.searchAll));
  };

  const searchXMarkHandler = () => {
    dispatch(setSearch(''));
  };

  const location = useLocation();
  if (location.pathname.includes('catalog')) {
    return (
      <div className={`search ${className}`}>
        <input
          type="text"
          placeholder="Search here"
          onChange={(e) => {
            dispatch(setSearch(e.target.value));
          }}
          autoFocus
          value={state.search}
        />
        <a className="svg-btn">
          {state.search === '' ? (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_1_6141)">
                <path
                  d="M22.4813 18.7367L18.6804 14.9359L15.7569 13.728C16.7304 12.3437 17.2519 10.6923 17.25 9C17.25 4.45092 13.5491 0.75 9 0.75C4.45092 0.75 0.75 4.45092 0.75 9C0.75 13.5491 4.45092 17.25 9 17.25C10.707 17.2519 12.3721 16.7214 13.7634 15.7323L14.9681 18.648L18.7687 22.449C19.0125 22.6927 19.3019 22.8861 19.6204 23.018C19.9388 23.15 20.2802 23.2179 20.6249 23.2179C20.9696 23.2179 21.311 23.15 21.6295 23.0181C21.948 22.8862 22.2374 22.6928 22.4811 22.4491C22.7249 22.2053 22.9183 21.9159 23.0502 21.5975C23.1821 21.279 23.25 20.9376 23.2501 20.5929C23.2501 20.2482 23.1822 19.9068 23.0503 19.5883C22.9184 19.2698 22.725 18.9805 22.4813 18.7367ZM2.25 9C2.25 5.27812 5.27812 2.25 9 2.25C12.7219 2.25 15.75 5.27812 15.75 9C15.75 12.7219 12.7219 15.75 9 15.75C5.27812 15.75 2.25 12.7219 2.25 9ZM21.4205 21.3883C21.2094 21.599 20.9233 21.7173 20.625 21.7173C20.3267 21.7173 20.0406 21.599 19.8295 21.3883L16.2402 17.799L15.1201 15.088L17.8312 16.208L21.4206 19.7973C21.6313 20.0085 21.7495 20.2946 21.7495 20.5928C21.7495 20.8911 21.6312 21.1772 21.4205 21.3883Z"
                  fill="#272727"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_6141">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          ) : (
            <svg
              onClick={searchXMarkHandler}
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 -960 960 960"
              width="24">
              <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
            </svg>
          )}
        </a>
      </div>
    );
  } else {
    return (
      <div className={`search ${className}`}>
        <input
          type="text"
          placeholder="Search here"
          onChange={(e) => {
            dispatch(setSearchAll(e.target.value));
          }}
          autoFocus
          value={state.searchAll}
        />
        {state.searchAll && (
          <ul className="search_list">
            {state.searchProducts.map((el: ProductType, index: number) => {
              return (
                <li key={`${el.name}__${index}`} className="search_list__item" id={`${index}`}>
                  {
                    <NavLink to={`/product/${el.id}`}>
                      <SearchElement element={el} itemHandler={itemHandler}></SearchElement>
                    </NavLink>
                  }
                </li>
              );
            })}
          </ul>
        )}
        <NavLink to={`/catalog/`} onClick={searchBtnHandler} className="svg-btn">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_1_6141)">
              <path
                d="M22.4813 18.7367L18.6804 14.9359L15.7569 13.728C16.7304 12.3437 17.2519 10.6923 17.25 9C17.25 4.45092 13.5491 0.75 9 0.75C4.45092 0.75 0.75 4.45092 0.75 9C0.75 13.5491 4.45092 17.25 9 17.25C10.707 17.2519 12.3721 16.7214 13.7634 15.7323L14.9681 18.648L18.7687 22.449C19.0125 22.6927 19.3019 22.8861 19.6204 23.018C19.9388 23.15 20.2802 23.2179 20.6249 23.2179C20.9696 23.2179 21.311 23.15 21.6295 23.0181C21.948 22.8862 22.2374 22.6928 22.4811 22.4491C22.7249 22.2053 22.9183 21.9159 23.0502 21.5975C23.1821 21.279 23.25 20.9376 23.2501 20.5929C23.2501 20.2482 23.1822 19.9068 23.0503 19.5883C22.9184 19.2698 22.725 18.9805 22.4813 18.7367ZM2.25 9C2.25 5.27812 5.27812 2.25 9 2.25C12.7219 2.25 15.75 5.27812 15.75 9C15.75 12.7219 12.7219 15.75 9 15.75C5.27812 15.75 2.25 12.7219 2.25 9ZM21.4205 21.3883C21.2094 21.599 20.9233 21.7173 20.625 21.7173C20.3267 21.7173 20.0406 21.599 19.8295 21.3883L16.2402 17.799L15.1201 15.088L17.8312 16.208L21.4206 19.7973C21.6313 20.0085 21.7495 20.2946 21.7495 20.5928C21.7495 20.8911 21.6312 21.1772 21.4205 21.3883Z"
                fill="#272727"
              />
            </g>
            <defs>
              <clipPath id="clip0_1_6141">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </NavLink>
      </div>
    );
  }
};

export default Search;
