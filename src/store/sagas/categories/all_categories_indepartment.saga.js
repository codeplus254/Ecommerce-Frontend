import {put, takeLatest, call} from 'redux-saga/effects';
import categoriesService from "../../../services/categoriesService";
import {
    GET_ALL_CATEGORIES_INDEPARTMENT,
    GET_ALL_CATEGORIES_INDEPARTMENT_SUCCESS,
    GET_ALL_CATEGORIES_INDEPARTMENT_ERROR
}
    from "../../actions/categories";
function* getAllCategoriesIndepartmentSaga(action) {
    try {
      console.log(action)
        const data = yield call(categoriesService.getAllCategoriesInDepartment, action.payload);
        console.log(data)
        yield put({
            type: GET_ALL_CATEGORIES_INDEPARTMENT_SUCCESS,
            payload: data
        });

    } catch (error) {
        yield put({
            type: GET_ALL_CATEGORIES_INDEPARTMENT_ERROR, payload: error
        });
    }
}


export function* getAllCategoriesIndepartmentWatcher() {
    yield takeLatest(GET_ALL_CATEGORIES_INDEPARTMENT, getAllCategoriesIndepartmentSaga);
}