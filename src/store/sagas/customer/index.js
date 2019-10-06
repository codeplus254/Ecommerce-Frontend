import { all } from 'redux-saga/effects';
import { createNewCustomerWatcher } from './create_new_customer.saga';
import { loginCustomerWatcher } from './login_customer.saga';
import { singleCustomerWatcher } from './single_customer.saga';

export default function* customerSaga() {
    yield all([
        createNewCustomerWatcher(),
        loginCustomerWatcher(),
        singleCustomerWatcher(),
    ]);
}