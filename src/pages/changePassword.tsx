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
            <div className="wrap-change-p">
                <div id="form-cover">
                    <h1>ENTER NEW PASSWORD</h1>
                    <p>Create and confirm your new password</p>
                    <form action="POST">
                        <label htmlFor="newpass">
                            NEW PASSWORD <input type="password" name="newPass" className="C-input input" id="newPass" />
                        </label>
                        <label htmlFor="confrimpass">
                            CONFIRM PASSWORD
                            <input type="password" className="C-input input" name="confirm" id="password" />
                        </label>

                        <input type="submit" name="submit" id="submit" value="save password" />
                    </form>
                </div>
            </div>
        );
    }
}

export default ChangePassword;
