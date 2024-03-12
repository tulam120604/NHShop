import axios from "axios";
import { createContext, useEffect, useState } from "react"

type objectContextProvider = {
    PageClient: object,
    DataProducts: object,
    ListProductsNew: object,
}

const contextProvider = createContext({} as objectContextProvider);
const DataProvider = ({ children }: { children: React.ReactNode }) => {
    // PAGE
    const [PageClient, setPageClient] = useState([]);
    useEffect(() => {
        (async () => {
            try {
                const { data } = await axios.get(`http://localhost:3000/Page_Client`);
                setPageClient(data);
            } catch (error) {
                console.log(error);
            }
        })()
    }, [])

    // DATA PRODUCTS:
    const [dataProducts, setDataProducts] = useState([]);
    useEffect(() => {
        (async () => {
            try {
                const { data } = await axios.get(`http://localhost:3000/products`);
                setDataProducts(data)
            } catch (error) {
                console.log(error);
            }
        })()
    }, []);

    // LIST PRODUCTS NEW
    const [listProductsNew, setListProductsNew] = useState([]);
    useEffect(() => {
        (async () => {
            try {
                const { data } = await axios.get(`http://localhost:3000/products?_sort=id&_order=desc&_limit=4`);
                setListProductsNew(data);
            } catch (error) {
                console.log(error);
            }
        })()
    }, []);


    // GIO HANG
    // const [carts, setCart] = useState([]);


    const all_Context_Provider: objectContextProvider = {
        PageClient: PageClient,
        DataProducts: dataProducts,
        ListProductsNew: listProductsNew,
    }
    return (<>
        <contextProvider.Provider value={all_Context_Provider}>
            {children}
        </contextProvider.Provider>
    </>)
}

export { contextProvider, DataProvider }