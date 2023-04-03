import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import NavBar from './components/NavBar/BottomNavBar';
import TopNavBar from './components/NavBar/TopNavBar';
import AoDaiCachTan from './components/Products/AoDaiCachTan/AoDaiCachTan';
import AoDaiTruyenThong from './components/Products/AoDaiTruyenThong/AoDaiTruyenThong';
import QuanAoDai from './components/Products/QuanAoDai/QuanAoDai';
import VayAoDai from './components/Products/VayAoDai/VayAoDai';
import ProductListPage from './pages/ProductsListPage/ProductsListPage';
import WelcomePage from './pages/WelcomePage';
import { Amplify, API, graphqlOperation } from 'aws-amplify';
import awsconfig from './aws-exports';
import CreateOrderPage from './pages/CreateOrderPage/CreateOrderPage';
import CustomersList from './components/Customers/CustomersList/CustomersList';


Amplify.configure(awsconfig);

function Navigation() {
  const location = useLocation();

  const renderNavBar = () => {
    const excludedPaths = ['/create-order-page', '/customers-page', '/all-products'];

    if (excludedPaths.includes(location.pathname)) {
      return null;
    }

    return <NavBar className="fixed inset-x-0 bottom-0 h-16 right-0 vw-100" />;
  };

  return (
    <>
      <TopNavBar />
      {renderNavBar()}
    </>
  );
}
function App() {
  return (
    <div className="relative h-screen w-100">
      <BrowserRouter>
        <main className="mb-auto">
          <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/all-products" element={<ProductListPage />} />
            <Route path="/create-order-page" element={<CreateOrderPage />} />
            <Route path="/customers-page" element={<CustomersList />} />
            <Route path="/ao-dai-truyen-thong" element={<AoDaiTruyenThong />} />
            <Route path="/ao-dai-cach-tan" element={<AoDaiCachTan />} />
            <Route path="/quan-ao-dai" element={<QuanAoDai />} />
            <Route path="/vay-ao-dai" element={<VayAoDai />} />
          </Routes>
          <Navigation />
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;