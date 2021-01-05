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
        return (
            <div className="wrap">
                <div id="img-cover">
                    <img className="img-over" src="./img/LandN.svg" alt="overlay logo" />
                </div>
                <div className="form-section">
                    <h1 className="action-r-c">ENTER RESET CODE</h1>
                    <div id="input-cover">
                        <form method="POST" className="form-r-c">
                            <div className="span">
                                <input className="code" type="tel" id="val1" />
                                <input className="code" type="tel" id="val2" />
                                <input className="code" type="tel" id="val3" />
                                <input className="code" type="tel" id="val4" />
                            </div>
                            <input type="submit" className="submit-r-c" value="CONTINUE" />
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default ResetCode;
