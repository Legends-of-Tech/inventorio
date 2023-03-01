import { Divider } from '@mui/material';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar/BottomNavBar';
import TopNavBar from '../components/NavBar/TopNavBar';
import ProductList from "../components/Products/AllProducts"
import SearchBox from '../components/search-box';
import SelectDropBox from '../components/SelectDropBox';
import SelectDropBoxTwo from '../components/SelectDropBoxTwo';
import TagChipItem from '../components/TagChip/TagChipItem/TagChipItem';



function OrderPage() {
    return(
    <>
        <TopNavBar/>
        <header >
          <div className="mx-auto max-w-7xl py-3 px-8 sm:px-6 lg:px-8"></div>
        </header>
        <SelectDropBox/>
        <br/>
        <div className='flex justify-center'>
          <TagChipItem label="Áo Dài Trơn" path='/'/>
          <TagChipItem label="Áo Dài Có Họa Tiết" path='/'/>
        </div>
        {/* <div className="flex justify-center">
        <SelectDropBoxTwo/>
        </div> */}
        
        <ProductList/>
        <Outlet />
    </>
    )
}

export default OrderPage;