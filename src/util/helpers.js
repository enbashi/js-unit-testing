import _ from 'lodash';

export const calcTotal = (price, quantity) => {
  if(_.isNil(price) || _.isNil(quantity)){
    return;
  }
  return price * quantity;
};

export const formatAmount = (amount = 0) => {
  return `$ ${amount.toFixed(2)}`;
};
