import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from './modules';
import * as sagas from './modules/sagas';
import createSagaMiddleware from 'redux-saga';
import { values } from 'lodash';
const sagaMiddleware = createSagaMiddleware();

export const configureStore = initialState => {
  let store = createStore(rootReducer, initialState, compose(
    applyMiddleware(sagaMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f //add support for Redux dev tools
    )
  );
  values(sagas).forEach(sagaMiddleware.run);
  return store;
}

export default configureStore;
