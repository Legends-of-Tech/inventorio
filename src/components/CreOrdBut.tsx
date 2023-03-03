import React from 'react'
import { Link } from 'react-router-dom';
import { Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import {useNavigate} from 'react-router-dom';

type Props = {
  label: string,
  path: string,

}


const CreOrdBut = ({label, path}: Props) => {
  const navigate = useNavigate()
  return (
    <>
        <div className="flex justify-center">
          <Fab variant="extended" size="large" color="primary" onClick={() => { navigate(path)}}>
              <AddIcon sx={{ mr: 1 }} />
              {label}
          </Fab>
        </div>
    </>
  )
}

export default CreOrdBut