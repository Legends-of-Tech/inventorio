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



const HeaderCustomerListModal = ({ onAddCustomer }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

    return (
      <div className="min-h-full">
        <header className="py-3 px-12 w-full max-w-screen-lg flex items-center justify-center">
        <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
      }}
    >
      <IconButton sx={{
          position: 'absolute',
          left: 0,
        }}>
          <GoBackIcon/>
      </IconButton>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexGrow: 1,
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
          right: 0,
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
          <AddNewCustomer/>
        </Box>
      </Modal>
    </Box>
        </header>
      </div>
    );
}

export default HeaderCustomerListModal

