import React from 'react';
import { FooterStyled } from './Footer.styled';

const Footer = () => {
    return (
        <FooterStyled>
            <footer className="Footer">
                <div className="Search">
                    <input type="text" placeholder="Search" />
                    <div className="SearchBtn">
                        <img src="/img/Vector.png" alt="search" />
                    </div>
                </div>
                <div className="Socials">
                    <img src="/img/name-png-format-01-1.png" alt="3reen" />
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
                <div className="Flutterwave">
                    <img src="/img/flutterwave-logo-1.png" alt="flutterwave" />
                </div>
            </footer>
        </FooterStyled>
    );
};

export default Footer;
