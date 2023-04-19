import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import BottomNavBar from './components/NavBar/BottomNavBar';
import TopNavBar from './components/NavBar/TopNavBar';
import ProductListPage from './pages/InventoryPage/InventoryPage';
import OrderPage from './pages/OrderPage/OrderPage';
import { Amplify } from 'aws-amplify';
import awsconfig from './aws-exports';
import CreateOrderPage from './pages/CreateOrderPage/CreateOrderPage';
import AddNewCustomer from './pages/AddNewCustomer/AddNewCustomer';


Amplify.configure(awsconfig);

function App() {
  return (
      <div className="relative h-screen w-100 overflow-auto">
          <BrowserRouter>
              <TopNavBar header={"Đơn Hàng"} />
              <main className="main mb-auto pt-3" style={{marginTop: '6rem'}}>
                  <Routes>
                      <Route path="/" element={<OrderPage />} />
                      <Route path="/all-products" element={<ProductListPage />} />
                      <Route path="/add-new-customer" element={<AddNewCustomer />} />
                      <Route path="/create-order-page" element={<CreateOrderPage />} />
                  </Routes>
              </main>
              <BottomNavBar className="fixed inset-x-0 bottom-0 h-16 right-0 vw-100" />
          </BrowserRouter>
      </div>
  );
}

export default App;