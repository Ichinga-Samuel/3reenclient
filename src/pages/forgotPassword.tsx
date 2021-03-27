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
                    <img className="img-over" src="./img/LandN.svg" alt="overlay logo" />
                </div>
                <div className="form-section">
                    <h1 className="action-f">RESET PASSWORD</h1>
                    <p>Please enter your registered email address</p>
                    <form action="POST" className="form">
                        <label htmlFor="email">
                            <input
                                type="email"
                                id="email"
                                className="F-input input"
                                name="reset"
                                placeholder="3reen@gmail.com"
                            />
                        </label>
                        <input type="submit" className="submit" value="SEND CODE" />
                    </form>
                </div>
            </div>
        );
    }
}

export default Reset;
