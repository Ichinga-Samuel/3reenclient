// import React from 'react';
// import Header from '../Header/Header';
import { LoginStyled } from './login.styled';

const Login = () => {
    return (
        <LoginStyled>
            {/* // <Header /> */}
            <div className="login container">
                <h1>SALES RESPRESENTATIVE</h1>
                <div className="login-card card col-lg-4 col-md-6">
                    <form>
                        <div className="card-body p-5">
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

                            <button className="login-button mt-5">LOG IN</button>

                            <p className="forget-password">Forget Password ?</p>
                        </div>
                    </form>
                </div>
            </div>
        </LoginStyled>
    );
};

export default Login;
