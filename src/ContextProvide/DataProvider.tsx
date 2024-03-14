import axios from "axios";
import { createContext, useEffect, useState } from "react"
import Swal from 'sweetalert2';

interface TypeState {
    id: number,
    name: string,
    price: number,
    title: string,
    quantity?: number,
}

type objectContextProvider = {
    PageClient: Array<string | number | boolean>,
    DataProducts: Array<string | number | object>,
    ListProductsNew: object,
    Carts: object,
    AddToCart: (item: TypeState) => void,
    Delete_Product_Cart: (item: TypeState) => void,
    Delete_All_Product_Cart: () => void,
    ShowLogin: boolean,
    HandleShowLogin: () => void,
    HandleOverLayer: () => void,
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
    const [carts, setCart] = useState<TypeState[]>([]);
    const add_to_cart = (product: TypeState) => {
        const CheckSanPhamTrungnhau: boolean = Object.values(carts).some((a) => a.id === product.id);
        if (CheckSanPhamTrungnhau) {
            setCart((carts) => Object.values(carts).map((item) => item.id === product.id ?
                { ...item, quantity: item.quantity + 1 } : item
            ))
        }
        else {
            setCart([{ ...product, quantity: 1 }, ...carts]);
        }
    }

    const delete_product_cart = (product: TypeState) => {
        setCart(carts.filter((item) => (item.id !== product.id)));
    }

    // XÓA TẤT CẢ SẢN PHẨM TRONG GIỎ
    const delete_all_product_cart = () => {
        Swal.fire({
            title: "Chắc chắn xóa hết sản phẩm trong giỏ hàng ?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Xác nhận!",
            cancelButtonText: "Hủy!"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Xóa thành công!",
                    icon: "success"
                });
                setCart(Object.values(carts).slice(0, 0))
            }
        });
    }


    // LOGIN
    const [showLogin, setShowLogin] = useState(false);
    const handleShowLogin = () => {
        setShowLogin(!showLogin)
    };

    const handleOverLayer = () => {
        setShowLogin(!showLogin)
    }


    // ----------------------------

    const all_Context_Provider: objectContextProvider = {
        PageClient: PageClient,
        DataProducts: dataProducts,
        ListProductsNew: listProductsNew,
        Carts: carts,
        AddToCart: add_to_cart,
        Delete_Product_Cart: delete_product_cart,
        Delete_All_Product_Cart: delete_all_product_cart,
        ShowLogin: showLogin,
        HandleShowLogin: handleShowLogin,
        HandleOverLayer: handleOverLayer,
    };


    return (<>
        <contextProvider.Provider value={all_Context_Provider}>
            {children}
        </contextProvider.Provider>
    </>)
}

export { contextProvider, DataProvider }