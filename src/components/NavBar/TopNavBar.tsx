import { Disclosure} from '@headlessui/react'
import SearchBox from '../search-box'
import { Link } from 'react-router-dom'


const TopNavBar = () => {
  return (
        <Disclosure as="nav" className="bg-blue-300 fixed inset-y-0 bottom-0 h-16 right-0 vw-100">
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
            <Link to='/'>
                <div className="flex flex-shrink-0 items-center" >

                    <img
                        style={{marginLeft: '8px'}}
                        className="block h-8 w-auto lg:hidden gap-[2.75rem]"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                        alt="Your Company"
                    />
                </div>
              </Link>
              <div style={{marginRight: '8px'}}>
                <SearchBox/>
              </div>
            </div>
          </div>
    </Disclosure>
  )
}

export default TopNavBar