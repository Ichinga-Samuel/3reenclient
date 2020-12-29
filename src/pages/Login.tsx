import * as React from 'react';
import Link from 'next/link';
//import styles from 'styled-components';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: '',
        };
        this.userInput = this.userInput.bind(this);
        this.passInput = this.passInput.bind(this);
    }
    userInput(event) {
        this.setState({
            userName: event.target.value,
        });
    }
    passInput(event) {
        this.setState({
            password: event.target.value,
        });
    }
    render() {
        return (
            <div className="wrap">
                <h1>CUSTOMER LOGIN</h1>
                <div id="form-section">
                    <div id="form-cover">
                        <h1>Log In</h1>
                        <p>Login into your account</p>
                        <form action="POST">
                            <div className="L-I-arrange">
                                <label htmlFor="username">
                                    Username
                                    <input
                                        type="text"
                                        name="Username"
                                        onChange={this.userInput}
                                        className="input L-input"
                                        id="username"
                                    />
                                </label>
                            </div>
                            <div className="L-I-arrange">
                                <label htmlFor="password">
                                    Password
                                    <input type="password" className="input  L-input" name="password" id="password" />
                                </label>
                            </div>
                            <div className="align-submit">
                                <Link href="forgotPassword">
                                    <a>forgot password?</a>
                                </Link>
                                <input
                                    type="submit"
                                    name="submit"
                                    onChange={this.passInput}
                                    id="submit"
                                    className="btn"
                                    value="Log in"
                                />
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

export default Login;
