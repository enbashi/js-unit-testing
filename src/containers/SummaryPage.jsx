import { connect } from 'react-redux';
import {
  getTotal
} from '../redux/modules/summary/summaryHelpers';
import Summary from '../components/summary/Summary';

function mapStateToProps(state) {
  return {
    products: state.summary.products,
    selectedProductId: state.summary.selectedProductId,
    selectedQuantity: state.summary.selectedQuantity,
    total: getTotal(state.summary)
  };
}

const mapDispatchToProps = dispatch => {
  return {
    loadProducts: () => dispatch({
      type: 'LOAD_PRODUCTS'
    }),
    updateProduct: selectedProductId => dispatch({
      type: 'UPDATE_SELECTED_PRODUCT',
      payload: {selectedProductId}
    }),
    updateQuantity: selectedQuantity => dispatch({
      type: 'UPDATE_SELECTED_QUANTITY',
      payload: {selectedQuantity}
    })
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Summary);
