// Vendor Endpoint
export const USER = {
    login: '/users/login',
    register: '/users/signup',
    loggedIn: '/users/me',
    forgotPassword: '/users/forgotPassword',
    updatePassword: '/users/updateMyPassword',
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
