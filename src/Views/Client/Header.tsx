import { NavLink } from 'react-router-dom'
import '../../Styles/Client/Header.css'
import { useContext } from 'react'
import { contextProvider } from '../../ContextProvide/DataProvider'
const Header = () => {
  const { PageClient } = useContext(contextProvider);

  return (<>
    <div className="Header_client">
      <header>
        {/* logo */}
        <div className="logo">
          <img src="../../src/assets/Images/House_Logos-05.png" alt='image' />
          <span>furniro</span>
        </div>
        {/* menu */}
        <div className=" menu">
          {Object.values(PageClient)?.map((item) => {
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
          <NavLink className={({ isActive }) => isActive ? 'activeNavLinkIconImg' : ''} to={'shoping_cart'}><img src="../src/assets/Images/shopping-cart.png" alt='image' /></NavLink>
        </div>
      </header>

    </div>
  </>)
}

export default Header