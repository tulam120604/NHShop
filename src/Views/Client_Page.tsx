
import Header from './Client/Header'
import Footer from './Client/Footer'
import { Outlet } from 'react-router-dom'

const Client_Page = () => {
    return (<>
        <Header />
        <Outlet />
        <Footer />
    </>
    )
}

export default Client_Page