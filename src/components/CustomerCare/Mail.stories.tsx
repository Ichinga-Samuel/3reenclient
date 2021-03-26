/* eslint-disable prettier/prettier */
import React from 'react';
import { Header } from './Heading.stories';
import { EmailContainer } from './styled/EmailStyled';
import Arror from './Icons/left-arrow.svg';
import LinkTo from '@storybook/addon-links/react';
import telImg from './images/telephone.svg';
import { BannerContainer } from './styled/ContactStyled';

export const EmailPage = () => {
    return (
        <>
            <Header />
            <EmailContainer>
                <LinkTo story="Home">
                    <img src={Arror} alt="" className="left-arror" />
                </LinkTo>
                <img src={telImg} alt="telephone" />
                <div className="mail-box">
                    <h1 className="mail-title">Send A Mail</h1>
                </div>
                <div className="mail-text-box">
                    <textarea name="mail" id=""></textarea>
                    <a href="mailto:">
                        <button>Send</button>
                    </a>
                </div>
            </EmailContainer>
        </>
    );
};

export const Home = () => {
    return (
        <>
            <Header />
            <BannerContainer>
                <img src={telImg} alt="banner-img" />
                <div className="banner-title">Having any challenge?</div>
                <div className="reach-out">
                    <div className="client-call">
                        <a href="tel:">
                            Call Us <br /> +234-333-333-333
                        </a>
                    </div>
                    <div className="or">OR</div>
                    <LinkTo story="Mail">
                        <div className="client-email">Send Email</div>
                    </LinkTo>
                </div>
            </BannerContainer>
        </>
    );
};
