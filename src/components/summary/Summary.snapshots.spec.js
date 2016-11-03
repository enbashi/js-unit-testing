import React from 'react';
import Summary from './Summary';
import renderer from 'react-test-renderer';

describe('Summary Snapshots', () => {
  it('renders Loading when no products are available yet', () => {
    const component = renderer.create(
      <Summary
        products={[]}
        loadProducts={() => {}}
        updateProduct={() => {}}
        updateQuantity={() => {}}
      />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders products', () => {
    const component = renderer.create(
      <Summary
        products={[
          {
            id: 111,
            name: 'X1 Cound DVR',
            price: 10.00
          },
          {
            id: 222,
            name: 'DTA Additional Outlet',
            price: 3.99
          }
        ]}
        loadProducts={() => {}}
        updateProduct={() => {}}
        updateQuantity={() => {}}
      />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
