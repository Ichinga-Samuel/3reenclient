//baseURL
export const APP_BASE = process.env.APP_BASE_URL;

export const PRODUCT = {
    allProducts: '/products',
    singleProduct: (id: string) => `/products/${id}`,
    allCategory: '/category',
};

export const ADMIN = {
    dashboard: '/users/admin/dashboard',
    createCategory: '/category',
    addAdmin: '/users/inviteAdmin',
    getSingleCat: (catId: string) => `/category/${catId}`,
    delSingleCat: (catId: string) => `/category/${catId}`,
    getUserByType: (type: string) => `/users/${type}`,
    getSRStat: (userId: string) => `/referrals/sales-rep-referrals/${userId}`,
};
// User & Vendor Endpoint
export const userPrefix = '/users';

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
    allReview: '/review',
};

// QA Endpoints
export const QA_ORDER = {
    getAllOrders: '/orders',
    getSingleOrder: (id: any) => `/orders/${id}`,
    byStatus: (status: string) => `/orders/status/${status}`,
    updateStatus: (id: any, status: string) => `/orders/${id}/${status}`,
};

export const MESSAGES = {
    sendMessage: (userId: string) => `/messages/messageUser/${userId}`,
    getMessage: (roomId: string) => `/messages/userChat/${roomId}`,
};

export const CST_API = {
    getAllProducts: '/products',
    getSingleProduct: (id: any) => `/products/${id}`,
    getAllOrders: '/orders',
    getAllUsers: '/users/',
};
