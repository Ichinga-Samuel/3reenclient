import React from 'react';
import { FooterContainer, FooterList } from '@/components/UserLayout/Footer/Footer.styled';
import { Row, Col } from 'antd';
import Link from 'next/link';
import { Mail } from '@material-ui/icons';

const Footer = () => {
    return (
        <FooterContainer>
            <div className="upperfooter">
                <Row gutter={24}>
                    <Col xs={24} xl={6} lg={6}>
                        <div className="foothead">Contact</div>
                        <FooterList>
                            <li>
                                <Link href="/">
                                    <a>
                                        <img src="img/contact.png" alt="contact" />
                                        +234 (0) 908 0833 2938
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/">
                                    <a>
                                        <Mail />
                                        helpdesk@3treen.com
                                    </a>
                                </Link>
                            </li>
                        </FooterList>
                    </Col>
                    <Col xs={24} xl={6} lg={6}>
                        <div className="foothead">Sitemap</div>
                        <FooterList>
                            <li>
                                <Link href="/">
                                    <a>Online Store</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/">
                                    <a>Sell on 3reen</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/">
                                    <a>About Us</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/">
                                    <a>My Account</a>
                                </Link>
                            </li>
                        </FooterList>
                    </Col>
                    <Col xs={24} xl={6} lg={6}>
                        <div className="foothead">Payment Method</div>
                        <div>
                            <img src="img/flutterwave-logo-1.png" className="footerPayment" alt="contact" />
                        </div>
                    </Col>
                    <Col xs={24} xl={6} lg={6}>
                        <div className="foothead">Social Media</div>
                    </Col>
                </Row>
            </div>
            <div className="innerfooter">
                <span>&copy; {new Date().getFullYear()} TreenShop. Copyright</span>
            </div>
        </FooterContainer>
    );
};

export default Footer;
