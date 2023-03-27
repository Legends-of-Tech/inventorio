import React from 'react';
import AlphabetSortSection from '../AlphabetSortSection';
import HeaderCusPgSection from '../Header/HeaderCusPgSection';
import { Box } from '@mui/material';
import CustomerDetailSection from '../CustomerDetailSection';
import './CustomersList.css';

type Props = {};

const CustomersList = (props: Props) => {
  return (
    <div className="CustomersModal">
        <HeaderCusPgSection />
        <AlphabetSortSection label={"A"} />
        <CustomerDetailSection name={"Anh Hai"} PhoneNumber={"0422909791"}/>
    </div>
  );
};

export default CustomersList;