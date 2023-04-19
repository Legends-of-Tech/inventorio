import React from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


type Props = {}

const GoBackIcon = (props: Props) => {
    return (
        <ArrowBackIcon
          sx={{ fontSize: '1.8rem' }}
          onClick={() => {
            window.history.back();
          }}
        />
      );
    }

export default GoBackIcon