import styled from "styled-components"

const CartContainer = styled.article`
   
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    background-color:  #c4c3c2;
    border-radius: 15px;
    gap: 3rem;
    padding: 1rem;
    flex-wrap: wrap;    
`
const CartNoItem = styled.section`
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color:  #c4c3c2;
    border-radius: 15px;
    gap: 3rem;
    padding: 1rem;
    flex-wrap: wrap;
    
    h1{
        font-size: 2.5rem;
        text-transform: uppercase;
        
        @media screen and (max-width:1200px) {
            font-size: 1.5rem;
        }
        @media screen and (max-width:600px) {
            font-size: 1rem;
        }

    }
    `

const CartTitle = styled.h1`
    font-size: 3.5rem;
    display: flex;
    justify-content: center;
`

const CartContent = styled.section`

    display: flex;
    flex-basis: 60%;
    justify-content: center;
    align-items: center;
    padding: 3rem;
    background-color:  #9f9e9d;
    border-radius: 15px;
    gap: 3rem;

    @media screen and (max-width:1500px) {
        
       transform: scale(1.1);
       flex-basis: 70%;
    }
    @media screen and (max-width:1100px) {
       
        flex-basis: 80%;
        
    }

`
const CartName = styled.h1`

    font-size: 2rem;
    font-weight: 700;

    @media screen and (max-width:1400px) {
        font-size: 1.5rem;
       
    }
    @media screen and (max-width:1100px) {
        font-size: 1rem;
        
    }
`

const CartPrice = styled.span`
    padding: 1rem;
    border-radius: 15px;
    background-color: #d7cbc0;
`
const CartButton = styled.button`
    padding: 1rem;
    background-color: #292727;
    color: yellow;
    cursor: pointer;

    &:hover{
        transform: scale(1.1);
    }

`
const CartImgContainer = styled.section`
    width: 20%;
`

const CartImg = styled.img`
    width: 100%;
`



export {CartContainer,
    CartContent,
    CartName,
    CartPrice,
    CartButton,
    CartImgContainer,
    CartImg,
    CartTitle,
    CartNoItem
};