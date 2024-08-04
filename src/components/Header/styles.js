import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.article`
    font-family: Arial, Helvetica, sans-serif;
    box-sizing: border-box;
    display: flex;
    background-color: #eeebe8;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    border-bottom: solid 3px black;



`
const HeaderTitle = styled.h1`
    text-transform: uppercase;
    background-color:  #c4c3c2;
    border-radius: 15px;
    padding: 1rem;
    cursor: pointer;
    transition: all .5s;
   
    
        
    

`

const HeadedNav = styled.nav`
    box-sizing: border-box;
    margin: 1rem 0;
    display: flex;
    align-items: center;
    justify-content: center;

    
    
`
const HeaderLink = styled(Link)`
    
    font-size: 2rem;
    padding: .2rem 1rem;
    margin: 0 1rem;
    border-radius: 15px;
    cursor: pointer;
    transition: all .5s;
    text-decoration: none;
    color: #000;
    
    &:hover {
        
        background-color:  #c4c3c2;
        transform: scale(1.1);
       
    }
        

   

`

export { HeaderContainer,
    HeadedNav,
    HeaderTitle,
    HeaderLink,
 };