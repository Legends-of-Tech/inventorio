import * as React from 'react';
import Chip from '@mui/material/Chip';
import {  useNavigate } from "react-router-dom";

type Props = {
    path: string
    label: string
}

const TagChipItem = ({path, label}: Props) => {
    const navigate = useNavigate();
  return (
      <div  onClick={() => { navigate(path)}}>
          <Chip label={label}/>
      </div>
  )
}

export default TagChipItem