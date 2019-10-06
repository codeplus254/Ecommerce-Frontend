import { all } from 'redux-saga/effects';
import { getSingleCategoryWatcher } from './single_category.saga';
import { productCategoryWatcher } from './product_category.saga';
import { getAllCategoriesIndepartmentWatcher } from './all_categories_indepartment.saga';
import { getAllCategoriesWatcher } from './get_all_categories.saga';

export default function* categoriesSaga() {
    yield all([
        getSingleCategoryWatcher(),
        productCategoryWatcher(),
        getAllCategoriesIndepartmentWatcher(),
        getAllCategoriesWatcher(),
    ]);
}