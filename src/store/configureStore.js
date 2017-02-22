/* eslint global-require: 0 */

import {
  createStore,
  applyMiddleware,
  combineReducers,
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducers from '../reducers';
import apolloClient from '../graphql/client';


const enhancer = composeWithDevTools(
  applyMiddleware(
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

  return store;
}
