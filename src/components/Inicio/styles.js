import styled from 'styled-components';

const HomeContainer = styled.article`
    width: 100%;
    background-color:  #c9b59e;
    padding: 2rem 0;
    
`

const HomeBannerContainer = styled.section`
    box-sizing: border-box;
    position: relative;
    display: flex;
    flex-basis: 95%;
    
    
    
    p{
        font-size: clamp(1.3rem, 3.5vw, 5rem);
        color:  #fff;
        text-shadow: 1px 1px 0 black, -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 
                 0 1px 0 black, 0 -1px 0 black, 1px 0 0 black, -1px 0 0 black;
        position:absolute ;
        top: 6rem;
        left: 5rem;
    }

    img{
        
        display: block;
        margin: 0 auto;
        padding: 1rem 0;
        width: 95%;
        
    }
      /* @media screen and (max-width:1400px) {
        transform: scale(.5);  
    }  */
    
`

export { HomeContainer,
    HomeBannerContainer,
 };