import { Divider } from '@mui/material';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar/BottomNavBar';
import TopNavBar from '../components/NavBar/TopNavBar';
import ProductList from "../components/ProductsList/AllProducts"
import SearchBox from '../components/search-box';
import TagChipItem from '../components/TagChip/TagChipItem/TagChipItem';
import Grid from '@mui/material/Grid';
import DropBoxSection from '../components/DropBoxSection/DropBoxSection';


function OrderPage() {
    return(
    <>
        <header >
          <div className="mx-auto max-w-7xl py-12 px-8 sm:px-6 lg:px-8"></div>
        </header>
        <DropBoxSection/>
        <br/>
        <div className='flex justify-center'>
          <div style={{marginRight: '10px'}}>
            <TagChipItem  label="Áo Dài Trơn" path='/'/>
          </div>
          <TagChipItem label="Áo Dài Có Họa Tiết" path='/'/>
        </div>
        <ProductList/>
        <Outlet />
    </>
    )
}

export default OrderPage;