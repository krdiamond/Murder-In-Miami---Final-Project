import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducer.js'
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

const store = createStore(reducer)


ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,

  document.getElementById('root')
);
