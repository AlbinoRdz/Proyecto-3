import { HomeBannerContainer, HomeContainer } from "./styles"
import Banner from '../../assets/banner-home.JPG'

const Inicio = () => {
    return(
        <HomeContainer>
            <HomeBannerContainer>
                <img alt="home tennis" src={ Banner } />   
                <p>Los mejores descuentos en nuestra tienda</p>
            </HomeBannerContainer>
        </HomeContainer>
    )
}

export default Inicio;