import axios from 'axios';
import { getFromLocalStorage } from '@/utils/browserStorage';
import { LOGGER } from '@/utils/helpers';
import { notification } from 'antd';

const APP_BASE_URL =
    getFromLocalStorage('baseUrl') === null ? process.env.APP_BASE_URI : getFromLocalStorage('baseUrl');

const instance = axios.create({
    baseURL: APP_BASE_URL,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },

    withCredentials: false,
    timeout: 30000,
    timeoutErrorMessage: 'An Error Occurred While Processing your request',
});

instance.interceptors.request.use(
    (config) => {
        config.baseURL =
            getFromLocalStorage('baseUrl') === null ? process.env.APP_BASE_URI : getFromLocalStorage('baseUrl');
        return config;
    },
    function (error) {
        return Promise.reject(error);
    },
);

// pass error to Notification
instance.interceptors.response.use(
    (data) => {
        LOGGER('AXIOS RESPONSE', data);
        if (data.config.method !== 'get') {
            if (data.status) {
                //data?data?.status === false
                notification({
                    message: 'Error',
                    description: data?.data?.message,
                    duration: 0,
                });
            }
        }
    },
    (err) => {
        let errors = '';
        if (err || err.response || err.message) {
            if (err?.response?.data?.message) {
                const block = err?.response?.data?.message;
                if (typeof block === 'string') {
                    errors += block;
                } else if (typeof block === 'object') {
                    for (const key in block) {
                        if (Object.hasOwnProperty.call(block, key)) {
                            const element = block[key];
                            const error = Array.isArray(element) ? element.join(' & ') : element;
                            errors += `${key} : ${error}\n`;
                        }
                    }
                } else {
                    errors += block;
                }
            }
        } else {
            errors += `Server Side Error Occurred`;
        }
        notification({
            message: 'Error',
            description: errors,
            duration: 0,
        });
        return err;
    },
);

export default instance;
