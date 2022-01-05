import React from 'react';
import { ProfileWrap} from './styled/CustomerProfileStyled';
import editPen from './Icons/Edit-pen.svg';
//import axios from "axios"
import { useForm } from 'react-hook-form';
import UserWebLayout from '@/components/UserLayout/UserWebLayout';

const Profile = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const Submit = async (data) => {
        console.log('data', data);
    };

    return (
        <>
            <UserWebLayout webtitle="My Account">
                <ProfileWrap>
                    <div className="profile-title">CUSTOMER PROFILE</div>
                    <form onSubmit={Submit} className="profile-box">
                        <div className="edit-text">Edit your informations below</div>
                        <div className="user-form">
                            {/* <div className="mgtop15 info"> */}
                                {/* <label htmlFor="fullname">FULL NAME</label><br/> */}
                                <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Full Name"
                                {...register('fullName', { required: true })}/> 
                                {errors.fullName && <span className="error">Full Name Required</span>}

                                <button type="reset">
                                    <img src={editPen} alt="" />
                                </button>
                            {/* </div> */}
                            {/* <div className="mgtop15 info"> */}
                                {/* <label htmlFor="email">EMAIL ADDRESS</label><br/> */}
                                <input
                                    className='input'
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Email"
                                    {...register('email', {
                                        required: true,
                                        pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                                    })}
                                />{errors.email && <span className="error">Enter valid email</span>}

                                {/* <span className="opt">
                                    <button type="submit" className="col-green">
                                        (email address comfirmed,
                                    </button>
                                    <button type="submit" className="primary-color">
                                        change email address)
                                    </button>
                                </span> */}
                            {/* </div> */}
                            {/* <div className="mgtop15 info"> */}
                                {/* <label htmlFor="fullname">PASSWORD</label><br/> */}
                                <input
                                    type="text"
                                    name="password"
                                    id="password"
                                    placeholder="Password"
                                    {...register('password', {
                                        required: true,
                                        minLength: {
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
                            {/* </div> */}
                            <div className="mgtop15 ">
                                <label htmlFor="contact">CONTACT ADDRESS</label><br/>
                                <input
                                    type="text"
                                    name="streetAdd"
                                    id="streetAdd"
                                    placeholder="Street Address"
                                    className="email"
                                    {...register('streetAdd', { required: true })}
                                />
                                {errors.streetAdd && <span className="error">Address Required</span>}

                                <input
                                    type="text"
                                    name="city"
                                    id="city"
                                    placeholder="City"
                                    className="city"
                                    {...register('city', { required: true })}
                                />
                                {errors.city && <span className="error"> City Required</span>}
                                <div >
                                    <input
                                        
                                        type="text"
                                        name="state"
                                        id="state"
                                        placeholder="State"
                                        className="city mgtop15"
                                        {...register('state', { required: true })}
                                    />
                                    {errors.state && <span className="error">State Required</span>}
                                    <input
                                        type="text"
                                        name="country"
                                        id="country"
                                        placeholder="Country"
                                        className="city mgtop15"
                                        {...register('country', { required: true })}
                                    />
                                    {errors.country && <span className="error">Country Required</span>}
                                    <input
                                        type="text"
                                        name="postalCode"
                                        id="postalCode"
                                        placeholder="Postal Code"
                                        className="city mgtop15"
                                        {...register('code', { required: true })}
                                    />
                                    {errors.code && <span className="error">Postal Code Required</span>}
                                </div>
                            </div>
                            <div className="mgtop15">
                                <label htmlFor="fullname">PHONE NUMBER</label><br/>
                                <input
                                    className="mgtop15"
                                    type="number"
                                    name="num1"
                                    id="num1"
                                    placeholder="Phone Number (Home)"
                                    {...register('num1', { required: true })}
                                />
                                {errors.num1 && <span className="error">Home Phone Required</span>}
                                <button type="reset">
                                    <img src={editPen} alt="" />
                                </button>
                            
                                <input
                                    type="text"
                                    name="num2"
                                    id="num2"
                                    placeholder="Phone Number (Work)"
                                    {...register('num2', { required: true })}
                                />
                                {errors.num2 && <span className="error">Work Phone Required Required</span>}
                                <button type="reset">
                                    <img src={editPen} alt="" />
                                </button>
                            </div>
                        </div>
                        <button type="submit" className="second" onClick={handleSubmit(Submit)}>
                            SAVE
                        </button>
                    </form>
                </ProfileWrap>
            </UserWebLayout>
        </>
    );
};

export default Profile;
