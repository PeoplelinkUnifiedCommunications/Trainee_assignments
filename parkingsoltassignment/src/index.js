import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {createStore} from 'redux'
import {Provider} from 'react-redux'
import data from './redux/reducer/detailsState'
import {composeWithDevTools} from "redux-devtools-extension"


const store =createStore(data,composeWithDevTools())

ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);


