import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import ProductList from '../components/ProductsList/index';
import { productsAsync } from '../components/state/products.slice';
import { IDLE, LOADING, FAILDED, SUCCES } from '../components/state/status';

const mockStore = configureStore([]);

jest.mock('../components/state/products.slice', () => ({
  ...jest.requireActual('../components/state/products.slice'),
  productsAsync: jest.fn(() => ({ type: 'products/fetchProducts' })),
}));

describe('ProductList', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      products: {
        products: [],
        status: IDLE,
      },
      cart: {
        items: []
      }
    });

    store.dispatch = jest.fn();
  });

  it('should render loading message when status is LOADING', () => {
    store = mockStore({
      products: {
        products: [],
        status: LOADING,
      },
      cart: {
        items: []
      }
    });

    render(
      <Provider store={store}>
        <ProductList />
      </Provider>
    );

    expect(screen.getByText('CARGANDO POR FAVOR ESPERE...')).toBeInTheDocument();
    expect(screen.getByText('en unos instantes se presentaran los productos')).toBeInTheDocument();
  });

  it('should render error message when status is FAILDED', () => {
    store = mockStore({
      products: {
        products: [],
        status: FAILDED,
      },
      cart: {
        items: []
      }
    });

    render(
      <Provider store={store}>
        <ProductList />
      </Provider>
    );

    expect(screen.getByText('HAY UN ERROR')).toBeInTheDocument();
    expect(screen.getByText('no se han encontrado los productos')).toBeInTheDocument();
  });

  it('should dispatch productsAsync when status is IDLE', () => {
    render(
      <Provider store={store}>
        <ProductList />
      </Provider>
    );

    expect(store.dispatch).toHaveBeenCalledWith(productsAsync());
  });

  it('should render products ', () => {
    const product = {
      id: 1,
      title: 'Product 1',
      price: 100,
      image: 'https://example.com/product1.jpg'
    };

    store = mockStore({
      products: {
        products: [product],
        status: SUCCES,
      },
      cart: {
        items: []
      }
    });

    render(
      <Provider store={store}>
        <ProductList />
      </Provider>
    );

    expect(screen.getByText(product.title)).toBeInTheDocument();
    expect(screen.getByText(`$${product.price}`)).toBeInTheDocument();
  });
});