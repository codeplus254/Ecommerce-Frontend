import * as Actions from '../../actions';

const initialState = {
    data: {},
    isLoading: false,
    error: false
};

const productCategoryReducer = function (state = initialState, action) {
    switch (action.type) {
        case Actions.GET_PRODUCT_CATEGORY: {
            return {
                ...state,
                isLoading: true,
                error: false
            };
        }
        case Actions.GET_PRODUCT_CATEGORY_SUCCESS: {
          console.log('reduceeeeeeers')
          console.log(action)
            return {
                ...state,
                data: action.payload,
                isLoading: false,
                error: false
            };
        }
        case Actions.GET_PRODUCT_CATEGORY_ERROR: {
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };
        }
        default: {
            return state;
        }
    }
};

export default productCategoryReducer;