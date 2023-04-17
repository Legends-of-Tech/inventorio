import React from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import HeaderCustomerListModal from '../../Customers/Header/HeaderCustomerListModal';
import AlphabetSortSection from '../../Customers/AlphabetSortSection';
import CustomerDetailSection from '../../Customers/CustomerDetailSection';
import AddNewCustomer from '../../../pages/AddNewCustomer/AddNewCustomer';
import './CustomerSelectionModal.css'


interface CustomerSelectionModalProps {
  open: boolean;
  onClose: () => void;
  showAddCustomer: boolean;
  handleCustomerSelection: () => void;
  handleAddCustomer: () => void;
}

const CustomerSelectionModal: React.FC<CustomerSelectionModalProps> = ({
  open,
  onClose,
  showAddCustomer,
  handleCustomerSelection,
  handleAddCustomer,
}) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
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
          {!showAddCustomer && (
            <>
              <HeaderCustomerListModal onAddCustomer={handleAddCustomer} />
              <div className="CustomerInfo" onClick={handleCustomerSelection}>
                <AlphabetSortSection label={'A'} />
                <CustomerDetailSection name={'Anh Hai'} PhoneNumber={'0422909791'} />
              </div>
            </>
          )}
          {showAddCustomer && <AddNewCustomer />}
        </div>
      </Box>
    </Modal>
  );
};

export default CustomerSelectionModal;
