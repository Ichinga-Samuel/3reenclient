//baseURL
export const APP_BASE = process.env.APP_BASE_URL;

// User & Vendor Endpoint
const userPrefix = '/users';

export const USER = {
    login: `${userPrefix}/login`,
    register: `${userPrefix}/signup`,
    loggedIn: `${userPrefix}/me`,
    updateLoggedInUser: `${userPrefix}/updateMe`,
    forgotPassword: `${userPrefix}/forgotPassword`,
    updatePassword: `${userPrefix}/updateMyPassword`,
    confirmToken: `${userPrefix}/tokenconfirm`,
    resetPassword: (code: string) => `${userPrefix}/resetPassword/${code}`,
};

export const VENDOR_ORDER = {
    getAllOrders: '/orders',
    getSingleOrder: (id: any) => `/orders/${id}`,
    byStatus: (status: string) => `orders/status/${status}`,
};

export const VENDOR_PRODUCT = {
    getAllProducts: '/products',
    searchProduct: '/search',
    deleteProduct: (id: any) => `/products/${id}`,
};