import {all} from 'redux-saga/effects';
import productsSaga from './products';
import productSaga from './product';
import categoriesSaga from './categories';
import customerSaga from './customer';
import departmentsSaga from './departments';

export default function* rootSaga() {
    yield all([
        productsSaga(),
        productSaga(),
        categoriesSaga(),
        customerSaga(),
        departmentsSaga(),
    ]);
}
