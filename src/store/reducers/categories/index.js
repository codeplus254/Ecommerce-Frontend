import {combineReducers} from 'redux';
import allCategories from './all_categories.reducer';
import allCategoriesIndepartment from './all_categories_indepartment.reducer';
import productCategory from './product_category.reducer';
import singleCategory from './single_category.reducer';


const categories = combineReducers({
    allCategories,
    allCategoriesIndepartment,
    productCategory,
    singleCategory,
});

export default categories;