import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import '@material/react-text-field/dist/text-field.css';
import '@material/react-material-icon/dist/material-icon.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import App from './App';
import store from './redux/store';

ReactDOM.render(  
    <Provider store={store}>
      <App />
    </Provider>,
  document.getElementById('root')
);