import * as React from 'react';

class Reset extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rEmail: '',
        };
    }
    render() {
        const background = {
            backgroundImage: 'url("./img/feeling.png")',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
        };
        return (
            <div id="wrap-forgot-p">
                <div id="image" style={background}></div>
                <div id="overlay">
                    <div id="img-cover">
                        <img id="img-over" src="./img/topLogo.png" alt="" />
                    </div>
                    <div id="cover-forgot-p">
                        <h1>Reset password</h1>
                        <p>Please enter your registered email address or phone number</p>
                        <form action="POST">
                            <input type="text" className="F-input input" name="reset" placeholder="3reen@gmail.com" />
                            <input type="submit" value="send code" />
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Reset;
