import React from 'react'
import DropBoxSection from '../../DropBoxSection/DropBoxSection'
import SearchBox from '../../search-box'
import AllProducts from '../AllProducts'


const ADTTTron = () => {
  return (
    <div>
        <header >
          <div className="mx-auto max-w-7xl py-10 px-8 sm:px-6 lg:px-8"></div>
        </header>
        <DropBoxSection/>
        <AllProducts/>
    </div>
  )
}

export default ADTTTron