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
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


const CreateOrderPage = () => {
  return (
    <div className="min-h-full">
      <div className="content flex flex-col min-h-screen">
        <header className="top-section py-3 px-12 w-full max-w-screen-lg flex items-center justify-center border-b border-black">
          <div className="flex items-center absolute top-4 left-5">
            <Link to="/">
              <ArrowBackIcon sx={{ fontSize: '1.6rem' }} />
            </Link>
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 mt-3.5">
            Tạo Đơn Hàng
          </h1>
        </header>
        <div className="fixed top-40 left-0 right-0 z-10 flex justify-center mt-5">
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

      <div className="sticky-bottom">
        <div className="flex items-center justify-between w-full mb-2.5">
          <div className="flex items-center ml-5">
            <ShoppingBasketIcon />
            <div className='flex items-center ml-3 mt-1'>
              <h1 className="text-lg font-bold">TỔNG ĐƠN</h1>
            </div>
          </div>
          <div className="flex mr-8">
            <span className="rounded-l-md border border-r-0 border-gray-300 px-3 text-gray-500 sm:text-sm">
              0
            </span>
            <span className="border border-r-0 border-gray-300 px-4 text-gray-500 sm:text-sm">
              0đ
            </span>
          </div>    
        </div>
        <div className="w-full bg-white border-t border-black py-2.5 flex items-center justify-center">
            <Button variant="contained" startIcon={<ShoppingCartRounded />}>
            Hoàn Tất Đơn Hàng
            </Button>
        </div>
      </div>
      </div>

  )
}

export default CreateOrderPage