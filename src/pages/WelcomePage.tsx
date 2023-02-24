import '../App.css';
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import CreateOrderButton from '../components/CreateOrderButton'
import SearchBox from '../components/search-box';
import ProductList from '../components/ProductList';



function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ')
}

function WelcomePage() {
  return (
    <>
      <div className="min-h-full">
        <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">Trang Chủ</h1>
          </div>
        </header>
        <main>
        <SearchBox/>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            {/* Replace with your content */}
            <div className="px-4 py-6 sm:px-0">
              <div className="h-96 rounded-lg border-4 border-dashed border-gray-400">
                <CreateOrderButton/>
              </div>
              
            </div>
            {/* /End replace */}
          </div>
        </main>

      </div>
    </>
  )
}

export default WelcomePage;