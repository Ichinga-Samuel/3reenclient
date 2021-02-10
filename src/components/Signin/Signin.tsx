import React from 'react';
import { SigninStyled } from './Signin.styled';
import { LoginForm } from './Signin.styled';
// import axios from 'axios';
// import { useHistory } from 'react-router-dom'

const Signin = () => {
    // const[ email, setEmail] = useState("")
    // const[ password, setPassword] = useState("")



    // const login =e =>{
    //     e.preventDefault();
    //       axios.post("backend url", { email, password })
    //       .then((res) =>{
    //           console.log(res)
    //           history.push("/");
    //           localStorage.setItem('user', res.data)
    //       })
    //       .catch((e) =>{
    //           alert(e.message)
    //       })
    // }

    return (
        <SigninStyled >
            <div className="intro">
                <p>
                    SIGN IN TO START <span>SELLING ON 3REEN</span>
                </p>
            </div>    
            <LoginForm >
                <img src="/img/vendor-logo.svg" alt="vendor-logo"/>
                <div className="header-div">
                   <h4>Log in</h4>
                   <p>
                       Log in to your account to start selling
                  </p>
                </div>
                <div className="input-group">
                    <label htmlFor="email">EMAIL ADDRESS</label>
                    <input type="email" id="email" />
                </div>
                <div className="input-group">
                    <label htmlFor="password">PASSWORD</label>
                    <input type="password" id="password" />
                </div>
                <button>LOG IN</button>
                <a>forgot password?</a>
                <p>
                    Don't have an account? <a>REGSTER NOW</a>
                </p>
            </LoginForm> 
        </SigninStyled >
    )
}

export default Signin
