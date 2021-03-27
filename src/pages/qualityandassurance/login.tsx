import React from 'react';
import Header from '../../components/QualityAssusrance/Header/Header';
import { FormStyled } from '../../components/QualityAssusrance/form.styled';
import Link from 'next/link';

const Login = () => {
    return (
        <FormStyled>
            <Header />
            <div className="form container">
                <h1>QUALITY AND ASSURANCE PERSONNEL</h1>

                <div className="form-card card col-lg-4 col-md-6">
                    <form>
                        <div className="form-body p-5">
                            <h2>Log in</h2>
                            <h3>Login into your account</h3>

                            <div className="input mt-4">
                                <label htmlFor="email">Email Address</label>
                                <input id="my-input" className="" type="Email" />
                            </div>

                            <div className="input mt-4">
                                <label htmlFor="email">Password</label>
                                <input id="psw" className="" type="password" />
                            </div>

                            <button className="form-button mt-5">LOG IN</button>

                            <p className="forget-password">
                                <Link href="/qualityandassurance/passwordreset">Forget Password ? </Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </FormStyled>
    );
};

export default Login;
