import {put, takeLatest, call} from 'redux-saga/effects';
import productsService from "../../../services/productsService";
import {
    GET_ALL_PRODUCTS_INCATEGORY,
    GET_ALL_PRODUCTS_INCATEGORY_SUCCESS,
    GET_ALL_PRODUCTS_INCATEGORY_ERROR
}
    from "../../actions/products";

function* getAllProductsInCategorySaga(action) {
    try {
        const data = yield call(productsService.getProductsInCategory, action.payload);
        yield put({
            type: GET_ALL_PRODUCTS_INCATEGORY_SUCCESS,
            payload: data
        });

    } catch (error) {
        yield put({
            type: GET_ALL_PRODUCTS_INCATEGORY_ERROR, payload: error
        });
    }
}


export function* getAllProductsInCategoryWatcher() {
    yield takeLatest(GET_ALL_PRODUCTS_INCATEGORY, getAllProductsInCategorySaga);
}