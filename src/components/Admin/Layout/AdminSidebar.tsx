import React from 'react';
// import { ConfigurationIcon, DashboardIcon, LogoutIcon, TrackingIcon, UsersIcon } from '../../../utils/AdminIcons';
import { Cancel } from '@material-ui/icons';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { LogoWhiteIcon, Dashboard, Inventory, LogoutIcon } from '@/utils/Icons';
import { AuditIcon, LogisticCompanyIcon, OrderIcon } from '@/utils/NewIcons';
import { CustomerServiceIcon, SRMonitorIcon, UserMonitorIcon } from '@/utils/NewIcons2';
import {
    emptyLocalStorage,
    emptySessionStorage,
    removeFromLocalStorage,
    removeFromSessionStorage,
} from '@/utils/browserStorage';

const AgentSidebar = (props) => {
    const { isAdminOpen, closeDrawer, adminDrawerRef } = props;
    const router = useRouter();
    const { pathname } = router;

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
                    <li className={pathname === '/admin/dashboard' ? 'activelink' : ''}>
                        <Link href="/admin/dashboard">
                            <a>
                                <Dashboard />
                                <span>Dashboard</span>
                            </a>
                        </Link>
                    </li>
                    <li className={pathname === '/admin/inventory' ? 'activelink' : ''}>
                        <Link href="/admin/inventory">
                            <a>
                                <Inventory />
                                <span>Inventory</span>
                            </a>
                        </Link>
                    </li>
                    <li className={pathname === '/admin/user-monitor' ? 'activelink' : ''}>
                        <Link href="/admin/user-monitor">
                            <a>
                                <UserMonitorIcon />
                                <span>User Monitoring</span>
                            </a>
                        </Link>
                    </li>
                    <li className={pathname === '/admin/logistics-company' ? 'activelink' : ''}>
                        <Link href="/admin/logistics-company">
                            <a>
                                <LogisticCompanyIcon />
                                <span>Logistics Companies</span>
                            </a>
                        </Link>
                    </li>
                    <li className={pathname === '/admin/audit' ? 'activelink' : ''}>
                        <Link href="/admin/audit">
                            <a>
                                <AuditIcon />
                                <span>Audit</span>
                            </a>
                        </Link>
                    </li>
                    <li className={pathname === '/admin/orders' ? 'activelink' : ''}>
                        <Link href="/admin/orders">
                            <a>
                                <OrderIcon />
                                <span>Order Display</span>
                            </a>
                        </Link>
                    </li>
                    <li className={pathname === '/admin/sr-monitor' ? 'activelink' : ''}>
                        <Link href="/admin/sr-monitor">
                            <a>
                                <SRMonitorIcon />
                                <span>SR Monitor</span>
                            </a>
                        </Link>
                    </li>
                    <li className={pathname === '/admin/customer-service' ? 'activelink' : ''}>
                        <Link href="/admin/customer-service">
                            <a>
                                <CustomerServiceIcon />
                                <span>Customer Service</span>
                            </a>
                        </Link>
                    </li>
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

export default AgentSidebar;
