import React from 'react'
import { Disclosure} from '@headlessui/react'
import SearchBox from '../search-box'
import { Link } from 'react-router-dom'


const TopNavBar = () => {
  return (
        <Disclosure as="nav" className="bg-blue-300">
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between"> 
            <Link to='/'>
                <div className="flex flex-shrink-0 items-center">
                    
                    <img
                        className="block h-8 w-auto lg:hidden"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                        alt="Your Company"
                    />
                </div>
              </Link>
              <SearchBox/>
            </div>
          </div>
    </Disclosure>
  )
}

export default TopNavBar