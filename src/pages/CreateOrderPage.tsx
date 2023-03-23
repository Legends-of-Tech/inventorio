import React from 'react'
import CreOrdBut from '../components/CreOrdBut'
import PersonIcon from '@mui/icons-material/Person';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import "./CreateOrderPage.css"
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { ShoppingCartRounded } from '@mui/icons-material';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import "./CreateOrderPage.css"
import { Fab } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


const CreateOrderPage = () => {
  return (
    <div className="min-h-full">
      <header className="top-section py-3 px-12 w-full max-w-screen-lg flex items-center justify-center border-b border-black">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">
          Tạo Đơn Hàng
        </h1>
      </header>
      <div className="fixed top-40 left-0 right-0 z-10 flex justify-center">
        <Link to="/customers-page">
          <Fab
            variant="extended"
            size="large"
            sx={{
              backgroundColor: "white",
              color: "#90A4AE",
              border: "1.5px solid #90A4AE"
            }}
          >
            <AccountCircleIcon sx={{ mr: 1, color: "#90A4AE", fontSize: "2rem" }} />
            <span
              style={{
                fontSize: "1.2rem",
                fontFamily: "Arial, sans-serif",
                fontWeight: 500,
                textTransform: "capitalize",
              }}>
              Chọn Khách Hàng
            </span>
          </Fab>
        </Link>
      </div>
    </div>




    
    // <div className="bottom-section">
    // <section className="bg-white shadow top-section">
    //     <div className="mx-auto max-w-7xl py-2 px-8 sm:px-6 lg:px-8 flex items-center justify-between">
    //         <div className="basket-icon display-inline">
    //           <ShoppingBasketIcon/>
    //         </div>
    //                        {/* border-b border-gray-900 for the under line */}
    //         <h1 className="text-lg font-bold tracking-tight text-gray-900 inline-block  display-inline">TỔNG ĐƠN </h1> 
    //         <div className="display-inline">
    //           <span className="total inline-flex items-center rounded-l-md border border-r-0 border-gray-300 px-3 text-gray-500 sm:text-sm">
    //               0 
    //             </span>
    //             <span className="total inline-flex items-center border border-r-0 border-gray-300 px-4 text-gray-500 sm:text-sm">
    //               0đ
    //             </span>
    //         </div>
    //       </div>
    //   </section>
    //     <div className="bg-white shadow mx-auto max-w-7xl py-3 sm:px-6 lg:px-8" style={{ marginTop: "1px" }}>
    //       <div className="flex justify-center">
    //         <Link to="/">
    //           <Button variant="contained" startIcon={<ShoppingCartRounded />}>
    //           Hoàn Tất Đơn Hàng
    //           </Button>
    //         </Link>
    //       </div>
    //   </div>
    // </div>
  
  )
}

export default CreateOrderPage