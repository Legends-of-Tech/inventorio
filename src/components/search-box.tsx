import TextField from '@mui/material/TextField';
import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import SearchIcon from '@mui/icons-material/Search';


function SearchBox() {
    const handleClick = () => {
        console.info('You clicked the Chip.');
      };
    
      const handleDelete = () => {
        console.info('You clicked the delete icon.');
      };
    return(
        <Chip
            deleteIcon={<SearchIcon/>}
            label="Tìm Kiếm"
            onClick={handleClick}
            onDelete={handleDelete}
        />
    )

}

export default SearchBox











// import TextField from '@mui/material/TextField';

// function SearchBox() {
//     return(
//     <>
//     <div className="flex justify-center">

//         <TextField id="outlined-basic" label="Tìm Kiếm" variant="outlined">
//             <svg data-testid="DeleteIcon"></svg>
//         </TextField>
//       </div>
//     </>
//     )

// }

// export default SearchBox