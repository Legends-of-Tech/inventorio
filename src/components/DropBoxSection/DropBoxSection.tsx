import React from 'react'
import DropBox from './DropBox'
import PreviousIcon from './PreviousIcon'
import './DropBoxSection.css'


const DropBoxSection = () => {
  return (
    <div className="container">
    <div className="prev-icon"><PreviousIcon/></div>
    <div className="select-box"><DropBox/></div>
  </div>
  )
}

export default DropBoxSection