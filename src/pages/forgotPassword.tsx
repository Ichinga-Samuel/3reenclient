import * as React from 'react';

class Reset extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rEmail: '',
        };
    }
    render() {
        return (
            <div className="wrap">
                <div id="img-cover">
                    <img id="img-over" src="./img/topLogo.png" alt="" />
                </div>
                <div id="form-section">
                    <h1>RESET PASSWORD</h1>
                    <p>Please enter your registered email address</p>
                    <form action="POST">
                        <input type="email" className="F-input input" name="reset" placeholder="3reen@gmail.com" />
                        <input type="submit" className="submit" value="SEND CODE" />
                    </form>
                </div>
            </div>
        );
    }
}

export default Reset;
