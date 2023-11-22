import React from 'react';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { SnackbarProvider } from 'notistack';
import { BrowserRouter } from 'react-router-dom';

const AppWrapper: React.FC = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <SnackbarProvider>
          <App />
        </SnackbarProvider>
      </Provider>
    </BrowserRouter>
  );
};

export default AppWrapper;
