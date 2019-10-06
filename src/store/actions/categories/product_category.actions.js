export const GET_PRODUCT_CATEGORY = 'GET_PRODUCT_CATEGORY';
export const GET_PRODUCT_CATEGORY_ERROR = 'GET_PRODUCT_CATEGORY_ERROR';
export const GET_PRODUCT_CATEGORY_SUCCESS = 'GET_PRODUCT_CATEGORY_SUCCESS';


export const getProductCategory = (data) => ({
    type: GET_PRODUCT_CATEGORY,
    payload: data
});
