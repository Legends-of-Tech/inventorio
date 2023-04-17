import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

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

type Props = {
  headerTitle: string,
  children: React.ReactNode
}

const InventorioModal = ({headerTitle, children}: Props) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
    return (
      <div>
        <Button onClick={handleOpen}>Open modal</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Box 
              className="header"
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
                {headerTitle}
              </Typography>
            </Box>
              <Box className="body">
                {children}
              </Box>
          </Box>

        </Modal>
      </div>
    );
  }

export default InventorioModal