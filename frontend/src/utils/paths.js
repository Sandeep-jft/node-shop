
export const PATHS = {
    GET_ALL_PRODUCTS:'/product',
    GET_PRODUCT_BY_ID:(id)=>`/product/${id}`,
    USER_LOGIN: '/user/login',
    USER:'/user',
    USER_LOGOUT: (id)=>`/user/logout?id=${id}`
}