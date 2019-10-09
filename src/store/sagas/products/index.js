import { all } from 'redux-saga/effects';
import { getAllProductsWatcher } from './get_all_products.saga';
import { getAllProductsInCategoryWatcher } from './get_all_products_incategory.saga';

export default function* productsSaga() {
    yield all([
        getAllProductsWatcher(),
        getAllProductsInCategoryWatcher(),
    ]);
}