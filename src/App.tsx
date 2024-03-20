import { Route, Routes } from 'react-router-dom';
import './App.css';
import Client_Page from './Views/Client_Page';
import Index from './Views/Client/HomePage/Index';
import Index_ShopPage from './Views/Client/ShopPage/Index_ShopPage';
import Cart_Page from './Views/Client/CartPage/Cart_Page';
import Pay_Page from './Views/Client/PayPage/Pay_Page';
import DeitailProduct from './Views/Client/Deltail_Product/DeitailProduct';
import Login from './Views/Auth/Login';
import { useContext } from 'react';
import { contextProvider } from './ContextProvide/DataProvider';
import Sign_Up from './Views/Auth/Sign_up';
import Account_setting from './Views/Auth/Account_setting';
import Adminstration from './Views/Adminstration';
import Setting_Products from './Views/Adminstration/Setting_Products';
import Add_Product from './Views/Adminstration/Add_Product';
import Edit_Product from './Views/Adminstration/Edit_Product';

function App() {
  const { ShowLogin, HandleOverLayer, ShowSetting_Account } = useContext(contextProvider);
  const checkUserLocaStorage = localStorage.getItem('account');

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
          <Route path='/adminstration' element={<Adminstration />}>
            <Route index element={<Setting_Products />} />
            <Route path='add-product' element={<Add_Product />} />
            <Route path=':id/edit-product' element={<Edit_Product />} />
            {/* <Route index element={<Setting_Products />} /> */}
          </Route>
        </Routes>

        {/* ----- */}
      </div>
      <div onClick={HandleOverLayer} style={{ display: ShowLogin || ShowSetting_Account ? 'block' : 'none' }} className="overlayer"></div>
      <div style={{ transform: ShowLogin ? 'translateY(0)' : '' }} className="Sign_In">
        <Login />
      </div>
      {checkUserLocaStorage !== null ?
        <div style={{ transform: ShowSetting_Account ? 'translateY(0)' : '' }} className="Show_settingAccount">
          <Account_setting />
        </div> : ''}
    </>
  )
}

export default App
