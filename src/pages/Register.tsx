import * as React from 'react';
import Link from 'next/link';

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fullname: '',
            email: '',
            passwordInp: '',
            passwordConfirmInp: '',
        };
        this.fullNameInp = this.fullNameInp.bind(this);
        this.emailInp = this.emailInp.bind(this);
        this.passwordConfirmInp = this.passwordConfirmInp.bind(this);
        this.passwordInp = this.passwordInp.bind(this);
    }
    fullNameInp(event) {
        this.setState({
            fullname: event.target.value,
        });
    }
    emailInp(event) {
        this.setState({
            email: event.target.value,
        });
    }
    passwordInp(event) {
        this.setState({
            password: event.target.value,
        });
    }
    passwordConfirmInp(event) {
        this.setState({
            passwordConfirmInp: event.target.value,
        });
    }
    render() {
        return (
            <div className="wrap">
                <h1 className="title">CUSTOMER REGISTRATION</h1>
                <div className="form-section-r">
                    <div id="reg-f-cover">
                        <h1 className="action">REGISTER</h1>
                        <p>Fill up informations below</p>
                        <form action="POST">
                            <div className="input-c">
                                <label htmlFor="fullname">
                                    FULL NAME
                                    <input type="text" className="regInput input" name="fullname" id="fullname" />
                                </label>

                                <label htmlFor="email">
                                    EMAIL ADDRESS{' '}
                                    <input type="email" className="regInput input" name="email" id="email" />
                                </label>

                                <label htmlFor="mobile">
                                    PASSWORD
                                    <input type="password" className="regInput input" name="Username" id="mobile" />
                                </label>

                                <label htmlFor="pass">
                                    RE-ENTER PASSWORD
                                    <input type="password" className="regInput input" name="password" id="pass" />
                                </label>
                            </div>
                            <label htmlFor="terms" id="terms-l">
                                <input type="checkbox" className="" name="terms" id="terms" /> I accept terms and
                                conditions in private policy
                            </label>
                            <div id="align-R-submit">
                                <input type="submit" name="submit" id="submit-r" value="REGISTER" />
                                <Link href="Login">
                                    <a>Already have an account?Login</a>
                                </Link>
                            </div>
                        </form>
                        <div className="social">
                            <button className="btn google">
                                <span>
                                    <img src="./img/googleI.png" alt="" />
                                    LOG IN USING GOOGLE
                                </span>
                            </button>
                            <button className="btn facebook">
                                <span>
                                    {' '}
                                    <img src="./img/facebookI.png" alt="" />
                                    LOG IN USING FACEBOOK
                                </span>
                            </button>
                            <button className="btn twitter">
                                <span>
                                    <img src="./img/twitterI.png" alt="" />
                                    LOG IN USING TWITTER
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Register;
