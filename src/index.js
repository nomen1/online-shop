import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./App/AppContainer"
import * as serviceWorker from './serviceWorker';
import store from "./redux/store";
import {Provider} from "react-redux"
import 'semantic-ui-css/semantic.min.css'

ReactDOM.render(
  <React.StrictMode>
     <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


serviceWorker.unregister();
