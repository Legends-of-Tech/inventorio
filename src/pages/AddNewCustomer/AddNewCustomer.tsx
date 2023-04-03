import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';
import DoneIcon from '@mui/icons-material/Done';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import './AddNewCustomer.css';

type Props = {};

const AddNewCustomer = (props: Props) => {
  return (
    <div className="min-h-full">
      <header className="top-section py-3 px-12 w-full max-w-screen-lg flex items-center justify-center border-b border-black">
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
          }}
        >
          <IconButton
            sx={{
              position: 'absolute',
              left: 0,
              color: 'black', // Set the icon color to black
            }}
          >
            <Link to="/create-order-page">
              <ArrowBackIcon sx={{ fontSize: '2rem' }} />
            </Link>
          </IconButton>
          <h1
            className="text-3xl font-bold tracking-tight text-gray-900 "
            style={{ textAlign: 'center', width: '100%' }} // Center the text
          >
            Tạo Đơn Hàng
          </h1>
          <IconButton
            sx={{
              position: 'absolute',
              right: 0,
              color: 'black', // Set the icon color to black
            }}
          >
            <Link to="/">
              <DoneIcon sx={{ fontSize: '2.5rem' }} />
            </Link>
          </IconButton>
        </Box>
      </header>

      <div className="flex justify-center items-center min-h-screen">
        <section className="w-full max-w-xl px-10 py-6">
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 mb-36">
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

                <div className="sm:col-span-3">
                <label htmlFor="country" className="block text-lg font-medium leading-6 text-gray-900">
                    Tài Khoản Ngân Hàng
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
                <div className="mt-2">
                    <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="block w-full rounded-md py-1.5 shadow-sm ring-1 ring-inset placeholder:text-gray-400 border border-gray-300"
                    />
                </div>
                <div className="mt-2">
                    <select
                    id="country"
                    name="country"
                    autoComplete="country-name"
                    className="block w-full rounded-md py-1.5 shadow-sm ring-1 ring-inset placeholder:text-gray-400 border border-gray-300"
                    >
                    <option>Sacombank</option>
                    <option>Vietcom Bank</option>
                    <option>MB Bank</option>
                    </select>
                </div>

            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AddNewCustomer;
