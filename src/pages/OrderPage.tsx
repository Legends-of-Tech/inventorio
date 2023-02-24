import { Outlet } from 'react-router-dom';
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