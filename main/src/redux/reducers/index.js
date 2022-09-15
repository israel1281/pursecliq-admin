import { combineReducers } from 'redux';
import auth from './authReducer';
import alert from './alertReducer';
import users from './usersReducer';

export default combineReducers({
    auth,
    alert,
    users
})