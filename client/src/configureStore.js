import {
  createStore,
  applyMiddleware,
  compose,
} from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import rootReducer from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(
  applyMiddleware(
    promiseMiddleware(),
  ),
);
export default () => createStore(
  rootReducer,
  enhancer,
);
