import React from 'react';
import { createRoot } from 'react-dom/client';
import { Store, StoreProvider } from "./stores/Store";
import './index.css';
import App from './App';

const store = new Store();
const rootElement = document.getElementById('root');
const root = createRoot(rootElement!);

root.render(
  <StoreProvider store={store}>
    <App />
  </StoreProvider>
);
