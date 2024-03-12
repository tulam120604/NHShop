import { useContext } from 'react'
import '../../../Styles/Client/ShopPage/Product_ShopPage.css'
import RenderListProducts from '../RenderListProducts/RenderListProducts'
import { contextProvider } from '../../../ContextProvide/DataProvider'
const Product_ShopPage = () => {
    const { DataProducts } = useContext(contextProvider);
    return (<>
        <div className="Product_ShopPage">
            <div className="block_new">
                <RenderListProducts ListProductsNew={DataProducts} />
                {/* <div className="box">
                    <div className="item">
                        <div className="img_item">
                            <img src="../../src/assets/Images/item3.png" alt='' />
                        </div>
                        <section>-50%</section>
                        <div className="properties">
                            <span>Syltherine</span>
                            <p>Stylish cafe chai</p>
                            <b>7.000.000đ<del>14.000.000đ</del></b>
                        </div>
                        <div className="add_cart">
                            <div className="block_add_cart">
                                <button> <a href="../Deital/Deital.html">View  product</a></button>
                                <button>Add to cart</button>
                                <div className="operation">
                                    <div className="sections">
                                        <img src="../../src/assets/Images/share.png" alt='' />
                                        <span>share</span>
                                    </div>
                                    <div className="sections">
                                        <img src="../../src/assets/Images/compare.png" alt='' />
                                        <span>compare</span>
                                    </div>
                                    <div className="sections">
                                        <img src="../../src/assets/Images/heart.png" alt='' />
                                        <span>like</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="img_item">
                            <img src="../../src/assets/Images/item3.png" alt='' />
                        </div>
                        <section>-50%</section>
                        <div className="properties">
                            <span>Syltherine</span>
                            <p>Stylish cafe chai</p>
                            <b>7.000.000đ<del>14.000.000đ</del></b>
                        </div>
                        <div className="add_cart">
                            <div className="block_add_cart">
                                <button> <a href="../Deital/Deital.html">View  product</a></button>
                                <button>Add to cart</button>
                                <div className="operation">
                                    <div className="sections">
                                        <img src="../../src/assets/Images/share.png" alt='' />
                                        <span>share</span>
                                    </div>
                                    <div className="sections">
                                        <img src="../../src/assets/Images/compare.png" alt='' />
                                        <span>compare</span>
                                    </div>
                                    <div className="sections">
                                        <img src="../../src/assets/Images/heart.png" alt='' />
                                        <span>like</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="img_item">
                            <img src="../../src/assets/Images/item3.png" alt='' />
                        </div>
                        <section>-50%</section>
                        <div className="properties">
                            <span>Syltherine</span>
                            <p>Stylish cafe chai</p>
                            <b>7.000.000đ<del>14.000.000đ</del></b>
                        </div>
                        <div className="add_cart">
                            <div className="block_add_cart">
                                <button> <a href="../Deital/Deital.html">View  product</a></button>
                                <button>Add to cart</button>
                                <div className="operation">
                                    <div className="sections">
                                        <img src="../../src/assets/Images/share.png" alt='' />
                                        <span>share</span>
                                    </div>
                                    <div className="sections">
                                        <img src="../../src/assets/Images/compare.png" alt='' />
                                        <span>compare</span>
                                    </div>
                                    <div className="sections">
                                        <img src="../../src/assets/Images/heart.png" alt='' />
                                        <span>like</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="item">
                        <div className="img_item">
                            <img src="../../src/assets/Images/item3.png" alt='' />
                        </div>
                        <section>-50%</section>
                        <div className="properties">
                            <span>Syltherine</span>
                            <p>Stylish cafe chai</p>
                            <b>7.000.000đ<del>14.000.000đ</del></b>
                        </div>
                        <div className="add_cart">
                            <div className="block_add_cart">
                                <button> <a href="../Deital/Deital.html">View  product</a></button>
                                <button>Add to cart</button>
                                <div className="operation">
                                    <div className="sections">
                                        <img src="../../src/assets/Images/share.png" alt='' />
                                        <span>share</span>
                                    </div>
                                    <div className="sections">
                                        <img src="../../src/assets/Images/compare.png" alt='' />
                                        <span>compare</span>
                                    </div>
                                    <div className="sections">
                                        <img src="../../src/assets/Images/heart.png" alt='' />
                                        <span>like</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                <div className="list_page">
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                    <button>next</button>
                </div>
            </div>
        </div>
    </>)
}

export default Product_ShopPage