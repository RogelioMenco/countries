import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import App from './App';
import { store } from './redux/reducer/store';

axios.defaults.baseURL =
  import.meta.env.VITE_API_URL || 'http://127.0.0.1:4000/';

const root = ReactDOM.createRoot(document.getElementById('root'));

// Para Github Pages necesitamos HashRouter de lo contrario podemos usar BrowserRouter
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  </React.StrictMode>,
);
