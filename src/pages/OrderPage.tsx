import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar/NavBar';
import ProductList from "../components/Products/ProductList"
import SearchBox from '../components/search-box';


function OrderPage() {
    return(
    <>
        <header >
          <div className="mx-auto max-w-7xl py-10 px-8 sm:px-6 lg:px-8"></div>
        </header>
        <SearchBox/>
        <ProductList/>
        <Outlet />
    </>
    )
}

export default OrderPage;