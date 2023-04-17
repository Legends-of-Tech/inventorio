import React from 'react';
import Button from '@mui/material/Button';
import { ShoppingCartRounded } from '@mui/icons-material';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import AddProductSection from '../../components/CreateOrderPageComponents/AddProductModal/AddProductSection';
import SelectCustomerFab from '../../components/CreateOrderPageComponents/CustomerModal/SelectCustomerFab';
import CustomerSelectionModal from '../../components/CreateOrderPageComponents/CustomerModal/CustomerSelectionModal/CustomerSelectionModal';



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

        {/* This is a select customer Fab, click on to open the CustomerSelectionModal and will disappear after choosing the selected customer. */}
        {showFab && <SelectCustomerFab onClick={handleOpen} />}

        {/* This function will display the detail of the selected customer and display a add product button  */}
        {showCustomerInfo && <AddProductSection/>}


        {/* This a modal for selecting the customer for the order and also has a add new customer form   */}
        <CustomerSelectionModal
        open={open}
        onClose={handleClose}
        showAddCustomer={showAddCustomer}
        handleCustomerSelection={handleCustomerSelection}
        handleAddCustomer={handleAddCustomer}
        />
      </div>


        {/* This is a total order section and complete order button */}
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
