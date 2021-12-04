import { takeLatest, put, all, call } from 'redux-saga/effects';

import TaskActionTypes from './task.types';

import {
    fetchTasksFailure,
    fetchTasksSuccess,
    fetchTaskByIdSuccess,
    fetchTaskByIdFailure,
    createTaskSuccess,
    createTaskFailure,
    deleteTasksSuccess,
    deleteTasksFailure,
    updateTasksSuccess,
    updateTasksFailure,
} from './task.actions';
import { openErrorNotificationStart } from '../notification/notification.actions';

export function* fetchUserTasks() {
    try {
        const response = yield fetch("/task/", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem("token"),
            },
        })

        const responseBody = yield response.json();

        if (!responseBody.success) {
            throw new Error(responseBody.message);
        }

        yield put(fetchTasksSuccess(responseBody.tasks));

    } catch (error) {
        yield put(openErrorNotificationStart("Unable to get tasks"))
        yield put(fetchTasksFailure(error));
    }
}

export function* fetchTaskById({ payload: { id } }) {
    try {
        const response = yield fetch(`/task/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem("token"),
            },
        })

        const responseBody = yield response.json();

        if (!responseBody.success) {
            throw new Error(responseBody.message);
        }

        yield put(fetchTaskByIdSuccess(responseBody.task));

    } catch (error) {
        yield put(fetchTaskByIdFailure(error));
    }
}

export function* createTask({ payload }) {
    try {
        const response = yield fetch(`/task`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem("token"),
            },
            body: JSON.stringify(payload)
        })

        const responseBody = yield response.json();

        if (!responseBody.success) {
            throw new Error(responseBody.message);
        }

        yield put(createTaskSuccess(responseBody));

    } catch (error) {
        yield put(createTaskFailure(error));
    }
}

export function* deleteTask({ payload: { id } }) {
    try {
        const response = yield fetch(`/task/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem("token"),
            }
        })
        const responseBody = yield response.json();

        if (!responseBody.success) {
            throw new Error(responseBody.message);
        }

        yield put(deleteTasksSuccess(id));

    } catch (error) {
        yield put(deleteTasksFailure(error));
    }
}

export function* updateTask({ payload: { id, task, cbSuccess } }) {
    try {
        const response = yield fetch(`/task/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem("token"),
            },
            body: JSON.stringify(task)
        })
        const responseBody = yield response.json();

        if (!responseBody.success) {
            throw new Error(responseBody.message);
        }
        yield call(cbSuccess);

        yield put(updateTasksSuccess(responseBody));

    } catch (error) {
        yield put(updateTasksFailure(error));
    }
}

export function* onFetchTasksStart() {
    yield takeLatest(TaskActionTypes.FETCH_TASKS_START, fetchUserTasks)
}
export function* onFetchTaskByIdStart() {
    yield takeLatest(TaskActionTypes.FETCH_TASK_START, fetchTaskById)
}

export function* onCreateTaskByStart() {
    yield takeLatest(TaskActionTypes.CREATE_TASK_START, createTask)
}

export function* onDeleteTask() {
    yield takeLatest(TaskActionTypes.DELETE_TASK_START, deleteTask)
}

export function* onUpdateTask() {
    yield takeLatest(TaskActionTypes.UPDATE_TASK_START, updateTask)
}




export function* taskSagas() {
    yield all([
        call(onFetchTasksStart),
        call(onFetchTaskByIdStart),
        call(onCreateTaskByStart),
        call(onUpdateTask),
        call(onDeleteTask),

    ])
}