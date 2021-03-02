import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import reducers from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

function Root({ initialState, children }) {
  return (
    <Provider
      store={createStore(
        reducers,
        initialState || {},
        composeEnhancers(applyMiddleware(thunk))
      )}
    >
      {children}
    </Provider>
  );
}

export default Root;
