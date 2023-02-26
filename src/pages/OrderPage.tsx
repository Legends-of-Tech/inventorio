import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar/NavBar';
import ProductList from "../components/ProductList"

function OrderPage() {
    return(
    <>
        <ProductList/>
        <Outlet />
    </>
    )
}

export default OrderPage;