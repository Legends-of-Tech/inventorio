import React from 'react';
import AlphabetSortSection from '../components/Customers/AlphabetSortSection';
import HeaderCusPgSection from '../components/Customers/Header/HeaderCusPgSection';
import { Box } from '@mui/material';
import './CustomersPage.css'

type Props = {};

const CustomersPage = (props: Props) => {
  return (
    <div className="top-section">
        <HeaderCusPgSection />
        <AlphabetSortSection label={"A"} />
        <AlphabetSortSection label={"B"} />
    </div>
  );
};

export default CustomersPage;