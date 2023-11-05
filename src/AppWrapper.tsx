import React from 'react';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { SnackbarProvider, MaterialDesignContent } from 'notistack';
import { styled } from '@mui/material';

const AppWrapper: React.FC = () => {
  return (
    <Provider store={store}>
      <SnackbarProvider>
        <App />
      </SnackbarProvider>
    </Provider>
  );
};

export default AppWrapper;
