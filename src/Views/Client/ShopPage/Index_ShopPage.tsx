import Service_Home from "../HomePage/Service_Home"
import Menu_ShopPage from "./Menu_ShopPage"
import Product_ShopPage from "./Product_ShopPage"

const Index_ShopPage = () => {
    return (<>
        <Menu_ShopPage />
        <Product_ShopPage />
        <Service_Home />
    </>)
}

export default Index_ShopPage