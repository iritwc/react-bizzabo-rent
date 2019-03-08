import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './App'

import configureStore from "./store/configureStore";

const preloadedState = window.__PRELOADED_STATE__;
const store = configureStore(preloadedState);

render(
  (
    <Provider store={store} >
      <App />
    </Provider>
  ),
  document.getElementById('app-root')
);
