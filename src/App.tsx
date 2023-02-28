import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CustomersProfile from './components/Customers/CustomersProfile';
import NavBar from './components/NavBar/NavBar';
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
          </Routes>
          <NavBar className="fixed inset-x-0 bottom-0 h-16 right-0 vw-100"/>
        </main>
      </BrowserRouter>
    </div>
  )
}

export default App;