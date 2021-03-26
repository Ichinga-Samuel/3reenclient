/* eslint-disable prettier/prettier */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import { Header } from './Heading.stories';
import { AboutWrap, Footer, Team } from './styled/AboutStyled';
import aboutBanner from './images/about-banner.png';
import missionImg from './images/mission-img.svg';
import team1 from './images/team-1.svg';
import team2 from './images/team-2.svg';
import flutterIcon from './Icons/flutterwave-logo.svg';
import logo1 from './Icons/logo-1.svg';
import youtubeIcon from './Icons/youtube-logo.svg';
import facebkIcon from './Icons/fb-icon.svg';
import twitterIcon from './Icons/twitter-icon.svg';
import tel from './Icons/telephone.svg';

export function Eco({ closeQBox }) {
    return (
        <div className="Q-box">
            <svg
                className="Q-dropdown"
                onClick={closeQBox}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>
            3r33n ensures that you are always guided from introduction to a product by sales representatative, The
            customer success team takes over to guide th use of purchased products and garner user experience feedback.
        </div>
    );
}

// export default {
//     title: 'CustomerCare',
// };

export const AboutUs = () => {
    const qDropDown = (
        <svg
            className="Q-dropUp"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
        >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
    );
    const [dropDown, setDropDown] = useState(qDropDown);
    const [qTagBox, setQtagBox] = useState([]);

    // const closeQTagBox = () => {
    // }

    const dropQTagBox = () => {
        setQtagBox([]);
        setDropDown(<Eco closeQBox={closeQBox} />);
        // setQtagBox(<Eco closeQBox={closeQBox} />);
        // setDropDown('');
    };

    const closeQBox = () => {
        setQtagBox([]);
        setDropDown(qDropDown);
    };

    return (
        <>
            <Header />
            <AboutWrap>
                <img src={aboutBanner} alt="" />
                <div className="about-banner_container">
                    <div className="borderTop"></div>
                    <div className="about-title"> ABOUT US </div>
                    <div className="about-slogan"> Delivering Constant Happiness </div>
                </div>
                <div className="mission">
                    <div className="our-mission">
                        <div className="borderTp"></div>
                        <h4>Our Mission</h4>
                        <p>
                            Our mission as a company is to create a better world of ecommerce transactions with the
                            innovation of a sales representative and customer success team designed to allay the fears
                            attached to online purchases. Our brand is also entering the market with drop shipping
                            services which implies a business to business(B2B) & Business to customer(B2C) online
                            market. An area that is totally unexploited in Nigeria.
                        </p>
                    </div>
                    <img src={missionImg} alt="image_" className="img-missionCol" />
                </div>
                <div className="what-we-do">
                    <div className="borderTp1"></div>
                    <div className="what-we-do_title">What We Do</div>
                    <div className="what-we-do_txt">
                        3reen is an e-commerce marketplace with new ideas and insights that would make online shopping
                        experience as close to physical shopping as possible. Our company ensures that the customer is
                        always guided from the introduction to a productby a sales representative. Convinced of its
                        quality proceeds to purchase. The customer success team takes over to guide the use of
                        purchsased products and garner user experience feedback. The customer interaction to enable
                        maximum customer satisfaction. 3reen is also offing drop shipping services as it is business to
                        business(b2b) or business to customer(b2c) targeted platform.
                    </div>
                </div>

                <Team>
                    <div className="borderTp1 pb-10"></div>
                    <div>
                        <div className="treen-team-title">The 3reen Limited Team</div>
                        <div className="font-18">Get to know us</div>
                    </div>
                    <div className="px-10 flex-box">
                        <div className="team-1">
                            <img src={team1} alt="" />
                            <div className="team-name">
                                <p className="primary-color">Moses Tanor</p>
                                <p>CEO Founder</p>
                            </div>
                        </div>
                        <div className="team-1">
                            <img src={team2} alt="" />
                            <div className="team-name">
                                <p className="primary-color">Jack Seed</p>
                                <p>CEO Founder</p>
                            </div>
                        </div>
                    </div>
                </Team>

                <div className="Q-tag">
                    <div className="Q-title">FREQUENTLY ASKED QUESTIONS(FAQS)</div>
                    <div className="Q-tagline">
                        <div className="flex-box justify-btw" onClick={dropQTagBox}>
                            <p>Q: Why would I prefer 3reen to other e-commerce platforms? </p>
                            {dropDown}
                        </div>
                        {qTagBox}
                    </div>
                    <div className="Q-tagline">
                        <div className="flex-box justify-btw">
                            <p>Q: Why would I prefer 3reen to other e-commerce platforms? </p>
                            {dropDown}
                        </div>
                        {/* { qTagBox } */}
                    </div>
                    <div className="Q-tagline">
                        <div className="flex-box justify-btw">
                            <p>Q: Why would I prefer 3reen to other e-commerce platforms? </p>
                            {dropDown}
                        </div>
                        {/* { qTagBox } */}
                    </div>
                    <div className="Q-tagline">
                        <div className="flex-box justify-btw">
                            <p>Q: Why would I prefer 3reen to other e-commerce platforms? </p>
                            {dropDown}
                        </div>
                        {/* { qTagBox } */}
                    </div>
                    <div className="Q-tagline">
                        <div className="flex-box justify-btw">
                            <p>Q: Why would I prefer 3reen to other e-commerce platforms? </p>
                            {dropDown}
                        </div>
                        {/* { qTagBox } */}
                    </div>
                </div>
                <Footer>
                    <div>
                        <div className="footer-link">Contact</div>
                        <div>
                            <a href="tel:+234">
                                <img src={tel} alt="telphone" className="tel" />
                            </a>
                        </div>
                    </div>
                    <div>
                        <div className="footer-link">Sitemap</div>
                        <div className="footer-link-nav">
                            <div>
                                <a href="/">Online Shop</a>
                            </div>
                            <div>
                                <a href="/">Sell on 3reen</a>
                            </div>
                            <div>
                                <a href="/">About us</a>
                            </div>
                            <div>
                                <a href="/">My account</a>
                            </div>
                            <div>
                                <a href="/">Shopping cart</a>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="footer-link">Payment method</div>
                        <div className="flutter">
                            <a href="https://flutterwave.com">
                                <img src={flutterIcon} alt="flutter-icon" />
                            </a>
                        </div>
                    </div>
                    <div>
                        <div className="footer-link">Social media</div>
                        <div className="social-media">
                            <div>
                                <img src={logo1} alt="treen_logo" />
                            </div>
                            <div className="social-handles">
                                <a href="https://www.youtube.com">
                                    <img src={youtubeIcon} alt="youtube-logo" />
                                </a>
                                <a href="https://www.facebook.com">
                                    <img src={facebkIcon} alt="youtube-logo" />
                                </a>
                                <a href="https:www.twiter.com">
                                    <img src={twitterIcon} alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                </Footer>
            </AboutWrap>
        </>
    );
};
