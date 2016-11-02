import {
  getSelectedProduct,
  getTotal,
  getProducts,
  formatProductLabel
} from './summaryHelpers';
import {
  formatAmount,
  calcTotal
} from '../../../util/helpers';

describe('getSelectedProduct function', () => {
  it('returns the selected product based on the passed product id', () => {
    const products = [
      {
        id: '111',
        price: 50.50
      },
      {
        id: '222',
        price: 150.50
      }
    ];

    expect(getSelectedProduct(products, '111')).toEqual({
      id: '111',
      price: 50.50
    });

  });
});


describe('getTotal function', () => {
  it('calculates the total amount from the state', () => {
    const content = {
      products: [
        {
          id: '111',
          price: 50.50
        },
        {
          id: '222',
          price: 150.50
        }
      ],
      selectedProductId: '222',
      selectedQuantity: 5
    };
    expect(getTotal(content)).toEqual(calcTotal(150.50, 5));
  });
  it('checks for truthy arguements', () => {
    expect(getTotal({})).toBeUndefined();
  });
  it('returns undefined if the passed id does not match any of the products ', () => {
    const content = {
      products: [
        {
          id: '111',
          price: 50.50
        },
        {
          id: '222',
          price: 150.50
        }
      ],
      selectedProductId: '333',
      selectedQuantity: 5
    };
    expect(getTotal(content)).toBeUndefined();
  });
});

describe('getProducts function', () => {
  const data = {
    status: "SUCCESS",
    content: {
      availableProducts: [
        111
      ],
      productsDetails: [
        {
          id: 111,
          name: 'X1 Cound DVR',
          price: 10.00,
          isIncluded: true,
          isOneTimeFee: true
        },
        {
          id: 222,
          name: 'DTA Additional Outlet',
          price: 3.99,
          isIncluded: true,
          isOneTimeFee: true
        }
      ]
    }
  };

  it('returns a clean product list', () => {
    const expected = [
      {
        id: 111,
        name: 'X1 Cound DVR',
        price: 10.00
      }
    ]
    expect(getProducts(data)).toEqual(expected);
  });
});

describe('formatProductLabel function', () => {
  it('returns a formatted string with name and price', () => {
    const product = {
      id: 111,
      name: 'X1 Cound DVR',
      price: 10
    };

    expect(formatProductLabel(product)).toBe('X1 Cound DVR - $ 10.00')
  });
});
