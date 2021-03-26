import React from 'react';
import { Header } from './Heading.stories';
import { ProfileWrap } from './styled/CustomerProfileStyled';
import editPen from './Icons/Edit-pen.svg';

export default {
    title: 'CustomerCare',
};

export const Profile = () => {
    return (
        <>
            <Header />
            <ProfileWrap>
                <div className="profile-title">CUSTOMER PROFILE</div>
                <div className="profile-box">
                    <div className="edit-text">Edit your informations below</div>
                    <div className="upload-pic">
                        <div className="pic-upload"></div>
                        <div className="pic-details">
                            <p className="primary-color">Hi,</p>
                            <p>Jack Helmet</p>
                            <div className="upload">Upload picture</div>
                        </div>
                    </div>
                    <div className="user-form">
                        <div className="mgtop15">
                            <label htmlFor="fullname">FULL NAME</label>
                            <input type="text" name="name" id="name" placeholder="JOHN DOE" />
                            <button type="reset">
                                <img src={editPen} alt="" />
                            </button>
                        </div>
                        <div className="mgtop15">
                            <label htmlFor="email">EMAIL ADDRESS</label>
                            <input type="email" name="email" id="email" placeholder="johndoe@gmail.com" />
                            <span className="opt">
                                <button type="submit" className="col-green">
                                    (email address comfirmed,
                                </button>
                                <button type="submit" className="primary-color">
                                    change email address)
                                </button>
                            </span>
                        </div>
                        <div className="mgtop15">
                            <label htmlFor="fullname">PASSWORD</label>
                            <input type="text" name="name" id="name" placeholder="*******" />
                            <button type="reset">
                                <img src={editPen} alt="" />
                            </button>
                        </div>
                        <div className="mgtop15 flex-box">
                            <label htmlFor="contact">CONTACT ADDRESS</label>
                            <input
                                type="text"
                                name="contact"
                                id="contact"
                                placeholder="STREET ADDRESS"
                                className="email"
                            />
                            <input
                                type="text"
                                name="contact"
                                id="contact"
                                placeholder="STREET ADDRESS"
                                className="city"
                            />
                            <div className="mglf158 mgtop15">
                                <input
                                    type="text"
                                    name="contact"
                                    id="contact"
                                    placeholder="STREET ADDRESS"
                                    className="city"
                                />
                                <input
                                    type="text"
                                    name="contact"
                                    id="contact"
                                    placeholder="STREET ADDRESS"
                                    className="city"
                                />
                                <input
                                    type="text"
                                    name="contact"
                                    id="contact"
                                    placeholder="STREET ADDRESS"
                                    className="city"
                                />
                            </div>
                        </div>
                        <div className="mgtop15">
                            <label htmlFor="fullname">PHONE NUMBER (HOME)</label>
                            <input type="text" name="name" id="name" placeholder="+234 802 345 6789" />
                            <button type="reset">
                                <img src={editPen} alt="" />
                            </button>
                        </div>
                        <div className="mgtop15">
                            <label htmlFor="fullname">PHONE NUMBER (WORK)</label>
                            <input type="text" name="name" id="name" placeholder="+234 802 345 6789" />
                            <button type="reset">
                                <img src={editPen} alt="" />
                            </button>
                        </div>
                    </div>
                    <button type="submit" className="second">
                        SAVE
                    </button>
                </div>
            </ProfileWrap>
        </>
    );
};
