import { FormStyled } from '../../components/SalesRep/form.styled';

import Header from '../../components/SalesRep/Header/Header';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { apiUrl } from '@/components/SalesRep/lib/auth';

const Register = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState(false);

    const route = useRouter();

    const handleChange = (e) => {
        setEmail(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const passReset = async (email) => {
            try {
                const { data } = await axios.post(`${apiUrl}users/forgotPassword`, {email});
         
                console.log(data);
                if(data.status == 'success') {
                    route.push(`/salesrepresentative/resetcode`)
                }
            } catch (error) {
                console.log(error);
                setError(true);
                
            }
        }
        passReset(email);
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
                    <form onSubmit={handleSubmit}>
                        <div className="card-body p-5">
                            <h2 className="text-center ">RESET PASSWORD</h2>
                            <h3 className="text-center mt-5">
                                Please enter your registered email address or phone number
                            </h3>

                            <div className="input mt-4">
                                <input id="my-input" className="" type="Email" onChange={handleChange} />
                            </div>
                            {
                                error && <div className="text-center mt-2"><p>There is no user with that email</p></div>
                            }
                            <button className="password-reset-button form-button mt-5"> SEND CODE</button>
                        </div>
                    </form>
                </div>
            </div>
        </FormStyled>
    );
};

export default Register;
