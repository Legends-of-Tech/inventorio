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
import { Fab} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';



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