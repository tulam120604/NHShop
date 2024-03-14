import { Link, NavLink } from 'react-router-dom';
import '../../Styles/Client/Header.css';
import { useContext, useEffect, useState } from 'react';
import { contextProvider } from '../../ContextProvide/DataProvider';
interface TypeLink {
  name_Page: string,
  path_url: string,
}
const Header = () => {
  const { PageClient } = useContext(contextProvider);
  const { Carts } = useContext(contextProvider);
  const [showHeader, setShowHeader] = useState(false);
  useEffect(() => {
    const scroll = () => {
      if (window.scrollY > 10) {
        setShowHeader(true)
      }
      else {
        setShowHeader(false)
      }
    }
    window.addEventListener('scroll', scroll);
  })

  return (<>
    <div className="header_client"></div>
    <div style={{ background: showHeader ? '#ffffffcc' : '', height: showHeader ? '8vh' : '12vh' }} className="Header_client">
      <header>
        {/* logo */}
        <div className="logo">
          <Link to={'/'}>
            <img src="../../src/assets/Images/House_Logos-05.png" alt='image' />
            <span>furniro</span>
          </Link>
        </div>
        {/* menu */}
        <div className=" menu">
          {PageClient?.map((item: TypeLink) => {
            return (<>
              <li key={item.name_Page}><NavLink key={item.name_Page} className={({ isActive }) => isActive ? 'activeNavLink' : ''} to={item.path_url}>{item.name_Page}</NavLink></li>
            </>)
          })}
        </div>
        {/* options */}
        <div className="options">
          <NavLink className={({ isActive }) => isActive ? 'activeNavLinkIconImg' : ''} to={'account'}><img src="../src/assets/Images/account.png" alt='image' /></NavLink>
          <NavLink className={({ isActive }) => isActive ? 'activeNavLinkIconImg' : ''} to={'search'}><img src="../src/assets/Images/search.png" alt='image' /></NavLink>
          <NavLink className={({ isActive }) => isActive ? 'activeNavLinkIconImg' : ''} to={'heart'}><img src="../src/assets/Images/heart.png" alt='image' /> </NavLink>
          <NavLink className={({ isActive }) => isActive ? 'activeNavLinkIconImg' : ''} to={'shoping_cart'}>
            <img src="../src/assets/Images/shopping-cart.png" alt='image' />
            <div className='quantity_cart'>{(Object.values(Carts).length === 0) ? '' : Object.values(Carts).length}</div>
          </NavLink>
        </div>
      </header>

    </div>
  </>)
}

export default Header