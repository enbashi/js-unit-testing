import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import configureStore from './redux/configureStore';

const store = configureStore();
const rootEl = document.getElementById('root');

const render = () => ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootEl
);
render();
store.subscribe(render);
