import * as React from 'react';
import Header from "../components/Header/Header";
const BackgroundChange = () => {
    return (
        <div id="logo-section-R">
            <div id="logo-wrap-R">
                <img id="log-img-R" src="./img/feeling.png" alt="logo" />
            </div>
        </div>
    );
};

class ChangePassword extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            password: '',
        };
    }
    render() {
        return (
            <div className="wrap-change-p">
                <div id="form-cover">
                    <h1>Enter new password</h1>
                    <p>Create and confirm your new password</p>
                    <form action="POST">
                        <label htmlFor="newpass">
                            {' '}
                            password <input type="password" name="newPass" className="C-input input" id="newPass" />
                        </label>
                        <label htmlFor="confrimpass">
                            confirm password{' '}
                            <input type="password" className="C-input input" name="confirm" id="password" />
                        </label>

                        <input type="submit" name="submit" id="submit" value="save password" />
                    </form>
                </div>
                <BackgroundChange />
            </div>
        );
    }
}

export default ChangePassword;
