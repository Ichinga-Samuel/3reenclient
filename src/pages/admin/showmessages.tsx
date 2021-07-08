import React from 'react';
import Messages from '@/components/Admin/CustomerService/Messages';
import SideNav from '@/components/Admin/SideNav/SideNav';
const ShowMessages = () => {
    const name = process.env.APP_BASE_URL
    console.log(name);
    return (
        <div>
            <Messages />
            <SideNav />
        </div>
    );
};

export default ShowMessages;
