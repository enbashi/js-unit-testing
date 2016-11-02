import reducer, {
  initialState
} from './summary';

describe('summary reducer', () => {
  it('defaults to initial state', () => {
    expect(reducer(undefined, undefined)).toEqual(initialState);
  });

  it('handles SET_PRODUCTS', () => {
    const action = {
      type: 'SET_PRODUCTS',
      payload: {
        products: [1,2,3]
      }
    };
    const expected = {
      ...initialState,
      products: [1,2,3]
    };
    expect(reducer(undefined, action)).toEqual(expected);
  });

  it('handles UPDATE_SELECTED_PRODUCT', () => {
    const action = {
      type: 'UPDATE_SELECTED_PRODUCT',
      payload: {
        selectedProductId: '111'
      }
    };
    const expected = {
      ...initialState,
      selectedProductId: '111'
    };
    expect(reducer(undefined, action)).toEqual(expected);
  });

  it('handles UPDATE_SELECTED_QUANTITY', () => {
    const action = {
      type: 'UPDATE_SELECTED_QUANTITY',
      payload: {
        selectedQuantity: 5
      }
    };
    const expected = {
      ...initialState,
      selectedQuantity: 5
    };
    expect(reducer(undefined, action)).toEqual(expected);
  });
});
