import { useContext } from "react"
import { contextProvider } from "../../ContextProvide/DataProvider"
import { Link } from "react-router-dom";


const Setting_Products = () => {
    const { DataProducts, DeleteProduct } = useContext(contextProvider);
    return (<>
        <div style={{ width: '86%', marginTop: '80px' }} className="float-right mr-4">
            <Link to={'/adminstration/add-product'}><button className="duration-300 hover:bg-green-500 font-normal bg-green-400 py-1 px-3.5 mb-4 rounded">Add</button></Link>
            <table className="w-full table-fixed border-collapse">
                <thead className="bg-slate-200">
                    <th>#</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Title</th>
                    <th>Setting</th>
                </thead>
                {DataProducts?.map((item) => {
                    return <>
                        <tbody className="border">
                            <th className="font-normal">{item.id}</th>
                            <th className="font-normal">{item.name}</th>
                            <th className="font-normal">{item.price}</th>
                            <th className="font-normal">{item.title}</th>
                            <th className="py-2">
                                <Link to={`${item.id}/edit-product`}><button className="duration-300 hover:bg-yellow-500 font-normal bg-yellow-400 py-1 px-3.5 mx-2 rounded">Edit</button></Link>
                                <button onClick={() => DeleteProduct(item.id, item.name)} className="duration-300 hover:bg-red-600 font-normal bg-red-500 py-1 px-3.5 mx-2 rounded">Delete</button>
                            </th>
                        </tbody>
                    </>
                })}

            </table>
        </div>
    </>)
}

export default Setting_Products