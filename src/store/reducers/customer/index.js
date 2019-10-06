import {combineReducers} from 'redux';
import newCustomer from './create_new_customer.reducer';
import loginCustomer from  './login_customer.reducer';
import singleCustomer from './single_customer.reducer';

const customer = combineReducers({
    newCustomer,
    loginCustomer,
    singleCustomer,
});

export default customer;