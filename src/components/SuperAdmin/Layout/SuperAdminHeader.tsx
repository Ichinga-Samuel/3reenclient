import React, { useRef, useState } from 'react';
import { AdminHeaderLayout } from './AdminLayout.styled';
import { Menu, ArrowDropDown } from '@material-ui/icons';
import { useRouter } from 'next/router';
import {
    emptyLocalStorage,
    emptySessionStorage,
    removeFromLocalStorage,
    removeFromSessionStorage,
} from '@/utils/browserStorage';

const SuperAdminHeader = (props) => {
    // const { adminDetails } = props;
    const details = JSON.parse(props.adminDetails);
    const [menuopen, setmenuopen] = useState(false);
    const userRef = useRef(null);
    const openUserMenu = () => setmenuopen(!menuopen);

    const router = useRouter();

    const logoutAdmin = () => {
        removeFromLocalStorage('supertoken');
        removeFromLocalStorage('superdetails');
        removeFromSessionStorage('supertoken');
        removeFromSessionStorage('superdetails');
        emptySessionStorage();
        emptyLocalStorage();
        router.push('/admin/super-login');
    };

    return (
        <AdminHeaderLayout style={{ justifyContent: 'space-between' }}>
            <div
                onClick={props.openDrawer}
                onKeyDown={props.openDrawer}
                role="button"
                tabIndex={0}
                className="opendrawer"
            >
                <Menu />
            </div>
            <div className="userprofile" onClick={openUserMenu} onKeyDown={openUserMenu} role="button" tabIndex={0}>
                <div className="userprofile__avatar">{details?.fullName?.split(' ')[0][0]}</div>
                <div className="userprofile__name">
                    <span>Hi, {details?.fullName?.split(' ')[0]}</span> <ArrowDropDown />
                </div>
                <div className={`usermenu ${menuopen ? 'isOpen' : ''}`} ref={userRef}>
                    <ul>
                        {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
                        <li onClick={logoutAdmin} onKeyDown={logoutAdmin} className="logout">
                            Logout
                        </li>
                    </ul>
                </div>
            </div>
        </AdminHeaderLayout>
    );
};

export default SuperAdminHeader;
