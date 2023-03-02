import '../App.css';
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import SearchBox from '../components/search-box';
import ProductList from '../components/ProductsList/AllProducts';
import NavBar from '../components/NavBar/BottomNavBar';
import NavItem from '../components/NavBar/NavItem/NavItem';
import CreOrdBut from '../components/CreOrdBut';
import TopNavBar from '../components/NavBar/TopNavBar';



function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ')
}

function WelcomePage() {
  return (
    <>
      <TopNavBar/>
      <div className="min-h-full">
        <header >
          <div className="mx-auto max-w-7xl py-6 px-8 sm:px-6 lg:px-8"></div>
        </header>
        <main>
        {/* <SearchBox/> */}
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            <div className="px-38 py-40 sm:px-0">
              <CreOrdBut/>
            </div>
            
          </div>
        </main>
      </div>
    </>
  )
}

export default WelcomePage;