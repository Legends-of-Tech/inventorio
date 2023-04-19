import '../App.css';
import {  useEffect, useState } from 'react'
import {  DataStore } from 'aws-amplify';
import { Fab} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';
import { Product } from '../models';

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ')
}

function WelcomePage() {
  const [products, setProducts] = useState<Product[]>();

  const onAddedProduct = async () => {
    try {
      const prod = await DataStore.save(
        new Product({
          name: 'test',
          imageUrl: 'http://cdn.shopify.com/s/files/1/0406/6066/4485/products/LUCI3213-3_grande.jpg?v=1601353391',
        })
      );
    } catch (error) {
      console.log('Error saving post', error);
    }
  }

  const fetchProducts = async () => {
      const products = await DataStore.query(Product);
      console.log({products})
      setProducts([...products])
  }


  useEffect(() => {
    try {
      fetchProducts();
    } catch (error) {
      console.log('Error retrieving posts', error);
    }
  }, [])

  return (
    <>
      <div className="min-h-full">
        <div className="min-h-full ">
          <header className="top-section py-3 px-12 w-full max-w-screen-lg flex items-center justify-center border-b border-black">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              Đơn Hàng
            </h1>
          </header>
        </div>
        <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            <div className="px-38 py-40 sm:px-0">
              <div className="flex justify-center">
                <button className='btn btn-primary' onClick={onAddedProduct}>Add Product</button>
                <button className='btn btn-primary' onClick={async () => {await DataStore.clear()}}>Clear Products</button>
                <button className='btn btn-primary' onClick={async () => {await DataStore.start();}}>Sync Products</button>
                <Link to="/create-order-page">
                <Fab variant="extended" size="large" color="primary">
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