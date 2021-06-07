/* eslint-disable prettier/prettier */
import React, { useState, useEffect, useRef } from 'react';
import { Header } from './Header.styled';

import axios from 'axios';
import Link from 'next/link';
import { apiUrl } from '../../lib/auth';


export const SalesRepHeader = () => {
    const isMount = useRef(false);
    const [userProfile, setUserProfile] = useState([]);
    const [errMsg, setErrMsg] = useState("");

    useEffect( () => {
        isMount.current = true;
        const getSalesRep = async () => {
            const userid = localStorage.getItem("userid");
            try {
                const { data } = await axios.get(`${apiUrl}users/getUser/${userid}`);
                console.log(data);
                
                if(isMount.current) {
                    setUserProfile(data.doc);
                }
            } catch(err) {
                setErrMsg("Login");
                console.log(`Error: ${err}`);
            }
        }
        getSalesRep();

        // clean up
        return () => {
            isMount.current = false
        }
    }, [])
    return (
        <Header>
            <div className="icons">
                <img src="/Icons/Notification.svg" alt="" />
            </div>

            
                <div className="icons user__details">
                    <img src="/Icons/Avatar.svg" alt="" />

                    {
                        userProfile ?
                        <div className="user__name">
                            <h5>{userProfile.fullName}</h5>
                            <p>{userProfile.role}</p>
                        </div>
                        :
                        <div className="user__name">
                            <Link href="/salesrepresentative/login"><h5>{errMsg}</h5></Link>
                        </div>
                    }
    
                </div>
        </Header>
    );
};

export default SalesRepHeader;
