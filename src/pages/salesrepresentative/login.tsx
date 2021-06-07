import React from 'react';
import Header from '../../components/SalesRep/Header/Header';
import { FormStyled } from '../../components/SalesRep/form.styled';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { apiUrl } from '../../components/SalesRep/lib/auth';
import axios from 'axios';

const Login = () => {
    const route = useRouter();
    const [errMsg, setErrMsg] = useState('');
    const [loginFields, setLoginFields] = useState({
        email: '',
        password: ''
    });

    const loginSales = async (email, password) => {
        try {
            const { data } = await axios.post(`${apiUrl}users/login`, {email, password });
    
            console.log(data);
            if(data.token) {
                let userToken = data.token;
                let userId = data.user._id;
                localStorage.setItem('userToken', userToken)
                localStorage.setItem('userid', userId)
                route.push(`/salesrepresentative/usermonitor`)
            }
        } catch(err) {
            console.log(`Error: ${err}`);
            setErrMsg(`Error: invalid email or password`)
            
        }
    }

    const handleChange = (evt: any) => {
        setLoginFields({
            ...loginFields,
            [evt.target.name]: evt.target.value
        })
    };

    const loginSubmit = (evt: any) => {
        const { email, password } = loginFields;
        evt.preventDefault();
        loginSales(email, password);
    }

    return (
        <FormStyled>
            <Header />
            <div className="form container">
                <h1>SALES RESPRESENTATIVE</h1>
                <div className="form-card card col-lg-4 col-md-6">
                    <form onSubmit={loginSubmit}>
                        <div className="form-body p-5">
                            <h2>Log in</h2>
                            <h3>Login into your account</h3>

                            <div className="input mt-4">
                                <label htmlFor="email">Email Address</label>
                                <input id="my-input" className="" type="Email" name="email" onChange={handleChange} required/>
                            </div>

                            <div className="input mt-4">
                                <label htmlFor="email">Password</label>
                                <input id="psw" className="" type="password" name="password" onChange={handleChange} required/>
                            </div>

                            <p>{ errMsg }</p>
                            <button className="form-button mt-5" type="submit">LOG IN</button>

                            <p className="forget-password">
                                <Link href="/salesrepresentative/passwordreset">Forget Password ? </Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </FormStyled>
    );
};

export default Login;
