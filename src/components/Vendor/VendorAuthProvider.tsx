import React, { createContext, useContext, useState, useEffect } from 'react';
import { getFromLocalStorage } from '@/utils/browserStorage';
import { useRouter } from 'next/router';
import { notification } from 'antd';
import axios from 'axios';
// import { addToLocalStorage } from '@/utils/browserStorage';

// interface IContextProps {
//     user: null;
//     dispatch: ({ type }: { type: string }) => void;
// }

export const AuthContext = createContext(null);

const VendorAuthProvider = ({ children }) => {
    const [user, setUser] = useState();
    const { pathname, events } = useRouter();
    const router = useRouter();
    const token = getFromLocalStorage('token');

    useEffect(() => {
        const getLoggedInUser = async () => {
            const APP_BASE = process.env.APP_BASE_URL;
            await axios
                .get(`${APP_BASE}/users/me`, {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                })
                .then((response) => {
                    const { data } = response;
                    if (data.status === 'success') {
                        // addToLocalStorage('user', data.doc);
                        setUser(data.doc);
                    } else {
                        setUser(null);
                    }
                })
                .catch((err) => {
                    // router.push('/vendor/login');
                    notification.error({
                        message: 'Error',
                        description: err.response.data.message,
                        duration: 15,
                    });
                });
        };
        getLoggedInUser();
    }, [token]);

    useEffect(() => {
        console.log('userr', user);
        // Check that a new route is OK
        const handleRouteChange = (url) => {
            if (url !== '/vendor/login' && user === null) {
                console.log('notttt', url);
                window.location.href = '/vendor/login';
                // router.push('/vendor/login');
            }
        };

        // Check that initial route is OK
        if (pathname !== '/vendor/login' && user === null) {
            router.push('/vendor/login');
        }

        // Monitor routes
        events.on('routeChangeStart', handleRouteChange);
        return () => {
            events.off('routeChangeStart', handleRouteChange);
        };
    }, [user, pathname, router, events]);

    return <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>;
};

const useAuth = () => useContext(AuthContext);

export { VendorAuthProvider, useAuth };
