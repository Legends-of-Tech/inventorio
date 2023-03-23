import React from 'react';
import { Typography, Box } from '@mui/material';

type AlphabetSortSectionProps = {
  label: string;
};


const AlphabetSortSection: React.FC<AlphabetSortSectionProps> = ({ label }) => {

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#ECEFF1',
        width: '100%',
        height: '100%',
        minHeight: '40px',
      }}
    >
      <Typography variant="h6" component="div" sx={{ marginLeft: '16px' }}>
        {label}
      </Typography>
    </Box>
  );
};

export default AlphabetSortSection;