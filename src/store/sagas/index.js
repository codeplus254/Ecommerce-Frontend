import {all} from 'redux-saga/effects';
import productsSaga from './products';
import productSaga from './product';
import categoriesSaga from './categories';
import customerSaga from './customer';

export default function* rootSaga() {
    yield all([
        productsSaga(),
        productSaga(),
        categoriesSaga(),
        customerSaga(),
    ]);
}
