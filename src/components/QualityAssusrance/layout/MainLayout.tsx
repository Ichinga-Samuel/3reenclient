import React from 'react';
import SideNav from '../navigation/SideNav';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';
import 'primeicons/primeicons.css';
import ProfileInfo from '../navigation/ProfileInfo';

const MainLayout = ({ children }) => {
    return (
        <>
            <SideNav />
            <ProfileInfo />
            <main className="p-5">{children}</main>

            <style jsx>
                {`
                    margin: 70px 0 0 274px;
                    background-color: #fff;
                `}
            </style>
        </>
    );
};

export default MainLayout;
