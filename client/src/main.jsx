import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/reducer/store';
import axios from 'axios';

axios.defaults.baseURL =
  import.meta.env.VITE_API_URL || 'http://127.0.0.1:4000/';

const root = ReactDOM.createRoot(document.getElementById('root'));
const basePath = import.meta.env.VITE_PUBLIC_URL ?? '/';

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename={basePath}>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);
