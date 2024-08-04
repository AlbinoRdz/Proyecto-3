import React from 'react';
import axios from 'axios';
import '@testing-library/jest-dom';
import AxiosHook from '../hooks/UseAxiosHook'
import { render, waitFor } from '@testing-library/react';

jest.mock('axios');

describe('AxiosHook Component', () => {

    it('should fetch data', async() => {
        const mockData = [{ id: 1, title: 'Product 1', price: 10, description: 'Description 1', image: 'image1.jpg' }];
        axios.get.mockResolvedValueOnce({ data: mockData });
        let result;
        const TestComponent= () => {
            result= AxiosHook();
            return null ;
        }
        render(<TestComponent />);

        await waitFor(() => {
            expect(result.getAxios).toEqual(mockData);
            
        });
       
    });
    

    
});