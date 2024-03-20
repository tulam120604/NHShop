import { Outlet } from "react-router-dom"
import Header_Admin from "./Adminstration/Header_Admin"


const Adminstration = () => {
    return (<>
        <Header_Admin />
        <Outlet />
    </>)
}

export default Adminstration