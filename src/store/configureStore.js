/* eslint global-require: 0 */

import Immutable from 'immutable';
import { Platform } from 'react-native';
import {
  compose,
  createStore,
  applyMiddleware,
  combineReducers,
} from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';
import apolloClient from '../graphql/client';


const enhancer = compose(
  applyMiddleware(
    apolloClient.middleware(),
    thunk.withExtraArgument(apolloClient)
  ),
);

const allReducers = combineReducers({
  reducers,
  apollo : apolloClient.reducers(),
});

export default function configureStore (initialState) {
  const store = createStore(allReducers, initialState, enhancer);

  return store;
}
