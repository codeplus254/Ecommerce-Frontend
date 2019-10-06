import * as Actions from '../../actions';

const initialState = {
    data: {},
    isLoading: false,
    error: false
};

const singleCustomerReducer = function (state = initialState, action) {
  
    switch (action.type) {
        case Actions.GET_SINGLE_CUSTOMER: {
            return {
                ...state,
                isLoading: true,
                error: false
            };
        }
        case Actions.GET_SINGLE_CUSTOMER_SUCCESS: {
            return {
                ...state,
                data: action.payload,
                isLoading: false,
                error: false
            };
        }
        case Actions.GET_SINGLE_CUSTOMER_ERROR: {
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

export default singleCustomerReducer;