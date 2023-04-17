import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import BottomNavBar from './components/NavBar/BottomNavBar';
import TopNavBar from './components/NavBar/TopNavBar';
import ProductListPage from './pages/ProductsListPage/ProductsListPage';
import WelcomePage from './pages/WelcomePage';
import { Amplify, API, graphqlOperation } from 'aws-amplify';
import awsconfig from './aws-exports';
import CreateOrderPage from './pages/CreateOrderPage/CreateOrderPage';
import AddNewCustomer from './pages/AddNewCustomer/AddNewCustomer';


Amplify.configure(awsconfig);

function App() {
  return (
    <div className="relative h-screen w-100">
      <BrowserRouter>
        <TopNavBar header={"Đơn Hàng"} />
        <main className="mb-auto">
          <Routes>
            <Route path="/" element={<WelcomePage />} />
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