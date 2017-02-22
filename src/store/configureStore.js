/* eslint global-require: 0 */

import {
  createStore,
  applyMiddleware,
  combineReducers,
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import createSagaMiddleware, { END } from 'redux-saga';

import reducers from '../reducers';
import apolloClient from '../graphql/client';

const sagaMiddleware = createSagaMiddleware();

const enhancer = composeWithDevTools(
  applyMiddleware(
    sagaMiddleware,
    apolloClient.middleware(),
    thunk.withExtraArgument(apolloClient)
  ),
);

const allReducers = combineReducers({
  reducers,
  apollo : apolloClient.reducer(),
});

export default function configureStore (initialState) {
  const store = createStore(allReducers, initialState, enhancer);

  if (module.hot) {
    module.hot.accept(() => {
      store.replaceReducer(require('../reducers').default);
    });
  }

  store.runSaga = sagaMiddleware.run;
  store.close = () => store.dispatch(END);
  return store;
}
