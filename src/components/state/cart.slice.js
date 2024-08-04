import { createSlice } from '@reduxjs/toolkit'



const cartSlice = createSlice({
    name: 'cart',
    initialState:{
        cart:[]

    },
    reducers: {  
        addCart:(state, action) =>{
            
            const existingItem = state.cart.find(item => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.cart.push({ ...action.payload, quantity: 1 });
            }
        },
   
      
        removeCart:(state, action) => {
            const existingItem = state.cart.find(item => item.id === action.payload);
            if (existingItem) {
                if (existingItem.quantity > 1) {
                    existingItem.quantity -= 1;
                } else {
                    state.cart = state.cart.filter(item => item.id !== action.payload);
                }
            }
        },
    }
});

export const {addCart, removeCart} = cartSlice.actions;
const { reducer: cartreducer } = cartSlice;
export default cartreducer;