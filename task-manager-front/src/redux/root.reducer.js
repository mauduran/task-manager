import { combineReducers } from 'redux';
import userReducer from './user/user.reducer';
import taskReducer from './task/task.reducer';
import notificationReducer from './notification/notification.reducer';

const rootReducer = combineReducers({
    user: userReducer,
    task: taskReducer,
    notification: notificationReducer,
});

export default rootReducer;