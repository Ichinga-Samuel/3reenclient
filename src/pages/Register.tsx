import * as React from 'react';
//import Link from 'next/link';

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
                <h1>CUSTOMER REGISTRATION</h1>
                <div id="form-section">
                    <div id="reg-f-cover">
                        <h1>REGISTER</h1>
                        <p>Fill up informations below</p>
                        <form action="POST">
                            <div className="input-c">
                                <label htmlFor="fullname">
                                    FULL NAME
                                    <input type="text" className="regInput input" name="fullname" id="fullname" />
                                </label>
                            </div>
                            <div className="input-c">
                                <label htmlFor="email">
                                    EMAIL ADDRESS{' '}
                                    <input type="email" className="regInput input" name="email" id="email" />
                                </label>
                            </div>

                            <div className="input-c">
                                <label htmlFor="mobile">
                                    PASSWORD
                                    <input type="number" className="regInput input" name="Username" id="mobile" />
                                </label>
                            </div>
                            <div className="input-c">
                                <label htmlFor="pass">
                                    RE-ENTER PASSWORD
                                    <input type="password" className="regInput input" name="password" id="pass" />
                                </label>
                            </div>
                            <label htmlFor="terms">
                                <input type="checkbox" className="" name="terms" id="terms" /> I accept terms and
                                conditions in private policy
                            </label>
                            <div id="align-R-submit">
                                <input type="submit" name="submit" id="submit" value="REGISTER" />
                            </div>
                        </form>
                        <div id="social">
                            <button className="btn">
                                <img src="" alt="" />
                                LOG IN USING GOOGLE
                            </button>
                            <button className="btn">
                                <img src="" alt="" />
                                LOG IN USING FACEBOOK
                            </button>
                            <button className="btn">
                                <img src="" alt="" />
                                LOG IN USING TWITTER
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Register;
