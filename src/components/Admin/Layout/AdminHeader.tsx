import React, { useRef, useState } from 'react';
import { AgentHeaderLayout } from './AdminLayout.styled';
import { Notifications, Menu, ArrowDropDown } from '@material-ui/icons';
import { useRouter } from 'next/router';
import { MessageIcon } from '@/utils/NewIcons2';
import {
    emptyLocalStorage,
    emptySessionStorage,
    removeFromLocalStorage,
    removeFromSessionStorage,
} from '@/utils/browserStorage';

const AdminHeader = (props) => {
    // const { adminDetails } = props;
    const details = JSON.parse(props.adminDetails);
    const [menuopen, setmenuopen] = useState(false);
    const userRef = useRef(null);
    const openUserMenu = () => setmenuopen(!menuopen);

    const router = useRouter();

    const logoutAdmin = () => {
        removeFromLocalStorage('admintoken');
        removeFromLocalStorage('admindetails');
        removeFromSessionStorage('admintoken');
        removeFromSessionStorage('admindetails');
        emptySessionStorage();
        emptyLocalStorage();
        router.push('/admin/login');
    };

    return (
        <AgentHeaderLayout>
            <div
                onClick={props.openDrawer}
                onKeyDown={props.openDrawer}
                role="button"
                tabIndex={0}
                className="opendrawer"
            >
                <Menu />
            </div>
            <div className="user_notification">
                <Notifications />
                <div className="count">
                    <span>2</span>
                </div>
                <div className="">
                    <MessageIcon />
                    <div className="count">
                        <span>2</span>
                    </div>
                </div>
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
        </AgentHeaderLayout>
    );
};

export default AdminHeader;
