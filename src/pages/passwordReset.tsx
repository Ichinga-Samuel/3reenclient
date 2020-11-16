import * as React from 'react';

class ResetCode extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            val1: '',
            val2: '',
            val3: '',
            val4: '',
        };
    }
    render() {
        const background = {
            backgroundImage: 'url("./img/feeling.png")',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
        };
        return (
            <div id="wrap-code">
                <div id="img" style={background}></div>
                <div id="overlay">
                    <div id="img-cover">
                        <img id="img-over" src="./img/topLogo.png" alt="overlay logo" />
                    </div>
                    <div id="C-cover">
                        <h1>Enter reset Code</h1>
                        <div id="input-cover">
                            <input className="code" type="tel" id="val1" />
                            <input className="code" type="tel" id="val2" />
                            <input className="code" type="tel" id="val3" />
                            <input className="code" type="tel" id="val4" />
                        </div>
                        <span>
                            <button>Proceed</button> <a>Resend code</a>
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}

export default ResetCode;
