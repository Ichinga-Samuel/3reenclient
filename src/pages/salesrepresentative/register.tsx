import { LoginStyled } from './login.styled';

const Register = () => {
    return (
        <LoginStyled>
            {/* // <Header /> */}
            <div className="login container">
                <h1>SALES RESPRESENTATIVE</h1>
                <div className="login-card card col-lg-6 col-md-6">
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
                            <button className="login-button mt-5 col-lg-8">Register</button>
                            <p className="forget-password">Already have an account ? Log in .</p>
                        </div>
                    </form>
                </div>
            </div>
        </LoginStyled>
    );
};

export default Register;
