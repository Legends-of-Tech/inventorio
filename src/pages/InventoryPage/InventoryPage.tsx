import { Outlet } from 'react-router-dom';
import DropBoxSection from '../../components/DropBoxSection/DropBoxSection';
import ProductList from '../../components/ProductsList/ProductList';


function ProductsListPage() {
    return(
        <>
            <DropBoxSection/>
            {/* <div className='flex justify-center'>
          <div style={{marginRight: '10px'}}>
            <TagChipItem  label="Áo Dài Trơn" path='/'/>
          </div>
          <TagChipItem label="Áo Dài Có Họa Tiết" path='/'/>
        </div> */}
            {/* header={'Tất Cả Sản Phẩm'} */}
            <ProductList /> 
            <Outlet />
        </>
    )
}

export default ProductsListPage;