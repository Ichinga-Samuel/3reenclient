import { useState } from 'react';
import { FormStyled } from '../../components/SalesRep/form.styled';

import Header from '../../components/SalesRep/Header/Header';
import Link from 'next/link';
import { useRouter } from 'next/router';
import axios from 'axios';
import { apiUrl } from '@/components/SalesRep/lib/auth';

const Register = () => {
    const route = useRouter();
    const [passwords, setPasswords] = useState({
        password: '',
        passwordConfirm: '',
    });
    const [errMsg, setErrMsg] = useState('');

    const resetFunc = async () => {
        try {
            const { data } = await axios.patch(`${apiUrl}users/resetPassword`, passwords);
            console.log(data);

            if (data.status === 'success') {
                route.push(`/salesrepresentative/login`);
            }
        } catch (err) {
            setErrMsg('Something went wrong');
            console.log(err);
        }
    };

    const handleChange = (evt) => {
        const value = evt.target.value;
        setPasswords({
            ...passwords,
            [evt.target.name]: value,
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const { password, passwordConfirm } = passwords;
        if (password !== passwordConfirm) {
            setErrMsg('Password does not match');
            return;
        }
        resetFunc();

        console.log(passwords);
    };

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
                            <h2 className="text-center ">ENTER NEW PASSWORD</h2>
                            <h3 className="text-center mt-5">Create and confirm your new passowrd</h3>

                            <div className="input mt-4">
                                <label htmlFor="psw">New Password</label>

                                <input
                                    id="my-input"
                                    className=""
                                    type="password"
                                    name="password"
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="input mt-4">
                                <label htmlFor="psw">Confirm Password</label>

                                <input
                                    id="my-input-2"
                                    className=""
                                    type="password"
                                    name="passwordConfirm"
                                    onChange={handleChange}
                                />
                            </div>

                            <div>
                                <p>{errMsg}</p>
                            </div>
                            <button className="password-reset-button form-button mt-5"> SEND CODE</button>
                        </div>
                    </form>
                </div>
            </div>
        </FormStyled>
    );
};

export default Register;
