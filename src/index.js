import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { ContextProvider } from './utils/Context'

// console.log(ContextProvider);
ReactDOM.render(
  <ContextProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </ContextProvider>,
  document.getElementById('root')
);


