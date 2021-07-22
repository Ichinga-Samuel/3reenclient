import * as React from 'react';

class ChangePassword extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            password: '',
        };
    }
    render() {
        return (
            <div className="wrap">
                <div id="img-cover">
                    <img className="img-over" src="./img/LandN.svg" alt="overlay logo" />
                </div>
                <div className="form-section">
                    <h1 className="action-f">ENTER NEW PASSWORD</h1>
                    <p className="p">Create and confirm your new password</p>
                    <form action="POST">
                        <label htmlFor="newpass">
                            NEW PASSWORD <input type="password" name="newPass" className="C-input input" id="newPass" />
                        </label>
                        <label htmlFor="confrimpass">
                            CONFIRM PASSWORD
                            <input type="password" className="C-input input" name="confirm" id="password" />
                        </label>

                        <input type="submit" name="submit" id="submit-c" value="SAVE PASSWORD" />
                    </form>
                </div>
            </div>
        );
    }
}

export default ChangePassword;
