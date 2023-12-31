import React from 'react';
import ReactDOM from 'react-dom/client';

// Step 1: import Provider, applyMiddleware, combineReducers, createStore
import { Provider } from 'react-redux';

import App from './components/App/App';
import './index.css';
import reduxStore from './store.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Step 3: Wrap you App in a Provider */}
    <Provider store={reduxStore}>
      <App />
    </Provider>
  </React.StrictMode>
);
