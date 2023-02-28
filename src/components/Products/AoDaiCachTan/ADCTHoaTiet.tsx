import React from 'react'
import SelectDropBox from '../../SelectDropBox'
import AllProducts from '../AllProducts'

const ADCTHoaTiet = () => {
  return (
    <div>
        <header >
          <div className="mx-auto max-w-7xl py-10 px-8 sm:px-6 lg:px-8"></div>
        </header>
        {/* <SearchBox/> */}
        <SelectDropBox/>
        <AllProducts/>
    </div>
  )
}

export default ADCTHoaTiet