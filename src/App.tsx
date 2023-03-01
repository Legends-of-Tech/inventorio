import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CustomersProfile from './components/Customers/CustomersProfile';
import NavBar from './components/NavBar/BottomNavBar';
import TopNavBar from './components/NavBar/TopNavBar';
import ADCTTron from './components/Products/AoDaiCachTan/ADCTTron';
import ADTTHoaTiet from './components/Products/AoDaiTruyenThong/ADTTHoaTiet';
import ADTTTron from './components/Products/AoDaiTruyenThong/ADTTTron';
import QuanADHaiLop from './components/Products/QuanAoDai/QuanADHaiLop';
import QuanADMotLop from './components/Products/QuanAoDai/QuanADMotLop';
import VayADHaiLop from './components/Products/VayAoDai/VayADHaiLop';
import VayADMotLop from './components/Products/VayAoDai/VayADMotLop';
import OrderPage from './pages/OrderPage';
import WelcomePage from './pages/WelcomePage';


function App() {
  return (
    <div className="relative h-screen w-100">
      <BrowserRouter>
      <main className="mb-auto">
          <Routes>
          <Route path='/' element={<WelcomePage/>}/>
            <Route path='/all-products' element={<OrderPage/>}/>
            <Route path='/customers-profile' element={<CustomersProfile/>}/>
            <Route path='/ao-dai-truyen-thong-tron' element={<ADTTTron/>}/>
            <Route path='/ao-dai-truyen-thong-hoa-tiet' element={<ADTTHoaTiet/>}/>
            <Route path='/ao-dai-cach-tan-tron' element={<ADCTTron/>}/>
            <Route path='/ao-dai-cach-tan-hoa-tiet' element={<ADTTHoaTiet/>}/>
            <Route path='/quan-ao-dai-mot-lop' element={<QuanADMotLop/>}/>
            <Route path='/quan-ao-dai-hai-lop' element={<QuanADHaiLop/>}/>
            <Route path='/vay-ao-dai-mot-lop' element={<VayADMotLop/>}/>
            <Route path='/vay-ao-dai-hai-lop' element={<VayADHaiLop/>}/>
          </Routes>
          <NavBar className="fixed inset-x-0 bottom-0 h-16 right-0 vw-100"/>
        </main>
      </BrowserRouter>
    </div>
  )
}

export default App;