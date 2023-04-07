import '../App.css';
import { Fragment, useEffect, useState } from 'react'
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