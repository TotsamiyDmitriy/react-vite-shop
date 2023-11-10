import React from 'react';
import { useEffect } from 'react';
import './scss/pages/App.scss';
import { Main, Catalog, Cart, Favorite } from './pages';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { AppDispatch } from './redux/store';
import { Footer, Header } from './components';
import {
  fetchProducts,
  fetchSearchProducts,
  fetchCurrentProducts,
  fetchUniqueProducts,
} from './redux/catalogSlice';
import { authUser, setOpenModal, setTypeModal } from './redux/authSlice';
import { ProductType, FilterType, ArrayFilterType, CartProductType } from './types/MainTypes';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import Product from './pages/Product';
import { Modal, Fade } from '@mui/material';
import './utils/firebase';
import { SignIn, SignUp } from './components/Modals';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

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
  openModal: boolean;
  typeModal: boolean;
}

const App: React.FC = () => {
  const dispatch: AppDispatch = useAppDispatch();

  const state = useAppSelector<StateI>(({ catalogReducer, cartReducer, authReducer }) => ({
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

    openModal: authReducer.openModal,
    typeModal: authReducer.typeModal,

    cart: cartReducer.items,
  }));

  const isMounted = React.useRef(false);

  useEffect(() => {
    dispatch(fetchProducts(state));
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
    dispatch(fetchCurrentProducts());
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

  useEffect(() => {
    const auth = getAuth();
    const listener = onAuthStateChanged(auth, (user) => {
      if (user) {
        const userInfo = {
          email: user.email,
          token: user.refreshToken,
          id: user.uid,
        };
        dispatch(authUser(userInfo));
      } else {
        const userInfo = {
          email: null,
          token: null,
          id: null,
        };
        dispatch(authUser(userInfo));
      }
      return () => {
        listener();
      };
    });
  }, []);

  const handleClose = () => {
    dispatch(setOpenModal(false));
    dispatch(setTypeModal(false));
  };

  const handlerModal = () => {
    dispatch(setOpenModal(true));
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Modal open={state.openModal} onClose={handleClose}>
          <Fade in={state.openModal}>
            {state.typeModal === false ? <SignIn></SignIn> : <SignUp></SignUp>}
          </Fade>
        </Modal>
        <Header handlerModal={handlerModal}></Header>
        <Routes>
          <Route index element={<Main></Main>} />
          <Route path="/catalog/:id" element={<Catalog></Catalog>} />
          <Route path="/catalog/" element={<Catalog></Catalog>} />
          <Route
            path={`/product/:id`}
            element={<Product products={state.uniqueProducts}></Product>}
          />
          <Route path="/favourite" element={<Favorite />} />
          <Route path="/product/*" element={<div>NO ROUTES</div>}></Route>
          <Route path="/cart/" element={<Cart />} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
};

export default App;
