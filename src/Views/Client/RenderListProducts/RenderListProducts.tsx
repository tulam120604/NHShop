import { Link } from 'react-router-dom';
import '../../../Styles/Client/RenderListProducts/RenderListProducts.css';
type props_ListProductsNew = {
    ListProductsNew: object,
}
const RenderListProducts = ({ ListProductsNew }: props_ListProductsNew) => {

    return (<>
        <div className="Render_List_Products">
            <div className="box">
                {Object.values(ListProductsNew)?.map((item) => {
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
                                    <Link to={`/shop/deital_product/${item.id}`}> <button>View  product</button></Link>
                                    <Link to="/shoping_cart" ><button>Add to cart</button></Link>
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
                    </>)
                })}
            </div>
        </div>
    </>)
}

export default RenderListProducts