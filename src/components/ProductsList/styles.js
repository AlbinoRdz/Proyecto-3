import styled from "styled-components";


const ProductsTitle = styled.h1`
    font-size: 3.5rem;
    display: flex;
    justify-content: center;
    
   
`

const ProductsContainer = styled.article`
    display: flex;
    padding: 1rem;
    background-color: #c4c3c2;
    border-radius: 15px;
    gap: 3rem;
    flex-wrap: wrap;
    justify-content: center;

    @media screen and (max-width:1630px) {
        gap:0;
    }
    

`
const ProductsContent = styled.section`
flex-basis: 25%;
padding:1rem;
background-color: #9f9e9d;
border-radius: 15px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
gap: 2rem;
transition: all .5s;
    &:hover{
        transform: scale(1.05);
    }

    @media screen and (max-width:1630px) {
            transform: scale(.9);
            gap: 0;
            flex-basis: 35%;
            &:hover{
            transform: scale(.95);
    }
        }
    @media screen and (max-width:1230px) {
        gap: 0;
        
        flex-basis: 40%;
        &:hover{
            transform: scale(.75);
        }
    }
    @media screen and (max-width:1100px) {
        flex-basis: 60%;
        
    }

`
const ProductsName = styled.h1`

    font-size: 2rem;
    font-weight: 700;
`

const ProductsInfoContainer = styled.section`
    display: flex;  
    justify-content: space-evenly;
    width: 100%;


`

const ProductsPrice = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: .5rem;
    width: 15%;
    border-radius: 15px;
    background-color:  #d7cbc0;
`
const ProductsButton = styled.button`
    padding: 1rem;
    background-color: #292727;
    color: yellow;
    cursor: pointer;

`
const ProductsImgContainer = styled.section`
    width: 80%;

`

const ProductImg = styled.img`
    width: 100%;
`

export {
    ProductsTitle,
    ProductsContainer,
    ProductsContent,
    ProductsName,
    ProductsPrice,
    ProductsButton,
    ProductsImgContainer,
    ProductImg,
    ProductsInfoContainer

};