import React from 'react';
import { Cancel } from '@material-ui/icons';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { LogoWhiteIcon, LogoutIcon } from '@/utils/Icons';
import { UserMonitorIcon } from '@/utils/NewIcons2';
import {
    emptyLocalStorage,
    emptySessionStorage,
    removeFromLocalStorage,
    removeFromSessionStorage,
} from '@/utils/browserStorage';
// import { UserAddOutlined } from '@ant-design/icons';

const SuperAdminSidebar = (props) => {
    const { isAdminOpen, closeDrawer, adminDrawerRef } = props;
    const router = useRouter();
    const { pathname } = router;

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
        <aside className={`aside ${isAdminOpen ? 'open' : ''}`} ref={adminDrawerRef}>
            <div
                onClick={closeDrawer}
                onKeyDown={closeDrawer}
                role="button"
                tabIndex={0}
                className="closedrawer"
                data-aos="fade-left"
                data-aos-delay="1500"
            >
                <Cancel />
            </div>
            <div className="profile">
                <div className="profile__avatar admin">
                    <LogoWhiteIcon />
                </div>
            </div>
            <div className="sidemenu">
                <ul>
                    <li className={pathname === '/superadmin/admin-users' ? 'activelink' : ''}>
                        <Link href="/superadmin/admin-users">
                            <a>
                                <UserMonitorIcon />
                                <span>Admin Users</span>
                            </a>
                        </Link>
                    </li>
                    {/*<li className={pathname === '/superadmin/add-user' ? 'activelink' : ''}>*/}
                    {/*    <Link href="/superadmin/add-user">*/}
                    {/*        <a>*/}
                    {/*            <UserAddOutlined />*/}
                    {/*            <span>Add New Admin</span>*/}
                    {/*        </a>*/}
                    {/*    </Link>*/}
                    {/*</li>*/}
                </ul>
            </div>
            <div className="lowermenu">
                <ul>
                    {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions */}
                    <li onClick={logoutAdmin}>
                        <LogoutIcon />
                        <span>Logout</span>
                    </li>
                </ul>
            </div>
        </aside>
    );
};

export default SuperAdminSidebar;
