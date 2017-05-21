import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducer';
import rootSaga from './saga';

export default function() {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];
  const enhancers = applyMiddleware(...middlewares);

  const store = createStore(rootReducer, {}, enhancers);
  sagaMiddleware.run(rootSaga);

  return store;
}
