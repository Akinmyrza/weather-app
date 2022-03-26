/* External dependencies */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

/* Local dependencies */
import App from './App';
import { createStore } from './store';

const store = createStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
