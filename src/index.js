//core
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

import store from './store';
//components
import App from './App';
//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

render(
  <Provider store={store}>
    <BrowserRouter>
        <Route component={App} />
    </BrowserRouter>
  </Provider>,
  document.getElementById('app'),
);