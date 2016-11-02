import {
  formatAmount,
  calcTotal
} from '../../../util/helpers';

export const getSelectedProduct = (products, selectedProductId) => products.find(product => product.id === selectedProductId);

export const getTotal = content => {
  const {products, selectedProductId, selectedQuantity} = content;
  if(!products || !selectedProductId || !selectedQuantity){
    return;
  }

  const selectedProduct = getSelectedProduct(products, selectedProductId);
  if(!selectedProduct){
    return;
  }

  const total = calcTotal(selectedProduct.price, selectedQuantity);
  return total;
}

export const getProducts = data => {
  return data.content.availableProducts.map(productId => {
    const product = data.content.productsDetails.find(product => product.id === productId);
    return product;
  }).map(product => {
    const {id, name, price} = product;
    return {id, name, price};
  });
}

export const formatProductLabel = product => {
  const formattedPrice = formatAmount(product.price);
  return `${product.name} - ${formattedPrice}`;
}
