import '../App.css';
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import SearchBox from '../components/search-box';
import ProductList from '../components/ProductList';
import NavBar from '../components/NavBar/NavBar';
import NavItem from '../components/NavBar/NavItem/NavItem';
import { faPlus} from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';


function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ')
}

function WelcomePage() {
  return (
    <>
      <div className="min-h-full">
        <header >
          <div className="mx-auto max-w-7xl py-10 px-8 sm:px-6 lg:px-8"></div>
        </header>
        <main>
        <SearchBox/>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            {/* Replace with your content */}
            <div className="px-4 py-6 sm:px-0">
              {/* <div className="h-96 rounded-lg border-4 border-dashed border-gray-400">
                <div className='flex justify-center'>
                  <NavItem icon={faPlus} size="4x"path="/product-lists"/>
                </div>
              </div> */}
              <div className="flex justify-center">
                <NavItem icon={faPlus} size="6x"path="/product-lists"/>
              </div>
              <br></br>
              <Button className="flex justify-center" href="/product-lists" variant="primary">Tạo Đơn Hàng</Button>
            </div>
            {/* /End replace */}
          </div>
        </main>
      </div>
    </>
  )
}

export default WelcomePage;