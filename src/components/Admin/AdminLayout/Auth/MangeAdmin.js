import Link from 'next/link';
import React, { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { AdminTableContainer } from '../../PageBuilder/Styled';
import { Spin } from 'antd';

const MangeAdmin = () => {
    const [subAdmins, getSubAdmins] =  useState([]);
    const [spin, setSpin] = useState(false);
    //Fetch The Api
    const APP_BASE = process.env.APP_BASE_URL;
    useEffect(async () => {
        try {
            setSpin(true);
        const res = await axios.get(`${APP_BASE}/users/?role=sub-admin`)
        getSubAdmins(res.data.doc);
        setSpin(false);
        } catch (error) {
            console.log(error);
        }
    }, [])
    return (
        <AdminTableContainer>
            {
                spin ? <Spin className='spinner-div'></Spin>:
                <div>
                    <div className='table-header'>
                <h1>Manage Admin Users</h1>
            </div>
       <table className="styled-table">
    <thead>
        <tr>
            <th>Name of Admin</th>
            <th>Email</th>
            <th>Role</th>
            <th>Reset Password</th>
        </tr>
    </thead>
    <tbody>
       {
           subAdmins.map(user => (
               <tr key={user._id}>
                   <td>{user.fullName}</td>
                   <td>{user.email}</td>
                   <td>{user.role}</td>
                   <Link href=''>
                   <button className='reset-btn'>Reset Password</button>
                   </Link>
               </tr>
           ))
       }
    </tbody>
</table>
<div className='admin-btn'>
    <Link href='/admin/register'>
    <button>Add A New Admin</button>
    </Link>
</div>
                </div>
            }
        </AdminTableContainer>
    )
}

export default MangeAdmin;
