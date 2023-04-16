import React from 'react';
import Fab from '@mui/material/Fab';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

interface SelectCustomerFabProps {
  onClick: () => void;
}

const SelectCustomerFab: React.FC<SelectCustomerFabProps> = ({ onClick }) => {
  return (
    <section className="fixed top-40 left-0 right-0 z-10 flex justify-center mt-5">
      <Fab
        onClick={onClick}
        variant="extended"
        size="large"
        sx={{
          backgroundColor: 'white',
          color: '#90A4AE',
          border: '1.5px solid #90A4AE',
        }}
      >
        <AccountCircleIcon sx={{ mr: 1, color: '#90A4AE', fontSize: '2rem' }} />
        <span
          style={{
            fontSize: '1.2rem',
            fontFamily: 'Arial, sans-serif',
            fontWeight: 500,
            textTransform: 'capitalize',
          }}
        >
          Chọn Khách Hàng
        </span>
      </Fab>
    </section>
  );
};

export default SelectCustomerFab;
