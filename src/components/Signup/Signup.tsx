import React, { useState } from 'react';
import { SignupStyled } from './Signup.styled';
import { SignupForm } from './Signup.styled';
import Link from 'next/link';
import { useRouter } from 'next/router'
import axios from 'axios';


const Signup = () => {
    const [ name, setName ] =useState("")
    const [ email, setEmail ] =useState("")
    const [ address, setAddress ] =useState("")
    const [ number, setNumber ] =useState("")
    const [ male, setMale ] =useState("")
    const [ female, setFemale ] =useState("")
    const [ description, setDescription ] =useState("")

    const router = useRouter();

    const signup =(e) =>{
        e.preventDefault()
        axios.post("backend url", { name, email, address, number, male, female, description })
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
            <div className="g-parent-input-check">
                <label>SEX</label>
                <div className= "parent-input-check">
                    <div className="input-check">
                        <input type="checkbox" id="male"  onChange = {(e) => setMale(e.target.value)}/>
                        <label htmlFor="male">male</label>
                    </div>
                    <div className="input-check">
                        <input type="checkbox" id="female"  onChange = {(e) => setFemale(e.target.value)}/>
                        <label htmlFor="female">female</label>
                    </div>
                </div>
            </div>
  
            <div className="input-description">
                    <label htmlFor="description">BRIEF BRAND DESCRIPTION</label>
                    <input type="text" id="description"  onChange = {(e) => setDescription(e.target.value)}/>
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
