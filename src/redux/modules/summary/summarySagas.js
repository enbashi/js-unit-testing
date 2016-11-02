import {
  call,
  put,
  fork
} from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';
import axios from 'axios';
import {
  getProducts
} from './summaryHelpers';


export const fetchFromServer = () => {
  /* istanbul ignore next*/
  return axios.get('https://ndv.firebaseio.com/js-uni-testing.json');
}

export function* loadProductsWatch() {
  /* istanbul ignore next*/
  yield* takeLatest('LOAD_PRODUCTS', loadProductsWorker);
}

export function* loadProductsWorker() {
  try {
    const {data} = yield call(fetchFromServer);
    const products = yield call(getProducts, data);
    yield put({
      type: 'SET_PRODUCTS',
      payload: {products}
    });
  } catch(e) {
    /* istanbul ignore next*/
    yield call (console.error, e);
  }
}

export default function* summarySagas() {
  yield [
    fork(loadProductsWatch)
  ];
}
