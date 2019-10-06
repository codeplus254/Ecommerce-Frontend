import {put, takeLatest, call} from 'redux-saga/effects';
import customerService from "../../../services/customerService";
import {
    LOGIN_CUSTOMER,
    LOGIN_CUSTOMER_SUCCESS,
    LOGIN_CUSTOMER_ERROR
}
    from "../../actions/customer";

function* loginCustomerSaga(action) {
    try {
        const data = yield call(customerService.loginCustomer, action.payload);
        console.log(data)
        yield put({
            type: LOGIN_CUSTOMER_SUCCESS,
            payload: data
        });

    } catch (error) {
        yield put({
            type: LOGIN_CUSTOMER_ERROR, payload: error
        });
    }
}


export function* loginCustomerWatcher() {
    yield takeLatest(LOGIN_CUSTOMER, loginCustomerSaga);
}