import { Route, Routes } from 'react-router-dom';
import CartList from '../components/CartList/index';
import ProductsList from '../components/ProductsList/index';
import Inicio from '../components/Inicio/index';

const Router = () => {

    return (
        <Routes>
            <Route path='/' element= {<Inicio />} />
            <Route path='Products' element= {<ProductsList />} />
            <Route path='cart' element= {<CartList />} />

        </Routes>
    )
}

export default Router;