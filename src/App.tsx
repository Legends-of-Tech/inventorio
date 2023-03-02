import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CustomersProfile from './components/Customers/CustomersProfile';
import NavBar from './components/NavBar/BottomNavBar';
import TopNavBar from './components/NavBar/TopNavBar';
import AoDaiCachTan from './components/Products/AoDaiCachTan/AoDaiCachTan';
import AoDaiTruyenThong from './components/Products/AoDaiTruyenThong/AoDaiTruyenThong';
import QuanAoDai from './components/Products/QuanAoDai/QuanAoDai';
import VayAoDai from './components/Products/VayAoDai/VayAoDai';
import OrderPage from './pages/OrderPage';
import WelcomePage from './pages/WelcomePage';
import { Amplify, API, graphqlOperation } from 'aws-amplify';
import awsconfig from './aws-exports';

Amplify.configure(awsconfig);

function App() {
  return (
    <div className="relative h-screen w-100">
      <BrowserRouter>
      <main className="mb-auto">
          <Routes>
          <Route path='/' element={<WelcomePage/>}/>
            <Route path='/all-products' element={<OrderPage/>}/>
            <Route path='/customers-profile' element={<CustomersProfile/>}/>
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