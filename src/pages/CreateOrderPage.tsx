import React from 'react'
import CreOrdBut from '../components/CreOrdBut'
import PersonIcon from '@mui/icons-material/Person';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import "./CreateOrderPage.css"
import { Link } from 'react-router-dom';

type Props = {}

const CreateOrderPage = (props: Props) => {
  return (
    <div className=" min-h-full">
      <header className="bg-white shadow top-gap">
      <Link to="/">
        <div className="mx-auto max-w-7xl py-2 px-8 sm:px-6 lg:px-8 flex items-center justify-between">
            <div className="person-icon display-inline">
              <PersonIcon/>
            </div>
            <h1 className="text-lg font-bold tracking-tight text-gray-900 inline-block border-b border-gray-900 display-inline">Khách Hàng</h1>
            <div className="right-icon display-inline">
              <KeyboardArrowRightIcon/>
            </div>
          </div>
        </Link>
      </header>
    <main>
      <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
        <div className="px-38 py-40 sm:px-0">
          <CreOrdBut label='Thêm Sản Phẩm' path='/all-products'/>
        </div>
      </div>
    </main>
  </div>
  )
}

export default CreateOrderPage