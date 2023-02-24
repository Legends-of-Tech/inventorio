import { BrowserRouter, Route, Routes } from 'react-router-dom';
import OrderPage from './pages/OrderPage';
import WelcomePage from './pages/WelcomePage';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<WelcomePage/>}/>
          <Route path='/product-lists' element={<OrderPage/>}/>
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App;