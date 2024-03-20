import axios from "axios";
import { createContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

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
    DeleteProduct: (id: number, name_Item: string) => void,
    AddProduct: (item: TypeState) => void,
    EditProduct: (item: TypeState) => void,
    Carts: object,
    AddToCart: (item: TypeState) => void,
    Delete_Product_Cart: (item: TypeState) => void,
    Delete_All_Product_Cart: () => void,
    ShowLogin: boolean,
    HandleShowLogin: () => void,
    HandleOverLayer: () => void,
    CreateAccount: (data: TypeDataForm) => void,
    Func_Login: (data: TypeDataForm) => void,
    Func_Sign_Out: () => void,
    ShowInforAccount: () => void,
    StateShowInfor: boolean,
    Setting_Account: () => void,
    ShowSetting_Account: boolean,
    LoadingCallApi: boolean,
}

interface TypeDataForm {
    id: number,
    username: string,
    password: string,
    confirm_password?: string,
    email: string,
}

const contextProvider = createContext({} as objectContextProvider);
const DataProvider = ({ children }: { children: React.ReactNode }) => {
    const [loadingCallApi, setLoadingCallApi] = useState<boolean>(false);

    const navigation = useNavigate()
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

    // ADD PRODUCT
    const addProduct = async (item: TypeState) => {
        try {
            const { data } = await axios.post(`http://localhost:3000/products/`, item);
            setDataProducts([...dataProducts, item]);
            toast.success('Successfully', { autoClose: 1000 })
            navigation('/adminstration');
        } catch (error) {
            console.log(error);
        }
    }

    // DELETE PRODUCT
    const deleteProduct = async (id: number, name_Item: string) => {
        try {
            await Swal.fire({
                title: `Xác nhận xóa ${name_Item}?`,
                icon: "question",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Xóa!",
                cancelButtonText: "Hủy!"
            }).then((result) => {
                if (result.isConfirmed) {
                    axios.delete(`http://localhost:3000/products/${id}`);
                    setDataProducts(dataProducts.filter((item) => item.id !== id))
                    Swal.fire({
                        title: "Xóa thành công!",
                        icon: "success"
                    });
                }
            });
        } catch (error) {
            console.log(error);

        }
    }

    // EDIT PRODUCT
    const edit_Product = async (product: TypeState) => {
        try {
            await axios.put(`http://localhost:3000/products/${product.id}`, product);
            setDataProducts(dataProducts.map((item) => (item.id === product.id) ? product : item));
            toast.success('Successfully', { autoClose: 1000 })
            navigation('/adminstration');
        } catch (error) {
            console.log(error);
        }
    }

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


    //SHOW LOGIN PAGE
    const [showLogin, setShowLogin] = useState(false);
    const handleShowLogin = () => {
        setShowLogin(!showLogin)
    };
    // CREATE ACCOUNT
    const create_Account = async (dataForm: TypeDataForm) => {
        setLoadingCallApi(true);
        try {
            await axios.post(`http://localhost:3000/users`, dataForm);
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Đăng kí thành công",
                showConfirmButton: false,
                timer: 1000
            });
            setLoadingCallApi(false);
        } catch (error) {
            console.log(error);
        }
    }

    // LOGIN
    const Fn_login = async (dataForm: TypeDataForm) => {
        setLoadingCallApi(true);
        try {
            const { data } = await axios.post(`http://localhost:3000/login`, dataForm);
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Đăng nhập thành công",
                showConfirmButton: false,
                timer: 1000,
            }); setTimeout(() => {
                navigation('/');
                setShowLogin(!showLogin);
            }, 1100);
            setLoadingCallApi(false);
            return data
        } catch (error) {
            setLoadingCallApi(false);
            console.log(error);
        }
    }

    // LOG OUT
    const sign_Out = async () => {
        try {
            Swal.fire({
                title: "Xác nhận đăng xuất tài khoản?",
                icon: "question",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Đăng xuất!",
                cancelButtonText: "Hủy!"
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire({
                        title: "Đăng xuất thành công!",
                        icon: "success"
                    });
                    localStorage.clear();
                    navigation('/');
                }

            });
        } catch (error) {
            console.log(error);
        }
    }

    const [stateShowInfor, setStateShowInfo] = useState<boolean>(false);
    const showInforAccount = () => {
        setStateShowInfo(!stateShowInfor);
    }
    const [showSetting_Account, setShowSetting_Account] = useState<boolean>(false)
    const setting_Account = () => {
        setShowSetting_Account(!showSetting_Account)
    }


    const handleOverLayer = () => {
        if (showLogin) {
            setShowLogin(!showLogin);
        }
        else if (showSetting_Account) {
            setShowSetting_Account(!showSetting_Account);
        }
    }


    // ----------------------------

    const all_Context_Provider: objectContextProvider = {
        PageClient: PageClient,
        DataProducts: dataProducts,
        ListProductsNew: listProductsNew,
        DeleteProduct: deleteProduct,
        AddProduct: addProduct,
        EditProduct: edit_Product,
        Carts: carts,
        AddToCart: add_to_cart,
        Delete_Product_Cart: delete_product_cart,
        Delete_All_Product_Cart: delete_all_product_cart,
        ShowLogin: showLogin,
        HandleShowLogin: handleShowLogin,
        HandleOverLayer: handleOverLayer,
        CreateAccount: create_Account,
        Func_Login: Fn_login,
        Func_Sign_Out: sign_Out,
        ShowInforAccount: showInforAccount,
        StateShowInfor: stateShowInfor,
        Setting_Account: setting_Account,
        ShowSetting_Account: showSetting_Account,
        LoadingCallApi: loadingCallApi
    };


    return (<>
        <contextProvider.Provider value={all_Context_Provider}>
            {children}
        </contextProvider.Provider>
        <ToastContainer />
    </>)
}

export { contextProvider, DataProvider }