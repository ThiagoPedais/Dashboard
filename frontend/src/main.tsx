import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/custom.scss';
import './responsive.scss';
import App from './App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
