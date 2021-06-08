import { useState } from 'react';
import axios from 'axios';
import { FormStyled } from '../../components/SalesRep/form.styled';
import Header from '../../components/SalesRep/Header/Header';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { apiUrl } from '../../components/SalesRep/lib/auth';

const Register = () => {
    const route = useRouter();
    const [loading, setLoading] = useState(false);
    const [errMsg, setErrMsg] = useState('');
    const [acceptCheck, setAcceptCheck] = useState(true);
    const [inputFields, setInputFields] = useState({
        fullName: '',
        email: '',
        password: '',
        passwordConfirm: '',
    });

    // func to post input to signup api
    const postData = async (fullName: string, email: string, password: string, passwordConfirm: string) => {
        try {
            const { data } = await axios.post(`${apiUrl}users/signup`, { fullName, email, password, passwordConfirm });

            if (data.status == 'success') {
                route.push(`/salesrepresentative/login`);
            }
        } catch (err) {
            console.log(`Error: ${err}`);
            if (err == 'Error: Request failed with status code 400') {
                setErrMsg(`Error: user already exist`);
            } else {
                setErrMsg(`Error: ${err}`);
            }
            // setErrMsg(`Error: ${err}`)
        }
    };
    // const postData = async () => {
    //     // const { fullName, email, password, passwordConfirm } = inputFields
    //     const inputIn = JSON.stringify(inputFields);
    //     console.log(inputIn);

    //     // const apiUrl = "https://treen-shop-api.herokuapp.com/api/v1/users/signup";
    //     try {
    //         const { data }  = await axios.post("https://treen-shop-api.herokuapp.com/api/v1/users/signup", inputIn);

    //             if(data.message) {
    //                 setErrMsg(data.message);
    //             }
    //             console.log(data);
    //             // route.push('/salesrepresentative/login')
    //     } catch (error) {
    //         console.log(`Error: ${error}`);

    //         setErrMsg(`Error: something went wrong`)
    //     }
    //     // const response  = await axios.post(apiUrl, JSON.stringify(inputFields), {
    //     //     headers: {
    //     //         'Content-Type': 'application/json'
    //     //     }
    //     // });
    //     // console.log(response);

    // }

    // func to handle change on input fields
    const handleChange = (evt) => {
        const value = evt.target.value;
        setInputFields({
            ...inputFields,
            [evt.target.name]: value,
        });
    };

    // func to handle change on form submit
    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        const { fullName, email, password, passwordConfirm } = inputFields;

        // const { password, passwordConfirm } = inputFields;

        // check if t and c is checked
        if (!acceptCheck) {
            setErrMsg('Accept terms and condition to proceed');
            return;
        }

        // comfirm passwords length and match
        if (password.length < 8) {
            setErrMsg('Password should be 8 characters or more');
            return;
        }
        if (password !== passwordConfirm) {
            setErrMsg('Password and Confirm password does not match');
            return;
        }
        // run post func
        postData(fullName, email, password, passwordConfirm);

        console.log(inputFields);
        setLoading(false);
        setErrMsg('');
    };
    return (
        <FormStyled>
            <Header />
            <div className="form container">
                <h1>SALES RESPRESENTATIVE</h1>
                <div className="form-card card col-lg-7 col-md-6">
                    <form onSubmit={handleSubmit}>
                        <div className="card-body p-5">
                            <h2>Register</h2>
                            <h3>Fill in your Information Below</h3>
                            <div className="row mt-4">
                                <div className="col-lg-6 col-sm-12">
                                    <label htmlFor="fullname">Full Name</label>
                                    <input className="" type="text" name="fullName" onChange={handleChange} required />
                                </div>

                                <div className="col-lg-6 col-sm-12">
                                    <label htmlFor="email">Email Address</label>
                                    <input className="" type="Email" name="email" onChange={handleChange} required />
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col-lg-6 col-md-12">
                                    <label htmlFor="password">Password</label>
                                    <input type="password" name="password" onChange={handleChange} />
                                </div>
                                <div className="col-lg-6 col-md-12">
                                    <label htmlFor="passwordconfirm">Re-Enter Password</label>
                                    <input type="password" name="passwordConfirm" onChange={handleChange} />
                                </div>
                                <p>Password should be 8 characters or more</p>
                            </div>

                            <div className="form-check form-check-inline mt-5">
                                <input
                                    id="my-input"
                                    className="form-check-input"
                                    type="checkbox"
                                    name=""
                                    value="true"
                                    defaultChecked={acceptCheck}
                                    onClick={() => {
                                        setAcceptCheck(!acceptCheck);
                                    }}
                                />
                                <label htmlFor="my-input" className="form-check-label">
                                    I accept Terms and Conditions in privancy policy
                                </label>
                            </div>
                            <p>{errMsg}</p>
                            <button className="form-button mt-5 col-lg-8" type="submit">
                                Register {loading && <span>...</span>}
                            </button>
                            <p className="forget-password">
                                Already have an account ?<Link href="/salesrepresentative/login">Log in</Link> .
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </FormStyled>
    );
};

export default Register;
