import { Link } from 'react-router-dom'
import '../../../Styles/Client/CartPage/Cart_Page.css'
import { useContext } from 'react'
import { contextProvider } from '../../../ContextProvide/DataProvider'
const Cart_Page = () => {
    const { Carts } = useContext(contextProvider);
    const { Delete_Product_Cart, Delete_All_Product_Cart } = useContext(contextProvider);
    let a = 0;
    a = Carts.reduce((x, y) => x + y.price, 0)



    return (<>
        <div className="Cart_Page">
            <div className="shopping_cart">
                <div className="shopping_cart_child">
                    <div className="shopping_cart_child_left">
                        <table>
                            <thead>
                                <tr>
                                    <th />
                                    <th>Product</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Subtotal</th>
                                    <th><img className='dele_all_product' onClick={() => Object.values(Carts).length !== 0 ? Delete_All_Product_Cart() : ''}
                                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAAAXNSR0IArs4c6QAAAK9JREFUSEvtltENgCAMRI9J1E10E51EnUSdREdxFD0TE0NAAgImSj8J5eXaciAQKUQkDl4BdQCyAAonAMtV0bwvlAFADYDx26Bhl5gHKF0v9+hk+IatPFgeb6qqPaqqqCaBXCpqVTo2k5NzFxygVrHBGlQYQHQUOoscViAmmxTRI1XTag1y6Q9zEsi1cn8qHS8e74MPB6eZcuqO0H1Onj7pdJPjeTCBnLuvS4z23doAWoIuG7abx/QAAAAASUVORK5CYII=" />
                                    </th>
                                </tr>
                            </thead>
                            <thead className="space_thead_tbody" />
                            <tbody>
                                {(Object.values(Carts).length === 0) ? 'Chưa có sản phẩm trong giỏ !' : ''}
                                {Object.values(Carts)?.map((item) => {
                                    return (<>
                                        <tr>
                                            <td><img src="../../src/assets/Images/item1.png" alt="Asgaard sofa" /></td>
                                            <td>
                                                <p>{item.name}</p>
                                            </td>
                                            <td>
                                                <p>{new Intl.NumberFormat('vi-VN').format(item.price)}₫</p>
                                            </td>
                                            <td>
                                                <div className="sluong">{item.quantity}</div>
                                            </td>
                                            <td>{new Intl.NumberFormat('vi-Vn').format((item.price) * (item.quantity))}₫</td>
                                            <td className="dele_product"><img onClick={() => Delete_Product_Cart(item)}
                                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAAAXNSR0IArs4c6QAAAK9JREFUSEvtltENgCAMRI9J1E10E51EnUSdREdxFD0TE0NAAgImSj8J5eXaciAQKUQkDl4BdQCyAAonAMtV0bwvlAFADYDx26Bhl5gHKF0v9+hk+IatPFgeb6qqPaqqqCaBXCpqVTo2k5NzFxygVrHBGlQYQHQUOoscViAmmxTRI1XTag1y6Q9zEsi1cn8qHS8e74MPB6eZcuqO0H1Onj7pdJPjeTCBnLuvS4z23doAWoIuG7abx/QAAAAASUVORK5CYII=" />
                                            </td>
                                        </tr>
                                    </>)
                                })}
                            </tbody></table>
                    </div>
                    <div className="shopping_cart_child_right">
                        <span className="cart_totals">Cart Totals</span>
                        <div className="fa_section_cart_totals">
                            <section className="key_totals">
                                <span>Subtotal</span>
                                <span>Total</span>
                            </section>
                            <section className="value_totals">
                                <span>{new Intl.NumberFormat('vi-VN').format(a)} đ</span>
                                <b>{new Intl.NumberFormat('vi-VN').format(a)}đ</b>
                            </section>
                        </div>
                        <button>
                            <Link to={(Object.values(Carts).length == 0) ? '' : '/pay_checkout'}>
                                Check Out
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default Cart_Page