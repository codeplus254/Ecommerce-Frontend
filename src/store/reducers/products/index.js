import {combineReducers} from 'redux';
import all from './all_products.reducer';
import allProductsIncategory from './all_products_incategory.reducer';


const products = combineReducers({
    all,
    allProductsIncategory,
});

export default products;