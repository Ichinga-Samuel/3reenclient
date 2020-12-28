// import React from 'react';
import Header from '../Header/Header';
import { TermsStyled } from './Terms.styled';

const Terms = () => {
    return (
        <TermsStyled>
            <Header />
            <div className="Terms">
                <h1>TERMS OF SERVICE AGREEMENT</h1>
                <p>
                    PLEASE READ THE FOLLOWING TERMS OF SERVICE AGREEMENT CAREFULLY. BY ACCESSING OR USING OUR SITES AND
                    OUR SERVICES, YOU HEREBY AGREE TO BE BOUND BY THE TERMS AND ALL TERMS INCORPORATED HEREIN BY
                    REFERENCE. IT IS THE RESPONSIBILITY OF YOU, THE USER, CUSTOMER, OR PROSPECTIVE CUSTOMER TO READ THE
                    TERMS AND CONDITIONS BEFORE PROCEEDING TO USE THIS SITE. IF YOU DO NOT EXPRESSLY AGREE TO ALL OF THE
                    TERMS AND CONDITIONS, THEN PLEASE DO NOT ACCESS OR USE OUR SITES OR OUR SERVICES. THIS TERMS OF
                    SERVICE AGREEMENT IS EFFECTIVE AS OF TIME OF
                </p>
                <p className="mt-5">
                    The following Terms of Service Agreement (the &quot TOS) is a legally binding agreement that shall
                    govern the relationship with our users and others which may interact or interface with 3REEN
                    LIMITED, located at Port-Harcourt, Rivers State and our subsidiaries and affiliates, in association
                    with the use of the 3REEN website, which includes 3reen products (the &quot Site) and its Services,
                    which shall be defined below.
                </p>
                <p> DESCRIPTION OF WEBSITE SERVICES OFFERED </p>
                <p>The Site is 3reen e commerce platform which has the following description:</p>
                <p> Enable users to buy,sell and pay bills of different legal products and services.</p>{' '}
                <p>
                    Any and all visitors to our site shall be deemed as &quot users of the herein contained Services
                    provided for the purpose of this TOS.
                </p>
                <p>
                    The user acknowledges and agrees that the Services provided and made available through our website
                    and applications, which may include some mobile applications and that those applications may be made
                    available on various social media networking sites and numerous other platforms and downloadable
                    programs, are the sole property of 3reen. At its discretion, 3reen may offer additional website
                    Services and/or products, or update, modify or revise any current content and Services, and this
                    Agreement shall apply to any and all additional Services and/or products and any and all updated,
                    modified or revised Services unless otherwise stipulated. 3reen does hereby reserve the right to
                    cancel and cease offering any of the aforementioned Services and/or products. You, as the end user
                    acknowledge, accept and agree that 3reen shall not be held liable for any such updates,
                    modifications, revisions, suspensions or discontinuance of any of our Services and/or products. Your
                    continued use of the Services provided, after such posting of any updates, changes, and/or
                    modifications shall constitute your acceptance of such updates, changes and/or modifications, and as
                    such, frequent review of this Agreement and any and all applicable terms and policies should be made
                    by you to ensure you are aware of all terms and policies currently in effect. Should you not agree
                    to the updated, revised or modified terms, you must stop using the provided Services forthwith.
                </p>
                <div className="acceptanceofterms">
                    <h2 className="text-center">Acceptance of terms</h2>
                </div>
            </div>
        </TermsStyled>
    );
};

export default Terms;
