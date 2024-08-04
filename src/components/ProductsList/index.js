import { useDispatch, useSelector } from "react-redux";
import {ProductImg, ProductsButton, ProductsContainer, ProductsContent, ProductsImgContainer, ProductsInfoContainer, ProductsName, ProductsPrice, ProductsTitle} from "./styles";
import { addCart } from "../state/cart.slice";
import { useEffect } from "react";
import { productsAsync } from "../state/products.slice";
import { FAILDED, IDLE, LOADING } from "../state/status";

const ProductList = () => {
    
    const products = useSelector(state => state.products.products);
    const dispatch = useDispatch();
    const status = useSelector(state => state.products.status);
    
    useEffect (() => {
        console.log(status)
       status === IDLE &&  dispatch(productsAsync()) ;
    }, [dispatch, status])

    const handleAddCart = (item) => {
        
        const newCart = {
            id: item.id,
            title:item.title,
            price:item.price,
            image:item.image
            
        }
       dispatch(addCart(newCart));
    }
    return(  <>
        <ProductsTitle>Productos a la venta</ProductsTitle>
        <ProductsContainer>
            
            { products.map(item => {
                return(
                    <ProductsContent key={item.id}>
                        <ProductsName> {item.title} </ProductsName>
                        <ProductsImgContainer>
                            <ProductImg src={ item.image } />
                        </ProductsImgContainer>
                        <ProductsInfoContainer>
                            <ProductsPrice> ${item.price}</ProductsPrice>
                            <ProductsButton onClick={() => handleAddCart(item)} >Añadir al carrito</ProductsButton>
                        </ProductsInfoContainer>
                        
                    </ProductsContent>
                )
            })}

            {
                status === LOADING && <section >
                    <h1>CARGANDO POR FAVOR ESPERE...</h1>
                    <h3>en unos instantes se presentaran los productos</h3>

                </section>
            }
            {
                status === FAILDED && <section>
                    <h1>HAY UN ERROR</h1>
                    <h3>no se han encontrado los productos</h3>
                </section>
            }
        </ProductsContainer>
        
        </>
    )
}


export default ProductList;

