import TextField from '@mui/material/TextField';

function SearchBox() {
    return(
    <>
    <div className="flex justify-center">

        <TextField id="outlined-basic" label="Tìm Kiếm" variant="outlined">
            <svg data-testid="DeleteIcon"></svg>
        </TextField>
      </div>
    </>
    )

}

export default SearchBox