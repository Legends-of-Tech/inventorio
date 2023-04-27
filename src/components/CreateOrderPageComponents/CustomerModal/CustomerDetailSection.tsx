import React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Typography } from '@mui/material';


type CustomerDetailSectionProps = {
  name: string;
  PhoneNumber: string;
};

const CustomerDetailSection: React.FC<CustomerDetailSectionProps> = ({ name, PhoneNumber }) => {
  return (
      <div style={{ display: 'flex', alignItems: 'center', border: '2px solid', borderColor: '#E0E0E0', width: '100%',height: '100%', minHeight: '60px', }}>
          <AccountCircleIcon style={{ fontSize: '52px', color: '#90A4AE', marginLeft: '18px' }} />
          <div style={{ display: 'flex', flexDirection: 'column'}}>
              <Typography variant="h6" component="div" style={{ marginBottom: '-2px', marginLeft: '15px' }}>
                  {name}
              </Typography>
              <Typography variant="body2" component="div" style={{ color: '#9E9E9E', marginLeft: '15px' }}>
                  SĐT: {PhoneNumber}
              </Typography>
          </div>
      </div>
  );
};

export default CustomerDetailSection;


