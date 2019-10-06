import * as Actions from '../../actions';

const initialState = {
    data      : {
        rows: []
    },
    isLoading: false,
    error: false
};

const getAllCategoriesInDepartmentReducer = function (state = initialState, action) {
    switch ( action.type )
    {
        case Actions.GET_ALL_CATEGORIES_INDEPARTMENT:
        {
            return {
                ...state,
                isLoading: true,
                error: false
            };
        }
        case Actions.GET_ALL_CATEGORIES_INDEPARTMENT_SUCCESS:
        {
            return {
                ...state,
                data: action.payload,
                isLoading: false,
                error: false
            };
        }
        case Actions.GET_ALL_CATEGORIES_INDEPARTMENT_ERROR:
        {
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };
        }
        default:
        {
            return state;
        }
    }
};

export default getAllCategoriesInDepartmentReducer;