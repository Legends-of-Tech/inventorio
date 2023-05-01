import React from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import AlphabetSortSection from '../AlphabetSortSection';
import CustomerDetailSection from '../CustomerContact';
import AddNewCustomer from '../../../../pages/AddNewCustomer/AddNewCustomer';
import './CustomerModal.css'
import HeaderCustomerListModal from '../HeaderCustomerModal';
import Button from '@mui/material/Button';




interface CustomerModalProps {
  open: boolean;
  onClose: () => void;
  showAddCustomerForm: boolean;
  handleCustomerSelection: () => void;
  handleAddCustomer: () => void;
}

const CustomerModal: React.FC<CustomerModalProps> = ({
  open,
  onClose,
  showAddCustomerForm,
  handleCustomerSelection,
  handleAddCustomer,
}) => {
  return (
      <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="CustomerModal"
    >
          <Box
        sx={{
          marginTop: '-20px',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          bgcolor: 'white',
          width: '90%', // or any desired width (e.g., '500px')
          height: '90%', // or any desired height (e.g., '600px')
          boxShadow: 24,
          borderRadius: 1,
          p: 4,
          overflowY: 'auto',
        }}
      >
              <div className="CustomersModal">
                  {!showAddCustomerForm && (
                  <>
                      <HeaderCustomerListModal onAddCustomer={handleAddCustomer} />
                      <div className="CustomerInfo" onClick={handleCustomerSelection}>
                          <AlphabetSortSection label={'A'} />
                          <CustomerDetailSection name={'Anh Hai'} PhoneNumber={'0422909791'}/>
                      </div>
                      <Box
                  className="GoBackButton"
                  sx={{
                    display: 'flex align-center',
                    justifyContent: 'center',
                    marginBottom: '1px', // Adjust the margin as needed
                    marginTop: '460px',
                    position: 'sticky', // Added position: sticky
                    bottom: 0, // Added bottom: 0
                  }}>
                          <Button variant="contained"onClick={onClose}>Quay Lại</Button>
                      </Box>
                  </>
          )}
                  {showAddCustomerForm && <AddNewCustomer />}
              </div>
          </Box>
      </Modal>
    
  );
};

export default CustomerModal;


