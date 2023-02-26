import Button from 'react-bootstrap/Button';
import React from 'react';
import { Link } from 'react-router-dom';

function CreatOrderButton() {
  return (
    <>
      {/* <Link to="/product-lists"> */}
        <Button className="grid place-items-center mr-1" href="product-lists">Tạo Đơn Hàng</Button>
    
    </>
  );
}

export default CreatOrderButton;