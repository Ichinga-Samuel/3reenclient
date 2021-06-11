//baseURL
export const APP_BASE = process.env.APP_BASE_URL;

// User & Vendor Endpoint
export const userPrefix = '/users';
console.log('pref', userPrefix);

export const USER = {
    login: `${userPrefix}/login`,
    onlyUser: `${userPrefix}/signup`,
    register: `${userPrefix}/signUpAsCompany`,
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
    byStatus: (status: string) => `/orders/status/${status}`,
};

export const VENDOR_PRODUCT = {
    createProduct: '/products',
    dashboardStat: '/products/vendorStats',
    filterDashboard: (value: string) => `/products/filterdashboard/${value}`,
    getAllProducts: '/products/vendorProducts',
    searchProduct: '/search',
    deleteProduct: (id: any) => `/products/${id}`,
};
