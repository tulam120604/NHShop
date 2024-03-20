import { useContext, useEffect } from "react";
import { contextProvider } from "../../ContextProvide/DataProvider";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import axios from "axios";

interface TyeDataForm {
    id: number,
    name: string,
    price: number,
    title: string | number,
}
const Edit_Product = () => {
    const { EditProduct } = useContext(contextProvider);
    const { register, formState: { errors }, handleSubmit, reset } = useForm<TyeDataForm>();
    const { id } = useParams();
    useEffect(() => {
        (async () => {
            try {
                const { data } = await axios.get(`http://localhost:3000/products/${id}`);
                reset(data)
            } catch (error) {
                console.log(error);
            }
        })()
    }, [id])
    return (<>
        <div style={{ width: '86%', marginTop: '80px' }} className="float-right mr-4 text-center">
            <span className="my-4">Edit product</span>
            <form onSubmit={handleSubmit(EditProduct)} className="flex flex-col">
                <input className="border my-2 py-2 px-2 rounded outline-none " type="text"
                    {...register('name', { required: true })}
                    placeholder="Name product ..." />
                {errors.name && <p className="text-red-600">Name is not undefined</p>}
                <input className="border my-2 py-2 px-2 rounded outline-none " type="text"
                    {...register('price', { required: true })}
                    placeholder="Price ..." />
                {errors.name && <p className="text-red-600">Price is not undefined</p>}
                <input className="border my-2 py-2 px-2 rounded outline-none " type="text"
                    {...register('title', { required: true })}
                    placeholder="Title ..." />
                {errors.name && <p className="text-red-600">Title is not undefined</p>}
                <button className="duration-300 hover:bg-green-500 font-normal bg-green-400 py-1 px-3.5 mb-4 rounded w-1/12">Edit</button>
            </form>
        </div>
    </>)
}

export default Edit_Product