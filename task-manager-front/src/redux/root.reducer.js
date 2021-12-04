import { combineReducers } from 'redux';
import userReducer from './user/user.reducer';
import taskReducer from './task/task.reducer';

const rootReducer = combineReducers({
    user: userReducer,
    task: taskReducer,
});

export default rootReducer;