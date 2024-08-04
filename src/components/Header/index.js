import { Link } from "react-router-dom";
import { HeadedNav, HeaderContainer, HeaderLink, HeaderTitle } from "./styles";


const Header = () => {

    return(
        <HeaderContainer>
            <HeaderTitle> Tienda Tecdress</HeaderTitle>
            <HeadedNav>
                <HeaderLink to="/">Inicio</HeaderLink>
                <HeaderLink to="products">Productos</HeaderLink>
                <HeaderLink to="cart">Carrito</HeaderLink>
                
                
            </HeadedNav>
        </HeaderContainer>
    )
}

export default Header;