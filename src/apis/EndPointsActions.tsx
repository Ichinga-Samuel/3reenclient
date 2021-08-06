import axios from 'axios';
import { ADMIN, APP_BASE } from '@/utils/ApiList';

export const GetAllCategories = () => {
    interface Category {
        doc: any;
        success: boolean;
        data: any;
        message: any;
    }
    return axios
        .get<Category>(`${APP_BASE}${ADMIN.getAllCategory}`, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then((res) => {
            return { success: true, data: res?.data?.doc };
        })
        .catch((err) => {
            return { success: false, message: err?.response?.data?.message };
        });
};
