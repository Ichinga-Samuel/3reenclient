import { useState, useEffect, useRef } from 'react';
import { FormStyled } from '../../components/SalesRep/form.styled';

import Header from '../../components/SalesRep/Header/Header';
import Link from 'next/link';
import { useRouter } from 'next/router';
import axios from 'axios';
import { apiUrl } from '@/components/SalesRep/lib/auth';

export const getStaticProps = async() => {
    const { data } = await axios.get(`${apiUrl}users`);
    const allUsers = data.doc
    return {
        props: {
            allUsers
        }
    }
}

const Register = ({ allUsers }) => {
    const route = useRouter();
    const isMountedRef = useRef(true)
    const [codeInput, setCodeInput] = useState([])
    const [confirmCode, setConfirmCode] = useState(false)
    const [msg, setMsg] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setCodeInput([...codeInput, e.target.value]);
    }

    const handleSubmit = (e) => {
        setMsg('');
        setLoading(true);
        e.preventDefault();
        
        // join code input
        const resetCode = codeInput.join("").toString();
        console.log(resetCode);
        console.log(allUsers);

        setTimeout(()=> {
            allUsers.forEach(user => {
                if(user.passwordResetCode && user.passwordResetCode == resetCode) {
                    localStorage.setItem("resetCode", resetCode);
                    setConfirmCode(true)
                    route.push(`/salesrepresentative/newpassword`);
                }
                else {
                    setConfirmCode(false)
                    
                }
            })
            setLoading(false);
            setCodeInput([]);
            setMsg('incorrect code');
        }, 5000)

    }
    return (
        <FormStyled>
            <Header />
            <div className="form container">
                <div className="logo">
                    <Link href="/">
                        <img src="/img/logo.svg" alt="3reenshop logo" />
                    </Link>
                </div>
                <div className="form-card card col-lg-5 col-md-6">
                    <form onSubmit={(e)=>{handleSubmit(e)}} >
                        <div className="card-body p-5">
                            <h2 className="text-center ">ENTER RESET CODE</h2>

                            <div className="passowrd-reset">
                                <div className="input mt-4">
                                    <input id="reset" className="reset" type="text" maxLength="1" onChange={handleChange} />
                                </div>

                                <div className="input mt-4">
                                    <input id="reset" className="reset" type="text" maxLength="1" onChange={handleChange} />
                                </div>

                                <div className="input mt-4">
                                    <input id="reset" className="reset" type="text" maxLength="1" onChange={handleChange} />
                                </div>

                                <div className="input mt-4">
                                    <input id="reset" className="reset" type="text" maxLength="1" onChange={handleChange} />
                                </div>
                            </div>
                            
                            <p>{ msg }</p>
                            <p>{ loading && <span>Authenticating...</span>}</p>
                            <button className="password-reset-button form-button mt-5"> CONTINUE { loading && <span>...</span>}</button>
                        </div>
                    </form>
                </div>
            </div>
        </FormStyled>
    );
};

export default Register;
