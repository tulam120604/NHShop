import '../../../Styles/Client/PayPage/Pay_Page.css';
import Swal from 'sweetalert2';

const Pay_Page = () => {

    const Order = () => {
        Swal.fire({
            title: "Please wait!",
            timer: 1000,
            timerProgressBar: true,
            didOpen: () => {
                Swal.showLoading();
            },
        }).then((result) => {
            /* Read more about handling dismissals below */
            if (result.dismiss === Swal.DismissReason.timer) {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Payment success. Please wait for delivery.",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        });
    }
    return (<>
        <div className="Pay_Page">
            <div className="check_out_child">
                <div className="check_out_child_left">
                    <span className="input_title">Billing details</span>
                    <section className="input_left v1">
                        <div className="fa_nameuser">
                            <span className="firstname">firstname</span>
                            <input type="text" />
                        </div>
                        <div className="fa_nameuser">
                            <span className="lastname">lastname</span>
                            <input type="text" />
                        </div>
                    </section>
                    <section className="input_left">
                        <span>Company Name (Optional)</span>
                        <input type="text" />
                    </section>
                    <section className="input_left">
                        <span>Country / Region</span>
                        <input type="text" />
                    </section>
                    <section className="input_left">
                        <span>Street address</span>
                        <input type="text" />
                    </section>
                    <section className="input_left">
                        <span>Town / City</span>
                        <input type="text" />
                    </section>
                    <section className="input_left">
                        <span>Province</span>
                        <input type="text" placeholder="Western Province" />
                    </section>
                    <section className="input_left">
                        <span>ZIP code</span>
                        <input type="text" />
                    </section>
                    <section className="input_left">
                        <span>Phone</span>
                        <input type="text" />
                    </section>
                    <section className="input_left">
                        <span>Email address</span>
                        <input type="text" />
                    </section>
                    <section className="input_left">
                        <span />
                        <input type="text" placeholder="Additional information" />
                    </section>
                </div>
                <div className="check_out_child_right">
                    <div className="child_right_v1">
                        <div className="title_name_v1">
                            <span className="name_v1">Product</span>
                            <span className="products_v2">Subtotal</span>
                        </div>
                        <div className="fa_section_cart_totals">
                            <section className="key_totals">
                                <span>Asgaard sofa x 1</span>
                                <span>Total</span>
                                <span>Total</span>
                            </section>
                            <section className="value_totals">
                                <span>25.000.000đ</span>
                                <span>25.000.000đ</span>
                                <b>25.000.000đ</b>
                            </section>
                        </div>
                        <div className="child_right_checkbox">
                            <input type="radio" defaultValue="checked" />
                            <span>Direct Bank Transfer</span>
                            <p>Make your payment directly into our bank account. Please use your Order ID as the payment
                                reference. Your order will not be shipped until the funds have cleared in our account.
                            </p>
                        </div>
                        <div className="child_right_checkbox">
                            <input type="radio" defaultValue="checked" />
                            <span>Direct Bank Transfer</span>
                            <p style={{ display: 'none' }}>Make your payment directly into our bank account. Please use your
                                Order ID as the payment
                                reference. Your order will not be shipped until the funds have cleared in our account.
                            </p>
                        </div>
                        <div className="child_right_checkbox">
                            <input type="radio" defaultValue="checked" />
                            <span>Cash On Delivery</span>
                            <p style={{ display: 'none' }}>Make your payment directly into our bank account. Please use your
                                Order ID as the payment
                                reference. Your order will not be shipped until the funds have cleared in our account.
                            </p>
                        </div>
                        <p className="privacy">
                            Your personal data will be used to support your experience throughout this website, to
                            manage access to your account, and for other purposes described in our <b>privacy
                                policy</b>.
                        </p>
                        <div className="btn_order">
                            <button onClick={Order} className="order">Place order</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default Pay_Page