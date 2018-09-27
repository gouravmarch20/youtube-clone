import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import middlewareLogger from './middleware/middleware-logger';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
require('dotenv').config();

const store = createStore(rootReducer, applyMiddleware(middlewareLogger, thunkMiddleware));

const render = (Component) => {
  ReactDOM.render(
    <Provider store={store}>
      <Router>
        <Component />
      </Router>
    </Provider>,
    document.getElementById('root')
  );
}

render(App);

registerServiceWorker();
