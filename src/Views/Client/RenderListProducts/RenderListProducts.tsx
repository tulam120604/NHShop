import { Link } from 'react-router-dom';
import '../../../Styles/Client/RenderListProducts/RenderListProducts.css';
import { useContext } from 'react';
import { contextProvider } from '../../../ContextProvide/DataProvider';
type props_ListProductsNew = {
    ListProductsNew: Array<TypeObject>,
};
interface TypeObject {
    id: number,
    name: string,
    price: number,
    title: string,
}

const RenderListProducts = ({ ListProductsNew }: props_ListProductsNew) => {
    const { AddToCart } = useContext(contextProvider);

    return (<>
        <div className="Render_List_Products">
            <div className="box">
                {ListProductsNew?.map((item: TypeObject) => {
                    return (<>
                        <div className="item">
                            <div className="img_item">
                                <img src="../../src/assets/Images/item3.png" alt='' />
                            </div>
                            <section>-50%</section>
                            <div className="properties">
                                <span>{item.name}</span>
                                <p key={item.price + 111}>{item.title}</p>
                                <b>{item.price}đ<del>14.000.000đ</del></b>
                            </div>
                            <div className="add_cart">
                                <div className="block_add_cart">
                                    <Link to={`/shop/deital_product/${item.id}`}>View  product</Link>
                                    <button className='btn_add_cart' onClick={() => AddToCart(item)}>Add to cart</button>
                                    <div className="operation">
                                        <div className="sections">
                                            <img src="../../src/assets/Images/share.png" alt='' />
                                            <span>share</span>
                                        </div>
                                        <div className="sections">
                                            <img src="../../src/assets/Images/compare.png" alt='' />
                                            <span>compare</span>
                                        </div>
                                        <div className="sections likeIcon">
                                            <img src="../../src/assets/Images/heart.png" alt='' />
                                            <span>like</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>)
                })}
            </div>
        </div>
    </>)
}

export default RenderListProducts