import React from 'react';
import { render, screen } from '@testing-library/react';
import Inicio from '../components/Inicio';


describe('Inicio', () => {
  it('should render the banner image and the promotional message', () => {
    render(<Inicio />);

   
    const bannerImg = screen.getByAltText('home tennis');
    expect(bannerImg).toBeInTheDocument();
    expect(screen.getByText('Los mejores descuentos en nuestra tienda')).toBeInTheDocument();
  });
});