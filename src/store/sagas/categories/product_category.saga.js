import {put, takeLatest, call} from 'redux-saga/effects';
import categoriesService from "../../../services/categoriesService";
import {
    GET_PRODUCT_CATEGORY,
    GET_PRODUCT_CATEGORY_SUCCESS,
    GET_PRODUCT_CATEGORY_ERROR
}
    from "../../actions/categories";

function* productCategorySaga(action) {
    try {
        const data = yield call(categoriesService.getProductCategory, action.payload);
        yield put({
            type: GET_PRODUCT_CATEGORY_SUCCESS,
            payload: data
        });

    } catch (error) {
        yield put({
            type: GET_PRODUCT_CATEGORY_ERROR, payload: error
        });
    }
}


export function* productCategoryWatcher() {
    yield takeLatest(GET_PRODUCT_CATEGORY, productCategorySaga);
}