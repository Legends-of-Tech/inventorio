import React from 'react'
import { Link } from 'react-router-dom';
import { Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';


const CreOrdBut = () => {
  return (
    <div className="flex justify-center">
        <Link to="/product-lists">
            <Fab variant="extended" size="large" color="primary" aria-label="add">
                <AddIcon sx={{ mr: 1 }} />
                Tạo Đơn Hàng
            </Fab>
        </Link>   
    </div>
  )
}

export default CreOrdBut