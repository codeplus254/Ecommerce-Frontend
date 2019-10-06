import {put, takeLatest, call} from 'redux-saga/effects';
import customerService from "../../../services/customerService";
import {
    CREATE_NEW_CUSTOMER,
    CREATE_NEW_CUSTOMER_SUCCESS,
    CREATE_NEW_CUSTOMER_ERROR
}
    from "../../actions/customer";

function* createNewCustomerSaga(action) {
    try {
        const data = yield call(customerService.createNewCustomer, action.payload);
        yield put({
            type: CREATE_NEW_CUSTOMER_SUCCESS,
            payload: data
        });

    } catch (error) {
        yield put({
            type: CREATE_NEW_CUSTOMER_ERROR, payload: error
        });
    }
}


export function* createNewCustomerWatcher() {
    yield takeLatest(CREATE_NEW_CUSTOMER, createNewCustomerSaga);
}