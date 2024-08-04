import { configureStore } from "@reduxjs/toolkit";
import cartreducer from "../components/state/cart.slice";
import productreducer from '../components/state/products.slice';
;

const store = configureStore({
    reducer: {
        cart: cartreducer,
        products: productreducer,
        

    }
});

export default store;