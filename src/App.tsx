import { Route, Routes } from 'react-router-dom';
import './App.css';
import Client_Page from './Views/Client_Page';
import Index from './Views/Client/HomePage/Index';
import Index_ShopPage from './Views/Client/ShopPage/Index_ShopPage';
import Cart_Page from './Views/Client/CartPage/Cart_Page';
import Pay_Page from './Views/Client/PayPage/Pay_Page';
import DeitailProduct from './Views/Client/Deltail_Product/DeitailProduct';
import Login from './Views/Signin/Login';
import { useContext } from 'react';
import { contextProvider } from './ContextProvide/DataProvider';
import Sign_Up from './Views/Signin/Sign_up';

function App() {
  const { ShowLogin, HandleOverLayer } = useContext(contextProvider);

  return (
    <>
      <div className="VIEWS_PROJECT">
        <Routes>
          {/* CLIENT */}
          <Route path='/' element={<Client_Page />}>

            {/* HOME PAGE */}
            <Route index element={<Index />} />

            {/* SHOP PAGE */}
            <Route path='shop' element={<Index_ShopPage />} />

            {/* DEITAL PRODUCT */}
            <Route path='shop/deital_product/:id' element={<DeitailProduct />} />

            <Route path='about' element={<h2>About Page</h2>} />
            <Route path='contact' element={<h2>Contact Page</h2>} />

            {/* SHOPING CART */}
            <Route path='shoping_cart' element={<Cart_Page />} />

            {/* PAY PAGE */}
            <Route path='pay_checkout' element={<Pay_Page />} />

            {/* SIGN IN */}
            <Route path='sign_up' element={<Sign_Up />} />
          </Route>

          {/* ADMIN */}
        </Routes>
      </div>
      <div onClick={HandleOverLayer} style={{ display: ShowLogin ? 'block' : 'none' }} className="overlayer"></div>
      <div style={{ transform: ShowLogin ? 'translateY(0)' : '' }} className="Sign_In">
        <Login />
      </div>
    </>
  )
}

export default App
