import React from 'react';
import AlphabetSortSection from '../AlphabetSortSection';
import HeaderCusPgSection from '../Header/HeaderCusPgSection';
import CustomerDetailSection from '../CustomerDetailSection';
import './CustomersList.css';
import {Link} from 'react-router-dom';

type Props = {};

const CustomersList = (props: Props) => {
  return (
    <div className="CustomersModal">
        <div className="CustomerInfo">
          <HeaderCusPgSection />
          <AlphabetSortSection label={"A"} />
          <CustomerDetailSection name={"Anh Hai"} PhoneNumber={"0422909791"}/>
        </div>
    </div>
  );
};

export default CustomersList;