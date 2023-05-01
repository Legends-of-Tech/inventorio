import React from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';


const GoBackIcon = () => {
  const navigate = useNavigate();
    return (
        <ArrowBackIcon
          sx={{ fontSize: '1.8rem' }}
          onClick={() => navigate(-1)}
        />
      );
    }

export default GoBackIcon