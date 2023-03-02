import React from 'react'
import { Outlet } from 'react-router-dom'
import DropBoxSection from '../../DropBoxSection/DropBoxSection'
import AllProducts from '../../ProductsList/AllProducts'
import TagChipItem from '../../TagChip/TagChipItem/TagChipItem'

const QuanAoDai = () => {
  return (
    <>
        <header >
          <div className="mx-auto max-w-7xl py-12 px-8 sm:px-6 lg:px-8"></div>
        </header>
        <DropBoxSection/>
        <br/>
        <div className='flex justify-center'>
          <div style={{marginRight: '10px'}}>
            <TagChipItem  label="Quần Một Lớp" path='/'/>
          </div>
          <TagChipItem label="Quần Hai Lớp" path='/'/>
        </div>
        <AllProducts header="Quần Áo Dài"/>
        <Outlet />
    </>
  )
}

export default QuanAoDai