import React from 'react'
import CreOrdBut from '../components/CreOrdBut'

type Props = {}

const CreateOrderPage = (props: Props) => {
  return (
    <div className="min-h-full">
    <header >
      <div className="mx-auto max-w-7xl py-6 px-8 sm:px-6 lg:px-8"></div>
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