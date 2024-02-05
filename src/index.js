import React from 'react';
import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';

import './index.css';

import Homepage from './pages/homepage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <Homepage />
  </StrictMode>
  
);

