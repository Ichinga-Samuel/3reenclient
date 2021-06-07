import React, {useState, useEffect, useRef} from 'react';
import SalesRepSidebar from '../Sidebar/Sidebar';

import SalesRepUserCard from './UserCard/SalesRepUserCard';
import TableData from '../UserMonitor/TableData/TableData';
import SalesRepHeader from '../UserMonitor/Header/Header';

import { UserMonitorStyled } from './UserMonitor.styled';
import axios from 'axios';
import { apiUrl } from '../lib/auth';

const UserMonitor = () => {
    const isMount = useRef(false);
    const [allUsers, setallUsers] = useState([]);
    const [regUser, setRegUser] = useState('');

    useEffect(() => {
        isMount.current = true;
        const getAllUsers = async() => {
            try {
                const { data } = await axios.get(`${apiUrl}users`);
                if(isMount.current) {
                    setallUsers(data.doc);
                    setRegUser(data.results);
                }
                // setallUsers(data.doc);
                // setRegUser(data.results)
            } catch(err) {
                console.log(`Err: ${err}`);
            }
        }
        getAllUsers();

        // clean up
        return () => {
            isMount.current = false
        }
    }, [])

    return (
        <UserMonitorStyled>
            <SalesRepSidebar />

            <div className="contain container">
                <SalesRepHeader />

                <h2>User Monitor</h2>

                <div className="cards">
                    <div className="col-lg-4 col-md-4">
                        <SalesRepUserCard title={'Registered Users'} figure={3500} image={'/Icons/edit.svg'} />
                    </div>

                    <div className="col-lg-4 col-md-4">
                        <SalesRepUserCard title={'Verifed Users'} figure={2356} image={'/Icons/verify.svg'} />
                    </div>

                    <div className="col-lg-4 col-md-4">
                        <SalesRepUserCard title={'Total Users'} figure={regUser} image={'/Icons/user.svg'} />
                    </div>
                </div>

                <TableData allUsers={allUsers} />
            </div>
        </UserMonitorStyled>
    );
};

export default UserMonitor;
