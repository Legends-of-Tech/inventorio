import React from 'react'
import DropBoxSection from '../../DropBoxSection/DropBoxSection'
import AllProducts from '../AllProducts'

const VayADMotLop = () => {
  return (
    <div>
    <header >
        <div className="mx-auto max-w-7xl py-10 px-8 sm:px-6 lg:px-8"></div>
    </header>
        {/* <SearchBox/> */}
        <DropBoxSection/>
        <AllProducts/>
    </div>
  )
}

export default VayADMotLop