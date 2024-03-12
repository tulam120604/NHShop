import '../../../Styles/Client/ShopPage/Menu_ShopPage.css'
import Baner_Client from '../HomePage/Baner_Client'
const Menu_ShopPage = () => {
    return (<>
        <div className="Menu_Baner_ShopPage">
            <div className="baner">
                <section className='ImageBaner'>
                    <Baner_Client />
                </section>
                <div className="navBar_baner_shop">
                    <div className="navBar_baner_shop_child">
                        <div className="navBar_left">
                            <div className="filter_shop">
                                <img src="../../src/assets/Images/icon_filter.png" alt='' />
                                <span>filter</span>
                            </div>
                            <div className="grid_icon">
                                <img src="../../src/assets/Images/icon_grid.png" alt='' />
                            </div>
                            <div className="view_icon">
                                <img src="../../src/assets/Images/icon_view.png" alt='' />
                            </div>
                            <div className="showing">
                                <span>Showing 1–16 of 32 results</span>
                            </div>
                        </div>
                        <div className="navBar_right">
                            <div className="show">
                                <span>show</span>
                                <input type="text" placeholder='16' />
                            </div>
                            <div className="short_by">
                                <span>Short by</span>
                                <input type="text" placeholder="default" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </>)
}

export default Menu_ShopPage