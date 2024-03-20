import { Link, useParams } from 'react-router-dom';
import '../../../Styles/Client/DeitalProduct/DeitalProduct.css';
import RenderListProducts from '../RenderListProducts/RenderListProducts';
import { useContext, useEffect, useState } from 'react';
import { contextProvider } from '../../../ContextProvide/DataProvider';
import axios from 'axios';

type Type_deitalproducts = {
    id: number,
    name: string,
    // image: string,
    price: number,
    title: string,
}

const DeitailProduct = () => {
    const { ListProductsNew } = useContext(contextProvider);
    const { id } = useParams();
    const [deitalProduct, setDeitaiProduct] = useState<Type_deitalproducts>([]);
    useEffect(() => {
        (async () => {
            try {
                const { data } = await axios.get(`http://localhost:3000/products/${id}`);
                setDeitaiProduct(data)
            } catch (error) {
                console.log(error);
            }
        })()
    }, [id])

    return (<>
        <div className="Deital_Product">
            <div className="Deital_Product_Child">
                <div className="baner_deital_product">
                    <div className="deital_product_baner">
                        <div className="navBar_deital_product_child">
                            <div className="navBar_left">
                                <span className="v1">Home</span>
                                <span className="v2">❯</span>
                                <span className="v1">Shop</span>
                                <span>❯</span>
                                <div className="showing">
                                    <span>Asgaard sofa</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* END BANER DEITAL PRODUCT */}

                <div className="deital_product">
                    <div className="deital_product_child">
                        {/* left */}
                        <div className="deital_product_left">
                            <section className="small_img">
                                <img src="../../src/assets/Images/item1.png" alt='' />
                                <img src="../../src/assets/Images/item1.png" alt='' />
                                <img src="../../src/assets/Images/item1.png" alt='' />
                                <img src="../../src/assets/Images/item1.png" alt='' />
                            </section>
                            <div className="large_img">
                                <img src="../../src/assets/Images/item1.png" alt='' />
                            </div>
                        </div>
                        {/* right */}
                        <div className="deital_product_right">
                            <div className="row_deital_product_right">
                                {/* properties */}
                                <div className="properties">
                                    <span className="name_product">{deitalProduct.name}</span>
                                    <span className="price_product">{deitalProduct.price}đ</span>
                                    <section className="feedback">
                                        <div className="img_feedback" />
                                        <span className="quality_feedback">5 Customer Review</span>
                                    </section>
                                    <p className="description">
                                        Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact,
                                        stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended
                                        highs for a sound.
                                    </p>
                                </div>
                                {/* size and color */}
                                <div className="size_and_color_product">
                                    <section className="size">
                                        <span className="title_size">size</span>
                                        <div className="size_button">
                                            <button>l</button>
                                            <button>xl</button>
                                            <button>xs</button>
                                        </div>
                                    </section>
                                    <section className="color">
                                        <span className="title_color">color</span>
                                        <div className="color_button">
                                            <button className="blue_sky" />
                                            <button className="btn_black" />
                                            <button className="btn_yellow" />
                                        </div>
                                    </section>
                                </div>
                                {/* add to cart */}
                                <div className="add_to_cart">
                                    <section className="quality">
                                        <button className="down">-</button>
                                        <div className="quality_positive">1</div>
                                        <button className="up">+</button>
                                    </section>
                                    <Link className='btn-addCart' to={"/shoping_cart"} >Add to cart</Link>
                                    <button className='btn_compare'>+ compare</button>
                                </div>
                            </div>
                            {/* row address deital product */}
                            <div className="other_infor">
                                <div className="key_other_infor">
                                    <li>SKU</li>
                                    <li>Category</li>
                                    <li>Tags</li>
                                    <li>Share</li>
                                </div>
                                <div className="value_other_infor">
                                    <li>: SS001</li>
                                    <li>: Sofas</li>
                                    <li>: Sofa, Chair, Home, Shop</li>
                                    <li>: </li>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* END DEITAL PRODUCT */}
                <div className="description_deital">
                    <div className="description_deital_child">
                        {/* row text */}
                        <div className="row_text_description">
                            <section className="menu_descriptions">
                                <li>Description</li>
                                <li>Additional Information</li>
                                <li>Reviews [5]</li>
                            </section>
                            <section className="show_text">
                                <p>Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo
                                    speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the
                                    show on the road</p>
                                <p>Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering.
                                    Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact,
                                    stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended
                                    highs for a sound that is both articulate and pronounced. The analogue knobs allow you to
                                    fine tune the controls to your personal preferences while the guitar-influenced leather
                                    strap enables easy and stylish travel.</p>
                            </section>
                        </div>
                        {/* row img */}
                        <div className="row_img_description">
                            <img src="../../src/assets/Images/item4.png" alt='' />
                            <img src="../../src/assets/Images/item4.png" alt='' />
                        </div>
                    </div>
                </div>

                {/* END DESCRIPTION */}
                <div className="all_products">
                    <div className="block_new">
                        <span>Related Products</span>
                        <RenderListProducts
                            ListProductsNew={ListProductsNew} />
                        <div className="list_page">
                            <button>1</button>
                            <button>2</button>
                            <button>3</button>
                            <button>next</button>
                        </div>
                    </div>
                </div>





            </div>
        </div>
    </>)
}

export default DeitailProduct