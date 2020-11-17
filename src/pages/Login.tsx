import * as React from 'react';
import Link from 'next/link';
//import styles from 'styled-components';

const Background = () => {
    return (
        <div id="logo-section">
            <div id="logo-wrap">
                <img id="log-img" src="./img/logoLog.png" alt="logo" />
                <h1 id="logo-text">3REEN</h1>
            </div>
        </div>
    );
};

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
                <div id="form-section">
                    <div id="form-cover">
                        <h1>
                            Login into <br /> your account
                        </h1>
                        <form action="POST">
                            <input
                                type="text"
                                name="Username"
                                onChange={this.userInput}
                                className="input L-input"
                                id="username"
                                placeholder="Username"
                            />
                            <input
                                type="password"
                                className="input  L-input"
                                name="password"
                                id="password"
                                placeholder="Password"
                            />
                            <div className="align-submit">
                                <Link href="forgotPassword">
                                    <a>forgot password?</a>
                                </Link>
                                <input
                                    type="submit"
                                    name="submit"
                                    onChange={this.passInput}
                                    id="submit"
                                    value="Log in"
                                />
                            </div>
                        </form>
                        <div id="social">
                            <div>
                                <p className="create-account-link">Login with</p>
                                <div id="socials-account">
                                    <a href="www.facebook.com">
                                        <img src="./img/fb-rounded-brand-white-64.png" alt="facebook icon" />
                                    </a>
                                    <a href="www.gmail.com">
                                        <img src="./img/gplus-rounded-brand-white-64.png" alt="gmail icon" />
                                    </a>
                                    <a href="www.twitter.com">
                                        <img src="./img/twitter-rounded-brand-white-64.png" alt="twitter icon" />
                                    </a>
                                </div>
                                <Link href="Register">
                                    <a className="create-account-link">create an account</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <Background />
            </div>
        );
    }
}

export default Login;
