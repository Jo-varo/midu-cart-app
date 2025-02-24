import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { FiltersContextProvider } from './context/FiltersContext.tsx';
import { CartContextProvider } from './context/CartContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CartContextProvider>
      <FiltersContextProvider>
        <App />
      </FiltersContextProvider>
    </CartContextProvider>
  </React.StrictMode>
);
