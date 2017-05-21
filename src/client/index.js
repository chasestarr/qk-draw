import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/app';
import configureStore from './root';

const store = configureStore();

function render() {
  const Root = (
    <Provider store={store}>
      <App />
    </Provider>
  );

  ReactDOM.render(Root, document.getElementById('app'));
}

render();
