import React from 'react';
import { CheckoutFooterStyled } from './CheckoutFooter.styled';

export default function CheckoutFooter() {
    return (
        <CheckoutFooterStyled>
            <div className="footer">
                <div className="container footerWrapper">
                    <div className="footerOne">
                        <div className="heading">
                            <h2>Contact</h2>
                        </div>
                        <img src="img/contact.png" className="icon" alt="contact" />
                    </div>
                    <div className="footerTwo">
                        <div className="heading">
                            <h2>Sitemap</h2>
                        </div>
                        <div className="footerLinks">
                            <li>
                                <a href="#">Online Store</a>
                            </li>
                            <li>
                                <a href="#">Sell on 3treen</a>
                            </li>
                            <li>
                                <a href="#">About Us</a>
                            </li>
                            <li>
                                <a href="#">My Account</a>
                            </li>
                            <li>
                                <a href="#">Shopping Cart</a>
                            </li>
                        </div>
                    </div>
                    <div className="footerThree">
                        <div className="heading">
                            <h2>Payment Method</h2>
                        </div>
                        <img src="img/flutterwave-logo-1.png" className="iconPayment" alt="contact" />
                    </div>
                    <div className="footerFour">
                        <div className="heading">
                            <h2>Social Media</h2>
                        </div>

                        <img src="img/logo.svg" alt="contact" />

                        <div className="socialMedia">
                            <li>
                                <a href="social">
                                    <img src="img/fb-rounded-brand-white-64.png" className="icon" alt="social" />
                                </a>
                            </li>
                            <li>
                                <a href="social">
                                    <img src="img/gplus-rounded-brand-white-64.png" className="icon" alt="social" />
                                </a>
                            </li>
                            <li>
                                <a href="social">
                                    <img src="img/twitter-rounded-brand-white-64.png" className="icon" alt="social" />
                                </a>
                            </li>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footerMobile">
                <div className="footerMobileLogo">
                    <img src="img/logo.svg" alt="logo" />
                </div>

                <div className="footerMobileSocial">
                    <li>
                        <a href="social">
                            <img src="img/fb-rounded-brand-white-64.png" className="icon" alt="social" />
                        </a>
                    </li>
                    <li>
                        <a href="social">
                            <img src="img/gplus-rounded-brand-white-64.png" className="icon" alt="social" />
                        </a>
                    </li>
                    <li>
                        <a href="social">
                            <img src="img/twitter-rounded-brand-white-64.png" className="icon" alt="social" />
                        </a>
                    </li>
                </div>

                <div className="footerMobilePayment">
                    <img src="img/western-union.png" alt="icon" />
                    <img src="img/master.png" alt="icon" />
                    <img src="img/paypal.png" alt="icon" />
                    <img src="img/visa.png" alt="icon" />
                </div>
            </div>
        </CheckoutFooterStyled>
    );
}
