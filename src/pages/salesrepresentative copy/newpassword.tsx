import { FormStyled } from './form.styled';

import Header from './Header/Header';
import Link from 'next/link';

const Register = () => {
    return (
        <FormStyled>
            <Header />
            <div className="form container">
                <div className="logo">
                    <Link href="/">
                        <img src="/img/logo.svg" alt="3reenshop logo" />
                    </Link>
                </div>
                <div className="form-card card col-lg-5 col-md-6">
                    <form>
                        <div className="card-body p-5">
                            <h2 className="text-center ">ENTER NEW PASSWORD</h2>
                            <h3 className="text-center mt-5">Create and confirm your new passowrd</h3>

                            <div className="input mt-4">
                                <label htmlFor="psw">New Password</label>

                                <input id="my-input" className="" type="password" />
                            </div>

                            <div className="input mt-4">
                                <label htmlFor="psw">Confirm Password</label>

                                <input id="my-input" className="" type="password" />
                            </div>
                            <button className="password-reset-button form-button mt-5"> SEND CODE</button>
                        </div>
                    </form>
                </div>
            </div>
        </FormStyled>
    );
};

export default Register;
