import { FormStyled } from '../../components/QualityAssusrance/form.styled';
import Header from '../../components/QualityAssusrance/Header/Header';
import Link from 'next/link';

const Register = () => {
    return (
        <FormStyled>
            <Header />
            <div className="form container">
                <h1>QUALITY AND ASSURANCE PERSONNEL</h1>
                <div className="form-card card col-lg-7 col-md-6">
                    <form>
                        <div className="card-body p-5">
                            <h2>Register</h2>
                            <h3>Fill in your Information Below</h3>
                            <div className="row mt-4">
                                <div className="col-lg-6 col-sm-12">
                                    <label htmlFor="fullname">Full Name</label>
                                    <input className="" type="text" />
                                </div>

                                <div className="col-lg-6 col-sm-12">
                                    <label htmlFor="email">Email Address</label>
                                    <input className="" type="Email" />
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col-lg-6 col-md-12">
                                    <label htmlFor="password">Password</label>
                                    <input type="password" />
                                </div>

                                <div className="col-lg-6 col-md-12">
                                    <label htmlFor="email">Re-Enter Password</label>
                                    <input type="Email" />
                                </div>
                            </div>

                            <div className="form-check form-check-inline mt-5">
                                <input
                                    id="my-input"
                                    className="form-check-input"
                                    type="checkbox"
                                    name=""
                                    value="true"
                                />
                                <label htmlFor="my-input" className="form-check-label">
                                    I accept Terms and Conditions in privancy policy
                                </label>
                            </div>
                            <button className="form-button mt-5 col-lg-8">Register</button>
                            <p className="forget-password">
                                Already have an account ?<Link href="/qualityandassurance/login">Log in</Link> .
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </FormStyled>
    );
};

export default Register;
