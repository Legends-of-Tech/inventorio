import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useNavigate } from 'react-router-dom';

const SelectDropBoxTwo: React.FC = () => {
    const navigate = useNavigate();
    const [Number, setAge] = React.useState<string>('');
  
    const handleChange = (event: SelectChangeEvent<string>) => {
        const selectedValue = event.target.value;
        setAge(selectedValue);
  
        if (selectedValue === '10') {
            navigate('/');
          } else if (selectedValue === '20') {
            navigate('/');
          } else if (selectedValue === '30') {
            navigate('/');
          }
        };

  return (
    <Box sx={{ minWidth: 200 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Phân Loại</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={Number}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>Áo Dài Truyền Thống</MenuItem>
          <MenuItem value={20}>Áo Dài Cách Tân</MenuItem>
          <MenuItem value={30}>Quần Áo Dài</MenuItem>
          <MenuItem value={40}>Váy Áo Dài</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default SelectDropBoxTwo;