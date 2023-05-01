import { Fab } from '@mui/material';
import React from 'react';
import {Link} from 'react-router-dom'
import AddIcon from '@mui/icons-material/Add';

const AddProductSection = () => {
  return (
      <div>
          <div className="fixed top-20 left-0 right-0 z-10 flex justify-center mt-14">
              <section className="border border-black p-3 w-full grid grid-cols-2 gap-4">
                  <div className="flex flex-col space-y-4">
                      <span className="font-semibold text-lg">Tên Khách Hàng</span>
                      <div className="text-sm mt-0">Anh Hai</div>
                      <span className="font-semibold text-lg">Địa Chỉ</span>
                      <div className="text-sm mt-0">131 Ni Sư Huỳnh Liên, phường 10, Quận Tân Bình</div>
                  </div>
                  <div className="flex flex-col space-y-4 ml-8">
                      <span className="font-semibold text-lg sticky top-0">Số Điện Thoại</span>
                      <div className="text-sm mt-0">0909421338</div>
                      <span className="font-semibold text-lg space-x-2 sticky top-0">Số Tài Khoản</span>
                      <div className="text-sm mt-0">Ngân Hàng ACB</div>
                      <div className="text-sm mt-0">STK: 0123456789</div>
                  </div>
              </section>
          </div>
          <section className="product-section flex items-center justify-center min-h-screen transform -translate-y-10" style={{ position: 'fixed', top: '47%', left: '50%', transform: 'translate(-50%, -50%)' }}>
              <div className="flex flex-col items-center">
                  <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                      Sản Phẩm
                  </h1>
                  <Link to="/all-products" style={{ marginTop: '4.5rem' }}>
                      <Fab variant="extended" size="large" color="primary">
                          <AddIcon sx={{ mr: 1 }} />
                          Thêm Sản Phẩm 
                      </Fab>
                  </Link>
              </div>
          </section>
      </div>
  );
};

export default AddProductSection;














