import React from 'react';
import { useEffect } from 'react';
import './scss/pages/App.scss';
import { Main, Catalog, Cart } from './pages';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { AppDispatch } from './redux/store';
import { Footer, Header } from './components';
import {
  fetchProducts,
  setProducts,
  fetchSearchProducts,
  setCurrentProducts,
  fetchUniqueProducts,
} from './redux/catalogSlice';
import { ProductType, FilterType, ArrayFilterType, CartProductType } from './types/MainTypes';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import Product from './pages/Product';

interface StateI {
  products: ProductType[];
  uniqueProducts: ProductType[];
  sortBy: string;
  allFilters: FilterType;
  allArrayFilters: ArrayFilterType;
  priceRangeProducts: number[];
  priceRangeFilter: number[];
  cart: CartProductType[];
  category?: string;
  search?: string;
  searchAll?: string;
  pageCount?: number;
  page?: number;
}

const App: React.FC = () => {
  const dispatch: AppDispatch = useAppDispatch();

  const state = useAppSelector<StateI>(({ catalogReducer, cartReducer }) => ({
    products: catalogReducer.products,
    uniqueProducts: catalogReducer.uniqueProducts,
    sortBy: catalogReducer.sortBy,
    allFilters: catalogReducer.allFilters,
    allArrayFilters: catalogReducer.allArrayFilters,
    category: catalogReducer.category,
    priceRangeProducts: catalogReducer.priceRangeProducts,
    priceRangeFilter: catalogReducer.priceRangeFilter,
    search: catalogReducer.searchQuery,
    searchAll: catalogReducer.searchAllQuery,
    page: catalogReducer.page,

    cart: cartReducer.items,
  }));

  const isMounted = React.useRef(false);

  useEffect(() => {
    dispatch(fetchProducts(state, setProducts));
  }, [
    dispatch,
    state.allFilters,
    state.allArrayFilters,
    state.sortBy,
    state.priceRangeFilter,
    state.category,
    state.search,
    state.page,
  ]);
  useEffect(() => {
    dispatch(fetchUniqueProducts(state));
  }, [state.category]);

  useEffect(() => {
    dispatch(fetchProducts(state, setCurrentProducts));
  }, []);

  useEffect(() => {
    dispatch(fetchSearchProducts(state));
  }, [state.searchAll]);

  useEffect(() => {
    if (!isMounted.current) {
      const json = JSON.stringify(state.cart);
      localStorage.setItem('cart', json);
    }
  }, [state.cart]);
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route index element={<Main></Main>} />
          <Route path="/catalog/:id" element={<Catalog></Catalog>} />
          <Route path="/catalog/" element={<Catalog></Catalog>} />
          <Route
            path={`/product/:id`}
            element={<Product products={state.uniqueProducts}></Product>}
          />
          <Route path="/product/*" element={<div>NO ROUTES</div>}></Route>
          <Route path="/cart/" element={<Cart />} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
};

export default App;
