import '../App.css';
import { Fragment, useEffect, useState } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import SearchBox from '../components/search-box';
import ProductList from '../components/ProductsList/AllProducts';
import NavBar from '../components/NavBar/BottomNavBar';
import NavItem from '../components/NavBar/NavItem/NavItem';
import CreOrdBut from '../components/CreOrdBut';
import TopNavBar from '../components/NavBar/TopNavBar';
import * as queries from '../graphql/queries';
import { API } from 'aws-amplify';
import { ListProductsQuery } from '../API';
import { GraphQLQuery, GRAPHQL_AUTH_MODE } from '@aws-amplify/api';



function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ')
}

function WelcomePage() {
  const [products, setProducts] = useState<any[]>();

  useEffect(() => {

    // declare the data fetching function
    const fetchData = async () => {
      const allProducts = await API.graphql<GraphQLQuery<ListProductsQuery>>(
        { query: queries.listProducts,
        }
      );
      setProducts([...allProducts.data!.listProducts!.items])
      console.log({allProducts});
    };
    // call the function
    fetchData()
    // make sure to catch any error
    .catch(console.error);
  }, []);

  return (
    <>

      <div className="min-h-full">
        {products?.map(prod => (<h1>{prod["name"]}</h1>))}
        <header >
          <div className="mx-auto max-w-7xl py-6 px-8 sm:px-6 lg:px-8"></div>
        </header>
        <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            <div className="px-38 py-40 sm:px-0">
              <CreOrdBut label='Tạo Đơn Hàng' path='create-order-page'/>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

export default WelcomePage;