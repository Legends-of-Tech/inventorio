import '../App.css';
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import SearchBox from '../components/search-box';
import ProductList from '../components/ProductList';
import NavBar from '../components/NavBar/NavBar';
import NavItem from '../components/NavBar/NavItem/NavItem';
import { faPlus} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';


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
            <div className="px-4 py-6 sm:px-0">
            <div className="flex justify-center">
              <Link to="/product-lists">
                <Fab variant="extended" size="large" color="primary" aria-label="add">
                  <AddIcon sx={{ mr: 1 }} />
                  Tạo Đơn Hàng
                </Fab>
              </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

export default WelcomePage;