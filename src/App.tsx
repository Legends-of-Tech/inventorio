import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import BottomNavBar from './components/NavBar/BottomNavBar';
import TopNavBar from './components/NavBar/TopNavBar';
import ProductListPage from './pages/InventoryPage/InventoryPage';
import OrderPage from './pages/OrderPage/OrderPage';
import { Amplify } from 'aws-amplify';
import awsconfig from './aws-exports';
import CreateOrderPage from './pages/OrderPage/CreateOrderPage/CreateOrderPage';
import AddNewCustomer from './pages/AddNewCustomer/AddNewCustomer';
import { ReactNode } from 'react';

Amplify.configure(awsconfig);

export type NavItem ={
    title: string,
    path: string, 
    element: ReactNode,
};
const navItems: NavItem[] = [
    {
        title: 'Order',
        path: '/orders',
        element: <OrderPage />
    },
    {
        title: 'Create Order',
        path: '/orders/create-order-page',
        element: <CreateOrderPage />
    },
    {
        title: 'Inventory',
        path: '/inventory',
        element: <ProductListPage />

    },
    {
        title: 'Customer',
        path: '/Customer',
        element: <AddNewCustomer />
    },
];

function App() {
  return (
      <div className="relative h-screen w-100 overflow-auto">
          <BrowserRouter>
              <TopNavBar navItems={navItems}/>
              <main className="main mb-auto pt-3" style={{marginTop: '6rem'}}>
                  <Routes>
                      {navItems.map(navItem => <Route path={navItem.path} element={navItem.element} key={navItem.title} /> )}
                      <Route path="*" element={<Navigate to="/orders" replace />} />
                  </Routes>
              </main>
              <BottomNavBar className="fixed inset-x-0 bottom-0 h-16 right-0 vw-100" />
          </BrowserRouter>
      </div>
  );
}

export default App;