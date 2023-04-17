import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AddIcon from '@mui/icons-material/Add';
import {Link} from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import AddNewCustomer from '../../../pages/AddNewCustomer/AddNewCustomer';
import GoBackIcon from '../../GoBackIcon';






const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  width: '100%',
  border: '1px solid #90A4AE',
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#90A4AE',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '8ch',
    [theme.breakpoints.up('sm')]: {
      width: '15ch',
    },
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

interface HeaderCustomerListModalProps {
  onAddCustomer: () => void;
}



const HeaderCustomerListModal: React.FC<HeaderCustomerListModalProps> = ({ onAddCustomer }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

    return (
      <div className="min-h-full">
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexGrow: 1,
              width: '100%',
              height: '68px', // Increase the height value as desired
              backgroundColor: 'rgb(147 197 253)',
              marginTop: '-3px',
              
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: 'bold', // Make the text bold
                fontSize: '28px',
              }}
            >
              Chọn Khách Hàng
            </Typography>
          </Box>
        <header className="py-3 px-12 w-full max-w-screen-lg flex items-center justify-center">
        <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        
      }}
    >
      
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          flexGrow: 1,
          marginLeft: '-22px', // Add some margin to the left, adjust the value as needed
          marginRight: '18px', // Add some margin to the right
        }}
      >
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Tìm Kiếm"
            inputProps={{ 'aria-label': 'search' }}
          />
        </Search>
      </Box>
      <IconButton
        onClick={onAddCustomer}
        sx={{
          position: 'absolute',
          right: 6,

        }}
      >
        <AddIcon sx={{ fontSize: '2.5rem' }} />
      </IconButton>
      <Modal
        open={open}
        onClose={handleClose}
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
        </Box>
      </Modal>
    </Box>
    
        </header>
      </div>
    );
}

export default HeaderCustomerListModal

