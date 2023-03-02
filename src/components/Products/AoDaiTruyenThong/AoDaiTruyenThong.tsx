import React from 'react'
import { Outlet } from 'react-router-dom'
import DropBoxSection from '../../DropBoxSection/DropBoxSection'
import AllProducts from '../../ProductsList/AllProducts'
import TagChipItem from '../../TagChip/TagChipItem/TagChipItem'


const AoDaiTruyenThong = () => {
  return (
    <>
        <header >
          <div className="mx-auto max-w-7xl py-12 px-8 sm:px-6 lg:px-8"></div>
        </header>
        <DropBoxSection/>
        <br/>
        <div className='flex justify-center'>
          <div style={{marginRight: '10px'}}>
            <TagChipItem  label="Áo Dài Trơn" path='/'/>
          </div>
          <TagChipItem label="Áo Dài Có Họa Tiết" path='/'/>
        </div>
        <AllProducts header="Áo Dài Truyền Thống"/>
        <Outlet />
    </>
  )
}

export default AoDaiTruyenThong