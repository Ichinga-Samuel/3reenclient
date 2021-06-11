import { FormStyled } from '../../components/QualityAssusrance-Bk/form.styled';

import Header from '../../components/QualityAssusrance-Bk/Header/Header';
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
                            <h2 className="text-center ">ENTER RESET CODE</h2>

                            <div className="passowrd-reset">
                                <div className="input mt-4">
                                    <input id="reset" className="reset" type="text" maxLength="1" />
                                </div>

                                <div className="input mt-4">
                                    <input id="reset" className="reset" type="text" maxLength="1" />
                                </div>

                                <div className="input mt-4">
                                    <input id="reset" className="reset" type="text" maxLength="1" />
                                </div>

                                <div className="input mt-4">
                                    <input id="reset" className="reset" type="text" maxLength="1" />
                                </div>
                            </div>

                            <button className="password-reset-button form-button mt-5"> CONTINUE</button>
                        </div>
                    </form>
                </div>
            </div>
        </FormStyled>
    );
};

export default Register;
