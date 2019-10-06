export const LOGIN_CUSTOMER = 'LOGIN_CUSTOMER';
export const LOGIN_CUSTOMER_ERROR = 'LOGIN_CUSTOMER_ERROR';
export const LOGIN_CUSTOMER_SUCCESS = 'LOGIN_CUSTOMER_SUCCESS';

export const loginCustomer = (data) => ({
    type: LOGIN_CUSTOMER,
    payload: data
});
