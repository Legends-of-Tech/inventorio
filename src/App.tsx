import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/BottomNavBar';
import TopNavBar from './components/NavBar/TopNavBar';
import AoDaiCachTan from './components/Products/AoDaiCachTan/AoDaiCachTan';
import AoDaiTruyenThong from './components/Products/AoDaiTruyenThong/AoDaiTruyenThong';
import QuanAoDai from './components/Products/QuanAoDai/QuanAoDai';
import VayAoDai from './components/Products/VayAoDai/VayAoDai';
import ProductListPage from './pages/ProductsListPage';
import WelcomePage from './pages/WelcomePage';
import { Amplify, API, graphqlOperation } from 'aws-amplify';
import awsconfig from './aws-exports';
import CreateOrderPage from './pages/CreateOrderPage';
import CustomersPage from './pages/CustomersPage';


Amplify.configure(awsconfig);

function App() {
  return (
    <div className="relative h-screen w-100">
      <BrowserRouter>
      <main className="mb-auto">
          <Routes>
          <Route path='/' element={<WelcomePage/>}/>
          <Route path='/all-products' element={<ProductListPage/>}/>
          <Route path='/create-order-page' element={<CreateOrderPage/>}/>
          <Route path='/customers-page' element={<CustomersPage/>}/>
          <Route path='/ao-dai-truyen-thong' element={<AoDaiTruyenThong/>}/>
          <Route path='/ao-dai-cach-tan' element={<AoDaiCachTan/>}/>
          <Route path='/quan-ao-dai' element={<QuanAoDai/>}/>
          <Route path='/vay-ao-dai' element={<VayAoDai/>}/>
          </Routes>
          <TopNavBar/>
          <NavBar className="fixed inset-x-0 bottom-0 h-16 right-0 vw-100"/>
        </main>
      </BrowserRouter>
    </div>
  )
}

export default App;