import React from 'react';
import { Layout } from 'components/Layout/Layout';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { FilmApp } from 'components/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <FilmApp />
    </BrowserRouter>
  </React.StrictMode>
);
