
import { removeCart } from "../state/cart.slice";
import {CartContainer, CartContent, CartName, CartPrice, CartButton, CartImgContainer, CartImg, CartTitle, CartNoItem } from "./styles"
import { useDispatch, useSelector } from "react-redux";
const CartList = () => {
    const cart = useSelector(state => state.cart.cart)
    
    
    const dispatch = useDispatch();
    const HandleRemoveCart = id => {
        dispatch(removeCart(id));
    }
    return(
        <>
        <CartTitle>Carrito de compras</CartTitle>
        
        <CartContainer>
            {
            cart.length ===0 ?
            (
                <CartNoItem>
                    <h1>No hay ningun Producto en el carrito</h1>
                </CartNoItem>
                
            )
            :
            cart.map(item => {
                return(
                    
                        <CartContent key={item.id}>
                            <CartName>{item.title}</CartName>
                            <CartImgContainer>
                                <CartImg src={item.image} />
                            </CartImgContainer>
                            <CartPrice>${item.price}</CartPrice>
                            <span>{item.quantity}</span>
                            <CartButton onClick={()=> HandleRemoveCart(item.id)}>Eliminar del carrito</CartButton>
                        </CartContent>  
                )
            
            })
            
        }                 
        </CartContainer>
        
        </>

    )
}

export default CartList;