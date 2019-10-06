import {put, takeLatest, call} from 'redux-saga/effects';
import customerService from "../../../services/customerService";
import {
    GET_SINGLE_CUSTOMER,
    GET_SINGLE_CUSTOMER_SUCCESS,
    GET_SINGLE_CUSTOMER_ERROR
}
    from "../../actions/customer";

function* singleCustomerSaga(action) {
    try {
        const data = yield call(customerService.getCustomerById, action.payload);
        yield put({
            type: GET_SINGLE_CUSTOMER_SUCCESS,
            payload: data
        });

    } catch (error) {
        yield put({
            type: GET_SINGLE_CUSTOMER_ERROR, payload: error
        });
    }
}


export function* singleCustomerWatcher() {
    yield takeLatest(GET_SINGLE_CUSTOMER, singleCustomerSaga);
}