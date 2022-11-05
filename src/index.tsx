import 'bootswatch/dist/yeti/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App title="React tasks" />
  </React.StrictMode>
);

reportWebVitals();
