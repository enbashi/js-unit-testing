export const initialState = {
  products: [],
  selectedProductId: null,
  selectedQuantity: null
}
export default (state = initialState, action = {}) => {
  switch (action.type) {
    case 'SET_PRODUCTS':
    case 'UPDATE_SELECTED_PRODUCT':
    case 'UPDATE_SELECTED_QUANTITY':
      return {
        ...state,
        ...action.payload
      };
    default:
      return state
  }
};
