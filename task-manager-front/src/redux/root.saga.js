import { all, call } from 'redux-saga/effects';
import { taskSagas } from './task/task.sagas';
import { userSagas } from './user/user.sagas';
import {notificationSagas} from './notification/notification.sagas';

export default function* rootSaga() {
    yield all([
        call(userSagas), 
        call(taskSagas),
        call(notificationSagas)
    ]);
}