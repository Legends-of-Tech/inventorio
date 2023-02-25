import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import OrderPage from './pages/OrderPage';
import WelcomePage from './pages/WelcomePage';


function App() {
  return (
    <div className="relative h-screen w-100">
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<WelcomePage/>}/>
          <Route path='/product-lists' element={<OrderPage/>}/>
        </Routes>
      </BrowserRouter>
        <NavBar className="absolute inset-x-0 bottom-0 h-16 right-0 vw-100"/>
    </div>
  )
}

export default App;