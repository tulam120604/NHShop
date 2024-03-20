import { Link, NavLink } from 'react-router-dom';
import '../../Styles/Client/Header.css';
import { useContext, useEffect, useState } from 'react';
import { contextProvider } from '../../ContextProvide/DataProvider';

interface TypeLink {
  name_Page: string,
  path_url: string,
}

const Header = () => {
  const { PageClient, Carts, HandleShowLogin, ShowInforAccount, StateShowInfor, Setting_Account, Func_Sign_Out } = useContext(contextProvider);
  const [showHeader, setShowHeader] = useState(false);
  useEffect(() => {
    const scroll = () => {
      if (window.scrollY > 10) {
        setShowHeader(true)
      }
      else {
        setShowHeader(false)
      }
    };
    window.addEventListener('scroll', scroll);
  });

  const [showMenuHeader, setShowMenuHeader] = useState(false);
  const handleShowMenu = () => {
    setShowMenuHeader(!showMenuHeader);
  }

  let InforUser = ''
  if (localStorage.getItem('account') !== null) {
    const { user } = JSON.parse(localStorage.getItem('account'));
    InforUser = (user.username)
  }
  else {
    InforUser = '';
  }


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
              <li key={item.name_Page}><NavLink key={item.name_Page} className={({ isActive }) => isActive ? 'activeNavLink' : ''}
                to={item.path_url}>{item.name_Page}</NavLink></li>
            </>)
          })}
        </div>
        {/* options */}
        <div className="iconOption cursor-pointer">
          <img onClick={handleShowMenu} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAAAXNSR0IArs4c6QAAAIRJREFUSEtjZKATYKSTPQyjFpEd0gMadAoMDAwOZDsdofEAAwPDAxgXm48aGBgY6qlgkSPQwSDLwACbRQlUsiiRkEVU8AymEQOaGOjmI1AcxVPBtkZCcUS3VAfKQ6C8RClYgGzAyEgMoGCjRtCBip/BUQTRLdVRmtqw6h8ZqW406IgKAQC8wBEbgug9vwAAAABJRU5ErkJggg==" />
        </div>

        <div className="options">
          {InforUser !== '' ?
            <button className='btn'>
              <img onClick={ShowInforAccount} src="../src/assets/Images/account.png" alt='image' />
              <div style={{ transform: StateShowInfor ? 'translateY(0%)' : 'translateY(-200%)' }} className="infoUser">
                <span>Xin chào {InforUser}</span>
                <button onClick={Setting_Account}>Thông tin tài khoản</button>
                <button onClick={Func_Sign_Out}>
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAAAXNSR0IArs4c6QAAAPxJREFUSEvtldENwjAMRK+bwCTAJMAkwCSwCWwCTAJ5VS1CaYkT0QoJ7rdOznc+p5VGQjUSj76WaCVp5nThKukg6UJ9jqKtpI2TJC6bQpZDdGtO0yXdprAMiiahdo2yEqKFpFOKJVh8DHXz3yTCX1JGCIDN6KPW4S0eMwsuLkFyRnGMByOyLkwBy1YvXALUEOMYvYqYxz51Y8/3LuVvrcM2WzTupNOdg5y69m4lZ0QQUEbqBpuRNQ+J2Wipw1oAuWduSUWxU6gzSwbZo66x/ImyZhRbeG6S6AkC5wgUqN/GnP9Re8cc6/VYjxwiu5gkevD0fJUQeUheakYjugP0U1MbXrktLwAAAABJRU5ErkJggg==" /> Đăng xuất</button>
              </div>
            </button> : <button className='btn' onClick={HandleShowLogin}><img src="../src/assets/Images/account.png" alt='image' /></button>}
          <button className='btn'><img src="../src/assets/Images/search.png" alt='image' /></button>
          <NavLink className={({ isActive }) => isActive ? 'activeNavLinkIconImg' : ''} to={'heart'}><img src="../src/assets/Images/heart.png" alt='image' /> </NavLink>
          {InforUser !== '' ?
            <NavLink className={({ isActive }) => isActive ? 'activeNavLinkIconImg' : ''} to={'shoping_cart'}>
              <img src="../src/assets/Images/shopping-cart.png" alt='image' />
              <div className='quantity_cart'>{(Object.values(Carts).length === 0) ? '' : Object.values(Carts).length}</div>
            </NavLink> : <button className='btn' onClick={HandleShowLogin}><img src="../src/assets/Images/shopping-cart.png" alt='image' /></button>}
        </div>
      </header>
    </div>
    <div style={{ transform: showMenuHeader ? 'translateX(0)' : 'translateX(200%)' }} className="optionsMobile">
      {InforUser !== '' ?
        <button className='btn'>
          <img onClick={ShowInforAccount} src="../src/assets/Images/account.png" alt='image' />
          <div style={{ transform: StateShowInfor ? 'translateY(0%)' : 'translateY(-200%)' }} className="infoUser">
            <span>Xin chào {InforUser}</span>
            <button onClick={Setting_Account}>Thông tin tài khoản</button>
            <button onClick={Func_Sign_Out}>
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAAAXNSR0IArs4c6QAAAPxJREFUSEvtldENwjAMRK+bwCTAJMAkwCSwCWwCTAJ5VS1CaYkT0QoJ7rdOznc+p5VGQjUSj76WaCVp5nThKukg6UJ9jqKtpI2TJC6bQpZDdGtO0yXdprAMiiahdo2yEqKFpFOKJVh8DHXz3yTCX1JGCIDN6KPW4S0eMwsuLkFyRnGMByOyLkwBy1YvXALUEOMYvYqYxz51Y8/3LuVvrcM2WzTupNOdg5y69m4lZ0QQUEbqBpuRNQ+J2Wipw1oAuWduSUWxU6gzSwbZo66x/ImyZhRbeG6S6AkC5wgUqN/GnP9Re8cc6/VYjxwiu5gkevD0fJUQeUheakYjugP0U1MbXrktLwAAAABJRU5ErkJggg==" /> Đăng xuất</button>
          </div>
        </button> : <button className='btn' onClick={HandleShowLogin}><img src="../src/assets/Images/account.png" alt='image' /></button>}
      <button className='btn'><img src="../src/assets/Images/search.png" alt='image' /></button>
      <NavLink className={({ isActive }) => isActive ? 'activeNavLinkIconImg' : ''} to={'heart'}><img src="../src/assets/Images/heart.png" alt='image' /> </NavLink>
      {InforUser !== '' ?
        <NavLink className={({ isActive }) => isActive ? 'activeNavLinkIconImg' : ''} to={'shoping_cart'}>
          <img src="../src/assets/Images/shopping-cart.png" alt='image' />
          <div className='quantity_cart'>{(Object.values(Carts).length === 0) ? '' : Object.values(Carts).length}</div>
        </NavLink> : <button className='btn' onClick={HandleShowLogin}><img src="../src/assets/Images/shopping-cart.png" alt='image' /></button>}
    </div>
  </>)
}

export default Header