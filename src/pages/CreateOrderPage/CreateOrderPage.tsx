import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { ShoppingCartRounded } from '@mui/icons-material';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Fab } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import HeaderCustomerListModal from '../../components/Customers/Header/HeaderCustomerListModal';
import AlphabetSortSection from '../../components/Customers/AlphabetSortSection';
import CustomerDetailSection from '../../components/Customers/CustomerDetailSection';
import AddProductSection from '../../components/Customers/AddProductSection';
import AddNewCustomer from '../AddNewCustomer/AddNewCustomer';
import SelectCustomerFab from '../../components/CreateOrderPageComponents/SelectCustomerFab';



const CreateOrderPage = () => {
  const [open, setOpen] = React.useState(false);
  const [showFab, setShowFab] = React.useState(true);
  const [showCustomerInfo, setShowCustomerInfo] = React.useState(false);
  const [showAddCustomer, setShowAddCustomer] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleCustomerSelection = () => {
    handleClose();
    setShowFab(false);
    setShowCustomerInfo(true);
  };

  const handleAddCustomer = () => {
    setShowAddCustomer(true);
  };
  
  return (
    <div className="min-h-full">
      <div className="content flex flex-col min-h-screen">

        {showFab && <SelectCustomerFab onClick={handleOpen} />}
        
         {showCustomerInfo && <AddProductSection/>}
         <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box
            sx={{
              marginTop: '-20px', 
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              bgcolor: 'white',
              width: '90%', // or any desired width (e.g., '500px')
              height: '90%', // or any desired height (e.g., '600px')
              boxShadow: 24,
              borderRadius: 1,
              p: 4,
              overflowY: 'auto',
            }}
          >
            <div className="CustomersModal">
              {!showAddCustomer && (
                <>
                  <HeaderCustomerListModal onAddCustomer={handleAddCustomer} />
                  <div
                    className="CustomerInfo"
                    onClick={() => handleCustomerSelection()}
                  >
                    <AlphabetSortSection label={"A"} />
                    <CustomerDetailSection name={"Anh Hai"} PhoneNumber={"0422909791"} />
                  </div>
                </>
              )}
              {showAddCustomer && <AddNewCustomer />}
            </div>
          </Box>
        </Modal>
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
              <Button variant="contained" startIcon={<ShoppingCartRounded/>}>
              Hoàn Tất Đơn Hàng
              </Button>
          </div>
        </div>
      </div>
  )
}

export default CreateOrderPage


        {/* <header className="top-section py-3 px-12 w-full max-w-screen-lg flex items-center justify-center border-b border-black">
          <div className="flex items-center absolute top-4 left-5">
            <Link to="/">
              <ArrowBackIcon sx={{ fontSize: '1.6rem' }} />
            </Link>
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 mt-3.5">
            Tạo Đơn Hàng
          </h1>
        </header> */}
