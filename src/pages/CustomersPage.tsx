import React from 'react';
import AlphabetSortSection from '../components/Customers/AlphabetSortSection';
import HeaderCusPgSection from '../components/Customers/Header/HeaderCusPgSection';
import { Box } from '@mui/material';
import './CustomersPage.css'
import CustomerDetailSection from '../components/Customers/CustomerDetailSection';

type Props = {};

const CustomersPage = (props: Props) => {
  return (
    <div className="top-section">
        <HeaderCusPgSection />
        <AlphabetSortSection label={"A"} />
        <CustomerDetailSection name={"Anh Hai"} PhoneNumber={"0422909791"}/>
    </div>
  );
};

export default CustomersPage;