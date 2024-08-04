import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Header from "../components/Header/index";

describe('Header Component', () => {
    
    it('should render Header Components', () => {
        const HeaderRender = render(
        <MemoryRouter>
            <Header />
        </MemoryRouter> 
    );
   
    const HeaderTitle = HeaderRender.getByText('Tienda Tecdress');
    const HeaderHome = HeaderRender.getByText('Inicio');
    const HeaderProducts = HeaderRender.getByText('Productos');
    const HeaderCart = HeaderRender.getByText('Carrito');
    
    expect(HeaderTitle).toBeInTheDocument();
    expect(HeaderHome).toBeInTheDocument();
    expect(HeaderProducts).toBeInTheDocument();
    expect(HeaderCart).toBeInTheDocument();

    });
});


