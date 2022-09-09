import { combineReducers } from 'redux';
import userReducer from './userReducer';
import customerReducer from './customer.reducer';

const rootReducer = combineReducers({
    auth: userReducer,
    customers:customerReducer
});

export default rootReducer;