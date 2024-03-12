import '../../Styles/Client/Footer.css'
const Footer = () => {
    return (<>
        <div className="Footer_client">
            <footer>
                <div className="block_footer">
                    <div className="box_footer">
                        <section className="colum_footer">
                            <span>Funiro.</span>
                            <p>400 University Drive Suite 200 Coral Gables, <br />
                                FL 33134 USA</p>
                        </section>
                        <section className="contact_footer">
                            <p>links</p>
                            <section>
                                <li>home</li>
                                <li><a href="../Shop/Shop.html">shop</a></li>
                                <li>about</li>
                                <li>contact</li>
                            </section>
                        </section>
                        <section className="help_footer">
                            <p>help</p>
                            <section>
                                <li>Payment Option</li>
                                <li>Returns</li>
                                <li>Privacy Policies</li>
                            </section>
                        </section>
                        <section className="newsletter_footer">
                            <p>Newsletter</p>
                            <section className="contact">
                                <input type="text" placeholder="Enter Your Email Address" />
                                <button>subcribe</button>
                            </section>
                        </section>
                    </div>
                    <div className="copyright">
                        <span>2023 furino. All rights reverved</span>
                    </div>
                </div>
            </footer>

        </div>
    </>)
}

export default Footer