import { Route, Routes } from 'react-router-dom';
import './App.css';
import Client_Page from './Views/Client_Page';
import Index from './Views/Client/HomePage/Index';
import Index_ShopPage from './Views/Client/ShopPage/Index_ShopPage';
import Cart_Page from './Views/Client/CartPage/Cart_Page';
import Pay_Page from './Views/Client/PayPage/Pay_Page';
import DeitailProduct from './Views/Client/Deltail_Product/DeitailProduct';

function App() {

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

            {/* SHOPING CART */}
            <Route path='shoping_cart' element={<Cart_Page />} />

            {/* PAY PAGE */}
            <Route path='pay_checkout' element={<Pay_Page />} />


          </Route>


          {/* ADMIN */}
        </Routes>
      </div>
    </>
  )
}

export default App
