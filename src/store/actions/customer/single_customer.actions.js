export const GET_SINGLE_CUSTOMER = 'GET_SINGLE_CUSTOMER';
export const GET_SINGLE_CUSTOMER_ERROR = 'GET_SINGLE_CUSTOMER_ERROR';
export const GET_SINGLE_CUSTOMER_SUCCESS = 'GET_SINGLE_CUSTOMER_SUCCESS';


export const getSingleCustomer = (data) => ({
    type: GET_SINGLE_CUSTOMER,
    payload: data
});
