import React from 'react';
import { FooterStyled } from './Footer.styled';

const Footer = () => {
    return (
        <FooterStyled>
            <footer className="Footer">
                <div className="Contact">
                    <p>Contact</p>
                    <span>phone icon</span>
                </div>
                <div className="Sitemap">
                    <p>Sitemap</p>
                    <ul>
                        <li>
                            <a href="https://twitter.com">Online Store</a>
                        </li>
                        <li>
                            <a href="https://twitter.com">For Business</a>
                        </li>
                        <li>
                            <a href="https://twitter.com">About Us</a>
                        </li>
                        <li>
                            <a href="https://twitter.com">My Accout</a>
                        </li>
                        <li>
                            <a href="https://twitter.com">Shopping Cart</a>
                        </li>
                    </ul>
                </div>
                <div className="Flutterwave">
                    <p>Payment method</p>
                    <img src="/img/flutterwave-logo-1.png" alt="flutterwave" />
                </div>
                <div className="Socials">
                    <p>Social Media</p>
                    <img src="/img/name-png-format-01-1.png" alt="3reen" className="Logo" />
                    <ul className="Nav">
                        <li>
                            <a href="https://facebook.com">
                                <img src="/img/fb-rounded-brand-white-64.png" alt="facebook" />
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com">
                                <img src="/img/gplus-rounded-brand-white-64.png" alt="g-plus" />
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com">
                                <img src="/img/twitter-rounded-brand-white-64.png" alt="twitter" />
                            </a>
                        </li>
                    </ul>
                </div>
            </footer>
        </FooterStyled>
    );
};

export default Footer;
