import { getFromLocalStorage } from './browserStorage';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const AuthenticateUser = () => {
    const router = useRouter();
    const token = getFromLocalStorage('token');

    useEffect(() => {
        if (!token) {
            router.push('/vendor/login');
        }
    }, [token, router]);
};

export default AuthenticateUser;
