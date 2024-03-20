import { Link } from "react-router-dom"

const Header_Admin = () => {
    return (<>
        <div style={{ height: '70px' }} key={'sadsds'} className="fixed flex justify-between items-center w-full bg-slate-100 text-slate-50">
            <Link className="capitalize no-underline text-black max-h-24 ml-5" style={{ textAlign: 'center', fontSize: '2.5vh' }} to='/'>Adminstration</Link>
            <input className="h-1/2 p-4 rounded outline-none text-black" type="text" placeholder="Search ..." />
            <button className="text-black mr-5">User</button>
        </div>

        {/* sidebar */}
        <div className="flex fixed flex-col bg-slate-200 mt-20 p-4 h-full">
            <a className="duration-300 py-4 my-2.5 px-10 hover:bg-slate-400 rounded" href="">Dashboard</a>
            <a className="duration-300 py-4 my-2.5 px-10 hover:bg-slate-400 rounded" href="">Products</a>
            <a className="duration-300 py-4 my-2.5 px-10 hover:bg-slate-400 rounded" href="">Account</a>
        </div>
    </>)
}

export default Header_Admin