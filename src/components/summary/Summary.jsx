import React, { Component, PropTypes } from 'react';
import _ from 'lodash';
import {
  formatProductLabel
} from '../../redux/modules/summary/summaryHelpers';
import {
  formatAmount
} from '../../util/helpers';

class Summary extends Component {
  componentDidMount(){
    this.props.loadProducts();
  }

  render() {
    const {
      updateProduct,
      updateQuantity,
      products,
      total,
      selectedProductId,
      selectedQuantity,
    } = this.props;

    if(_.isEmpty(products)){
      return <h1 className="loading">Loading......</h1>;
    }

    return (
      <div className="main-content">

          <form>
              <div className="form-title-row">
                  <h1>Welcome to my store</h1>
              </div>
              <div className="form-row">
                  <label>
                      <span>Product</span>
                      <select defaultValue={selectedProductId} onChange={(e) => updateProduct(e.target.value)}>
                        <option>Select</option>
                        {
                          products.map((product, index) => {
                            return (<option key={index} value={product.id}>{formatProductLabel(product)}</option>);
                          })
                        }
                      </select>
                  </label>
              </div>
              <div className="form-row">
                  <label>
                      <span>Quantity</span>
                      <select defaultValue={selectedQuantity} onChange={(e) => updateQuantity(parseInt(e.target.value, 10))}>
                          <option>Select</option>
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                      </select>
                  </label>
              </div>
              {
                total &&
                <div className="form-row total">
                    <label>
                        <span>Total</span>
                    </label>
                    <span>{formatAmount(total)}</span>
                </div>
              }
          </form>
      </div>
    );
  }
}

Summary.propTypes = {
  products: PropTypes.array,
  selectedProductId:  PropTypes.string,
  selectedQuantity: PropTypes.number,
  total: PropTypes.number,
  loadProducts: PropTypes.func.isRequired,
  updateProduct: PropTypes.func.isRequired,
  updateQuantity: PropTypes.func.isRequired
};

export default Summary;
