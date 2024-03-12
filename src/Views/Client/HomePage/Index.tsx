import Baner_Client from "./Baner_Client"
import Blog_Home from "./Blog_Home"
import New_Home from "./New_Home"
import Service_Home from "./Service_Home"
import Shop_Home from "./Shop_Home"


const Index = () => {
    return (<>
        <Baner_Client />
        <New_Home />
        <Shop_Home />
        <Blog_Home />
        <Service_Home />
    </>)
}

export default Index