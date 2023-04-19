import React, { useState } from 'react';
import Box from '@mui/material/Box';

import { Link } from 'react-router-dom';
import './AddNewCustomer.css';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';

import { Typography } from '@mui/material';




const AddNewCustomer = () => {
    const [open, setOpen] = useState(false);
    
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  return (
    <div className="min-h-full mt-[-15px]">
      {/* this is a code for border line: justify-center border-b border-black */}
      <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexGrow: 1,
              width: '100%',
              height: '68px', // Increase the height value as desired
              backgroundColor: 'rgb(147 197 253)',
              marginTop: '12px',
              
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: 'bold', // Make the text bold
                fontSize: '28px',
              }}
            >
              Tạo Khách Hàng
            </Typography>
          </Box>

      <header className=" py-0 px-12 w-full max-w-screen-lg flex items-center "> 
          
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Thêm Hoàn Tất</DialogTitle>
                <DialogContent>
                <DialogContentText>
                    Bạn đã thêm một khách hàng mới
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                <Link to="/">
                    <Button color="primary">
                        Quay Lại
                    </Button>
                </Link>
            </DialogActions>
        </Dialog>
   
      </header>

      <div className="flex justify-center items-center min-h-screen">
        <section className="max-w-sm px-4 py-2 mb-32">
          <div className=" grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
                <label htmlFor="first-name" className="block text-lg font-medium leading-6 text-gray-900">
                    Tên Khách Hàng
                </label>
                <div className="mt-2">
                    <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-full rounded-md py-1.5 shadow-sm ring-1 ring-inset placeholder:text-gray-400 border border-gray-300"
                    />
                </div>
            </div>

                <div className="sm:col-span-3">
                <label htmlFor="last-name" className="block text-lg font-medium leading-6 text-gray-900">
                    Số Điện Thoại
                </label>
                <div className="mt-2">
                    <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full rounded-md py-1.5 shadow-sm ring-1 ring-inset placeholder:text-gray-400 border border-gray-300"
                    />
                </div>
            </div>

            <div className="sm:col-span-4">
                <label htmlFor="email" className="block text-lg font-medium leading-6 text-gray-900">
                    Địa Chỉ
                </label>
                <div className="mt-2">
                    <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="block w-full rounded-md py-1.5 shadow-sm ring-1 ring-inset placeholder:text-gray-400 border border-gray-300"
                    />
                </div>
            </div>

                <div className="sm:col-span-4">
                <label htmlFor="country" className="block text-lg font-medium leading-6 text-gray-900">
                    Tài Khoản Ngân Hàng
                </label>
                <div className="mt-2">
                    <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="   Người Thụ Hưởng"
                    className="block w-full rounded-md py-1.5 shadow-sm ring-1 ring-inset placeholder:text-gray-400 border border-gray-300"
                    />
                </div>
                <div className="flex items-center gap-4">
                    <div className="mt-2 flex-1">
                        <input
                        id="Số Tài Khoản"
                        name="Số Tài Khoản"
                        type="Số Tài Khoản"
                        autoComplete="Số Tài Khoản"
                        placeholder="   Số Tài Khoản"
                        className="block w-full rounded-md py-1.5 shadow-sm ring-1 ring-inset placeholder:text-gray-400 border border-gray-300"
                        />
                    </div>
                    <div className="mt-2 flex-1">
                        <select
                        id="country"
                        name="country"
                        autoComplete="country-name"
                        className="block w-full rounded-md py-1.5 shadow-sm ring-1 ring-inset placeholder:text-gray-400 border border-gray-300">
                        <option disabled selected className="text-color">Ngân Hàng</option>
                        <option>Sacombank</option>
                        <option>Vietcom Bank</option>
                        <option>MB Bank</option>
                        </select>
                    </div>
                </div>  
            </div>
            <div className="sm:col-span-6">
                <label htmlFor="email" className="block text-lg font-medium leading-6 text-gray-900">
                    Ghi Chú
                </label>
                <div className="mt-2">
                    <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        className="block w-full rounded-lg py-6 shadow-sm ring-1 ring-inset placeholder:text-gray-400 border border-gray-300"
                    />
                </div>
            </div>
          </div>
          <div className="Complete&CloseButton mt-8">
            <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: '1px', // Adjust the margin as needed
              position: 'sticky', // Added position: sticky
              bottom: 0, // Added bottom: 0
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
            <Button
              variant="contained"

              sx={{
                backgroundColor: '#D9D9D9', // Change the button color
                color: '#000000' // Change the text color
              }}
            >
              Quay Lại
            </Button>
            </Box>

            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Button variant="contained" onClick={handleClickOpen}>
                Hoàn Tất
              </Button>
            </Box>
          </Box>
        </div>
        </section>
      </div>
    </div>
  );
};

export default AddNewCustomer;

// onClick={handleClickOpen}
