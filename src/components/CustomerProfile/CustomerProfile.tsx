import React from 'react';
import Header from './Heading';
import { ProfileWrap } from './styled/CustomerProfileStyled';
import editPen from './Icons/Edit-pen.svg';
import axios from "axios"
import {useForm } from "react-hook-form"

const Profile = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    
    const Submit = async (data) =>{
        console.log("data", data)
        
    }

    return (

        <>
            <Header />
            <ProfileWrap>
                <div className="profile-title">CUSTOMER PROFILE</div>
                <form onSubmit={Submit} className="profile-box">
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
                            <input 
                                type="text" 
                                name="name"
                                id="name" 
                                placeholder="Full Name"
                                {...register('fullName', { required: true })} 
                            />
                            {errors.fullName && <span className="error">Full Name is required</span>}
                    
                            <button type="reset">
                                <img src={editPen} alt="" />
                            </button>
                        </div>
                        <div className="mgtop15">
                            <label htmlFor="email">EMAIL ADDRESS</label>
                            <input 
                                type="email" 
                                name="email" 
                                id="email"
                                placeholder="johndoe@gmail.com"
                                {...register('email', { required: true, pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g, })}
                            />
                            {errors.email && <span className="error">enter a valid email</span>}
                            
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
                            <input 
                                type="text"
                                name="password"
                                id="password"
                                placeholder="*******" 
                                    {...register('password', { required: true,minLength: {
                                        value: 8,
                                        message: 'Password must have at least 8 characters',
                                    },
                                })}
                            />
                            {errors.password && (
                                <span className="error">Password must have at least 8 characters</span>
                            )}
                            <button type="reset">
                                <img src={editPen} alt="" />
                            </button>
                        </div>
                        <div className="mgtop15 flex-box">
                            <label htmlFor="contact">CONTACT ADDRESS</label>
                            <input
                                type="text"
                                name="streetAdd"
                                id="streetAdd"
                                placeholder="STREET ADDRESS"
                                className="email"
                                {...register('streetAdd', { required: true })} 
                            />
                            {errors.streetAdd && <span className="error">Full Name is required</span>}
                            
                            <input
                                type="text"
                                name="city"
                                id="city"
                                placeholder="CITY"
                                className="city"
                                {...register('city', { required: true })} 
                                />
                                {errors.city && <span className="error">Full Name is required</span>}
                            <div className="mglf158 mgtop15">
                                <input
                                    type="text"
                                    name="state"
                                    id="state"
                                    placeholder="State"
                                    className="city"
                                    {...register('state', { required: true })} 
                                />
                                {errors.state && <span className="error">Full Name is required</span>}
                                <input
                                    type="text"
                                    name="country"
                                    id="country"
                                    placeholder="Country"
                                    className="city"
                                    {...register('country', { required: true })} 
                                />
                                {errors.country && <span className="error">Full Name is required</span>}
                                <input
                                    type="text"
                                    name="postalCode"
                                    id="postalCode"
                                    placeholder="Postal Code"
                                    className="city"
                                    {...register('code', { required: true })}
                                />
                                {errors.code && <span className="error">Full Name is required</span>}
                            </div>
                        </div>
                        <div className="mgtop15">
                            <label htmlFor="fullname">PHONE NUMBER (HOME)</label>
                            <input
                                type="number"
                                name="num1"
                                id="num1"
                                placeholder="+234 802 345 6789"
                                {...register('num1', { required: true })} 
                            />
                            {errors.num1 && <span className="error">Full Name is required</span>}
                            <button type="reset">
                                <img src={editPen} alt="" />
                            </button>
                        </div>
                        <div className="mgtop15">
                            <label htmlFor="fullname">PHONE NUMBER (WORK)</label>
                            <input 
                            type="text"
                            name="num2" 
                            id="num2" 
                            placeholder="+234 802 345 6789" 
                            {...register('num2', { required: true })} 
                            />
                            {errors.num2 && <span className="error">Full Name is required</span>}
                            <button type="reset">
                                <img src={editPen} alt="" />
                            </button>
                        </div>
                    </div>
                    <button 
                        type="submit"
                        className="second"
                        onClick={handleSubmit(Submit)}
                    >
                        SAVE
                    </button>
                </form>
            </ProfileWrap>
        </>
    );
};


export default Profile