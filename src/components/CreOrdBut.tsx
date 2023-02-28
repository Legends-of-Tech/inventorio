import React from 'react'
import { Link } from 'react-router-dom';
import { Divider, Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';
import { styled, ThemeProvider, createTheme } from '@mui/material/styles';
import Paper from '@mui/material/Paper';


const data = [
    { label: 'Áo Dài Truyền Thống' },
    { label: 'Áo Dài Cách Tân' },
    { label: 'Quần Áo Dài' },
    { label: 'Váy Áo Dài' },
  ];

const FireNav = styled(List)<{ component?: React.ElementType }>({
    '& .MuiListItemButton-root': {
      paddingLeft: 24,
      paddingRight: 24,
    },
    '& .MuiListItemIcon-root': {
      minWidth: 0,
      marginRight: 16,
    },
    '& .MuiSvgIcon-root': {
      fontSize: 20,
    },
  });

const CreOrdBut = () => {
    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
      setOpen(!open);
    };
  return (
    <>
        <div className="flex justify-center">
          <Link to='all-products'>
            <Fab variant="extended" size="large" color="primary" aria-label="add" onClick={handleClick}>
                <AddIcon sx={{ mr: 1 }} />
                Tạo Đơn Hàng
                {open ? <ExpandLess /> : <ExpandMore />}
            </Fab>
          </Link>
        </div>
        <div>
        <Collapse in={open} timeout="auto" unmountOnExit>
        <div className="flex justify-center"> 
        <Box sx={{ display: 'flex' }}>
        <ThemeProvider
            theme={createTheme({
            components: {
                MuiListItemButton: {
                defaultProps: {
                    disableTouchRipple: true,},},},
            palette: {
              mode: 'dark',
              primary: { main: 'rgb(102, 157, 246)' },
              background: { paper: 'rgb(5, 30, 52)' },
            },})}>
        <Paper elevation={0} sx={{ maxWidth: 256 }}>
            <Box
              sx={{
                bgcolor: open ? '#1976D2' : null,
                pb: open ? 2 : 0,
              }}>
              {open &&
                data.map((item) => (
                  <ListItemButton
                    key={item.label}
                    sx={{ py: 0, minHeight: 32, color: '#FFFFFF' }}>
                    <ListItemText
                      primary={item.label}
                      primaryTypographyProps={{ fontSize: 14, fontWeight: 'medium' }}
                    />
                  </ListItemButton>
                ))}
            </Box>
        </Paper>
      </ThemeProvider>
    </Box>
        </div>
            </Collapse>
        </div>

    </>
  )
}

export default CreOrdBut