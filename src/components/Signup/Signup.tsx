import React, { useState } from 'react';
import { SignupStyled } from './Signup.styled';
import { SignupForm } from './Signup.styled';
import Link from 'next/link';
import { useRouter } from 'next/router'
import axios from 'axios';


const Signup = () => {
    const [ name, setName ] = useState("")
    const [ email, setEmail ] = useState("")
    const [ address, setAddress ] = useState("")
    const [ number, setNumber ] = useState("")
    const [ gender, setGender ] = useState<'male' | 'female' | null>(null)
    const [ description, setDescription ] = useState("")

    const router = useRouter();

    const signup =(e) =>{
        e.preventDefault()
        console.log(gender)
        axios.post("backend url", { name, email, address, number, gender, description })
        .then((res) =>{
            console.log(res)
            router.push("/vendor/login")
            })
            .catch((e) =>{
                alert(e.message)
            })
        }

    return (

        <SignupStyled>

            <div className="intro">
                <p>
                    REGISTER TO START <span>SELLING ON 3REEN</span>
                </p>
            </div>  
            <SignupForm onSubmit = {signup} >
            <div className="logo-div">
                   <img src="/img/vendor-logo.svg" alt="vendor-logo"/>
                </div>
               
                <div className="header-div">
                   <p>
                      To become a part of the 3reen Shop, <span>please fill out and submit the form below.</span>
                  </p>
                </div>
            
            <div className= "parent-input-group">
                <div className="input-group">
                    <label htmlFor="name">FULL NAME</label>
                    <input type="text" id="name" onChange = {(e) => setName(e.target.value)} />
                </div>
                <div className="input-group">
                    <label htmlFor="email">EMAIL ADDRESS</label>
                    <input type="email" id="email"  onChange = {(e) => setEmail(e.target.value)} />
                </div>
            </div>
            <div className= "parent-input-group">
                <div className="input-group">
                    <label htmlFor="address">ADDRESS</label>
                    <input type="text" id="address"  onChange = {(e) => setAddress(e.target.value)} />
                </div>
                <div className="input-group">
                    <label htmlFor="number">PHONE NUMBER</label>
                    <input type="number" id="number" onChange = {(e) => setNumber(e.target.value)}/>
                </div>
            </div>
            <div className="g-parent-input-radio">
                <label>SEX</label>
                <div className= "parent-input-radio">
                    <div className="input-radio">
                        <input type="radio" id="male" name="gender" value="male" onChange = {(e) => setGender(e.target.value as "male")}/>
                        <label htmlFor="male">male</label>
                    </div>
                    <div className="input-radio">
                        <input type="radio" id="female" name="gender" value="female"  onChange = {(e) => setGender(e.target.value as "female")}/>
                        <label htmlFor="female">female</label>
                    </div>
                </div>
            </div>
  
            <div className="input-description">
                    <label htmlFor="description">BRIEF BRAND DESCRIPTION</label>
                    <textarea id="description"  onChange = {(e) => setDescription(e.target.value)}/>
                </div>
                <button>REGISTER NOW</button>
                <p>
                    Already have an account? <Link href=""><a>Log in</a></Link>
                </p>
            </SignupForm>
        </SignupStyled>
    )
}

export default Signup
