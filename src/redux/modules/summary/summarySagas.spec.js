import {
  call,
  put,
  fork,
  take
} from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';
import axios from 'axios';
import {
  getProducts
} from './summaryHelpers';
import summarySagas, {
  loadProductsWorker,
  fetchFromServer,
  loadProductsWatch
} from './summarySagas';

describe('loadProductsWorker saga', () => {
  const generator = loadProductsWorker();

  it('calls fetchFromServer', () => {
    const action = generator.next().value;
    expect(action).toEqual(call(fetchFromServer));
  });

  it('calls getProducts', () => {
    const data = {
      products: []
    };
    const action = generator.next({data}).value;
    expect(action).toEqual(call(getProducts, data));
  });

  it('dispaches SET_PRODUCTS event', () => {
    const products = [1,2,3];
    const action = generator.next(products);
    expect(action.value).toEqual( put({
      type: 'SET_PRODUCTS',
      payload: {products}
    }));
  });

  it('ends execution', () => {
    expect(generator.next()).toEqual({ done: true, value: undefined });
  });
});

describe('loadProductsWatch saga', () => {
  const generator = loadProductsWatch();

  it('takes every LOAD_PRODUCTS', () => {
    const action = generator.next().value;
    expect(action).toEqual(take('LOAD_PRODUCTS', loadProductsWorker));
  });
});

describe('summarySagas saga', () => {
  const generator = summarySagas();

  it('forks loadProductsWatch', () => {
    const action = generator.next().value;
    expect(action).toEqual([fork(loadProductsWatch)]);
  });
});

describe('fetchFromServer', () => {
  it('gets called', () => {
    expect(fetchFromServer()).toEqual(axios.get('https://ndv.firebaseio.com/js-uni-testing.json'));
  })
});
