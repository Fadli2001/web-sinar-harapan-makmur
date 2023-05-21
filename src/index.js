import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import App from './fetch/Index';

const root = ReactDOM.createRoot(document.getElementById('root'));
AOS.init();
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
