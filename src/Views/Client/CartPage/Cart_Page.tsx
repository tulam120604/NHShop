import { Link } from 'react-router-dom'
import '../../../Styles/Client/CartPage/Cart_Page.css'
const Cart_Page = () => {
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
                                    <th />
                                </tr>
                            </thead>
                            <thead className="space_thead_tbody" />
                            <tbody><tr>
                                <td><img src="../../src/assets/Images/item1.png" alt="Asgaard sofa" /></td>
                                <td>
                                    <p>Asgaard sofa</p>
                                </td>
                                <td>
                                    <p>25,000,000₫</p>
                                </td>
                                <td>
                                    <div className="sluong">1</div>
                                </td>
                                <td>25,000,000₫</td>
                                <td className="dele_product"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAAAXNSR0IArs4c6QAAAK9JREFUSEvtltENgCAMRI9J1E10E51EnUSdREdxFD0TE0NAAgImSj8J5eXaciAQKUQkDl4BdQCyAAonAMtV0bwvlAFADYDx26Bhl5gHKF0v9+hk+IatPFgeb6qqPaqqqCaBXCpqVTo2k5NzFxygVrHBGlQYQHQUOoscViAmmxTRI1XTag1y6Q9zEsi1cn8qHS8e74MPB6eZcuqO0H1Onj7pdJPjeTCBnLuvS4z23doAWoIuG7abx/QAAAAASUVORK5CYII=" />
                                </td>
                            </tr>
                                <tr>
                                    <td><img src="../../src/assets/Images/item1.png" alt="Asgaard sofa" /></td>
                                    <td>
                                        <p>Asgaard sofa</p>
                                    </td>
                                    <td>
                                        <p>25,000,000₫</p>
                                    </td>
                                    <td>
                                        <div className="sluong">1</div>
                                    </td>
                                    <td>25,000,000₫</td>
                                    <td className="dele_product"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAAAXNSR0IArs4c6QAAAK9JREFUSEvtltENgCAMRI9J1E10E51EnUSdREdxFD0TE0NAAgImSj8J5eXaciAQKUQkDl4BdQCyAAonAMtV0bwvlAFADYDx26Bhl5gHKF0v9+hk+IatPFgeb6qqPaqqqCaBXCpqVTo2k5NzFxygVrHBGlQYQHQUOoscViAmmxTRI1XTag1y6Q9zEsi1cn8qHS8e74MPB6eZcuqO0H1Onj7pdJPjeTCBnLuvS4z23doAWoIuG7abx/QAAAAASUVORK5CYII=" />
                                    </td>
                                </tr>
                                <tr>
                                    <td><img src="../../src/assets/Images/item1.png" alt="Asgaard sofa" /></td>
                                    <td>
                                        <p>Asgaard sofa</p>
                                    </td>
                                    <td>
                                        <p>25,000,000₫</p>
                                    </td>
                                    <td>
                                        <div className="sluong">1</div>
                                    </td>
                                    <td>25,000,000₫</td>
                                    <td className="dele_product"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAAAXNSR0IArs4c6QAAAK9JREFUSEvtltENgCAMRI9J1E10E51EnUSdREdxFD0TE0NAAgImSj8J5eXaciAQKUQkDl4BdQCyAAonAMtV0bwvlAFADYDx26Bhl5gHKF0v9+hk+IatPFgeb6qqPaqqqCaBXCpqVTo2k5NzFxygVrHBGlQYQHQUOoscViAmmxTRI1XTag1y6Q9zEsi1cn8qHS8e74MPB6eZcuqO0H1Onj7pdJPjeTCBnLuvS4z23doAWoIuG7abx/QAAAAASUVORK5CYII=" />
                                    </td>
                                </tr>
                                <tr>
                                    <td><img src="../../src/assets/Images/item1.png" alt="Asgaard sofa" /></td>
                                    <td>
                                        <p>Asgaard sofa</p>
                                    </td>
                                    <td>
                                        <p>25,000,000₫</p>
                                    </td>
                                    <td>
                                        <div className="sluong">1</div>
                                    </td>
                                    <td>25,000,000₫</td>
                                    <td className="dele_product"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAAAXNSR0IArs4c6QAAAK9JREFUSEvtltENgCAMRI9J1E10E51EnUSdREdxFD0TE0NAAgImSj8J5eXaciAQKUQkDl4BdQCyAAonAMtV0bwvlAFADYDx26Bhl5gHKF0v9+hk+IatPFgeb6qqPaqqqCaBXCpqVTo2k5NzFxygVrHBGlQYQHQUOoscViAmmxTRI1XTag1y6Q9zEsi1cn8qHS8e74MPB6eZcuqO0H1Onj7pdJPjeTCBnLuvS4z23doAWoIuG7abx/QAAAAASUVORK5CYII=" />
                                    </td>
                                </tr>
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
                                <span>25.000.000đ</span>
                                <b>25.000.000đ</b>
                            </section>
                        </div>
                        <button>
                            <Link to={'/pay_checkout'}>
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