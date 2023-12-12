import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ThemeContext from './context/ThemeContext';
import CountriesContext from './context/CountriesContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeContext>
      <CountriesContext>
        <App />
      </CountriesContext>
    </ThemeContext>
  </React.StrictMode>
);

