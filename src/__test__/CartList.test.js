import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import CartList from '../components/CartList/index';
import { removeCart } from '../components/state/cart.slice';


const mockStore = configureStore([]);

describe('CartList', () => {
    let store;
    
    beforeEach(() => {
        store = mockStore({
            cart: {
                cart: [
                    {
                        id: 1,
                        title: 'Producto 1',
                        price: 10,
                        quantity: 2,
                        image: 'http://example.com/image1.jpg'
                    },
                    {
                        id: 2,
                        title: 'Producto 2',
                        price: 20,
                        quantity: 1,
                        image: 'http://example.com/image2.jpg'
                    }
                ]
            }
        });

        store.dispatch = jest.fn();
    });

    test('renders CartList with products', () => {
        render(
            <Provider store={store}>
                <CartList />
            </Provider>
        );

        expect(screen.getByText('Carrito de compras')).toBeInTheDocument();
        expect(screen.getByText('Producto 1')).toBeInTheDocument();
        expect(screen.getByText('Producto 2')).toBeInTheDocument();
        expect(screen.getByText('$10')).toBeInTheDocument();
        expect(screen.getByText('$20')).toBeInTheDocument();
    });

    test('renders CartList with no products', () => {
        store = mockStore({
            cart: {
                cart: []
            }
        });

        render(
            <Provider store={store}>
                <CartList />
            </Provider>
        );

        expect(screen.getByText('No hay ningun Producto en el carrito')).toBeInTheDocument();
    });
    test('removes product from cart', () => {
        render(
            <Provider store={store}>
                <CartList />
            </Provider>
        );

        const removeButton = screen.getAllByText('Eliminar del carrito')[0];
        fireEvent.click(removeButton);

        expect(store.dispatch).toHaveBeenCalledWith(removeCart(1));
    });
});
