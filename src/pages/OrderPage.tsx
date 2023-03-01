import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar/BottomNavBar';
import TopNavBar from '../components/NavBar/TopNavBar';
import ProductList from "../components/Products/AllProducts"
import SearchBox from '../components/search-box';
import SelectDropBox from '../components/SelectDropBox';
import SelectDropBoxTwo from '../components/SelectDropBoxTwo';



function OrderPage() {
    return(
    <>
        <header >
          <div className="mx-auto max-w-7xl py-10 px-8 sm:px-6 lg:px-8"></div>
        </header>
        {/* <SearchBox/>
        <br></br> */}
        <SelectDropBox/>
        {/* <div className="flex justify-center">
        <SelectDropBoxTwo/>
        </div> */}
        
        <ProductList/>
        <Outlet />
    </>
    )
}

export default OrderPage;