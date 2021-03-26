/* eslint-disable prettier/prettier */
import React from 'react';
import LinkTo from '@storybook/addon-links/react';
import telImg from './images/telephone.svg';
import { BannerContainer } from './styled/ContactStyled';
import { Header } from './Heading.stories';
import { EmailPage } from './Mail.stories';

export default {
    title: 'CustomerCare',
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

export const Mail = () => {
    return (
        <>
            <EmailPage />
        </>
    );
};
