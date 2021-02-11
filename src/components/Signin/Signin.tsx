import React, {useState} from 'react';
import { SigninStyled } from './Signin.styled';
import { LoginForm } from './Signin.styled';
import axios from 'axios';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Signin = () => {
    const[ email, setEmail] = useState("")
    const[ password, setPassword] = useState("")

    const router = useRouter();





    const login =e =>{
        e.preventDefault();
          axios.post("backend url", { email, password })
          .then((res) =>{
              console.log(res)
              router.push("/");
              localStorage.setItem('user', res.data)
          })
          .catch((e) =>{
              alert(e.message)
          })
    }

    return (
        <SigninStyled >
            <div className="intro">
                <p>
                    SIGN IN TO START <span>SELLING ON 3REEN</span>
                </p>
            </div>    
            <LoginForm  onSubmit = {login}>
                <div className="logo-div">
                   <img src="/img/vendor-logo.svg" alt="vendor-logo"/>
                </div>
               
                <div className="header-div">
                   <h4>Log in</h4>
                   <p>
                       Log in to your account to start selling
                  </p>
                </div>
                <div className="input-group">
                    <label htmlFor="email">EMAIL ADDRESS</label>
                    <input type="email" id="email" onChange = {(e) => setEmail(e.target.value)} />
                </div>
                <div className="input-group">
                    <label htmlFor="password">PASSWORD</label>
                    <input type="password" id="password" onChange = {(e) => setPassword(e.target.value)} />
                </div>
                <button>LOG IN</button>
                <Link href=""><a>forgot password?</a></Link>
                <p>
                    Don't have an account? <Link href=""><a>REGSTER NOW</a></Link>
                </p>
            </LoginForm> 
        </SigninStyled >
    )
}

export default Signin
