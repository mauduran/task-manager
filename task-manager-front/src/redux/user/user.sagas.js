import { takeLatest, put, all, call } from 'redux-saga/effects';

import UserActionTypes from './user.types';

import { signInSuccess, signInFailure, signOutSuccess, signOutFailure, signUpFailure, signUpSuccess } from './user.actions';

import { openErrorNotificationStart } from '../notification/notification.actions';

export function* isUserAuthenticated() {
    try {
        const token = localStorage.getItem("token");
        const username = localStorage.getItem("username");

        if (!token || !username) return;

        yield put(signInSuccess({ token: token, username: username }));
    } catch (error) {
        yield put(signInFailure(error))
    }
}

export function* signIn({ payload: { username, password } }) {
    const body = { username, password };
    try {
        const response = yield fetch("/user/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body),
        })

        const responseBody = yield response.json();

        if (!responseBody.success) {
            yield put(openErrorNotificationStart(responseBody.message))
            throw new Error(responseBody.message);
        }
        const { token, username } = responseBody;
        localStorage.setItem('token', token);
        localStorage.setItem('username', username);

        yield put(signInSuccess({ token, username }));
    } catch (error) {
    
        yield put(signInFailure(error));
    }
}

export function* signOut() {
    try {
        localStorage.clear();
        yield put(signOutSuccess())
    } catch (error) {
        yield put(signOutFailure(error))
    }
}

export function* signUp({ payload: { name, username, password } }) {
    try {
        const response = yield fetch("/user", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, username, password }),
        })

        const responseBody = yield response.json();

        if (!responseBody.success) {
            yield put(openErrorNotificationStart(responseBody.message))
            throw new Error(responseBody.message);
        }

        yield put(signUpSuccess({ username, password }));

    } catch (error) {
        yield put(signUpFailure(error))
    }
}

export function* onCheckUserSession() {
    yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated)
}

export function* onSignInStart() {
    yield takeLatest(UserActionTypes.SIGN_IN_START, signIn)
}

export function* onSignOutStart() {
    yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut);
}

export function* onSignUpStart() {
    yield takeLatest(UserActionTypes.SIGN_UP_START, signUp);
}

export function* onSignUpSuccess() {
    yield takeLatest(UserActionTypes.SIGN_UP_SUCCESS, signIn);
}

export function* userSagas() {
    yield all([
        call(onCheckUserSession),
        call(onSignInStart),
        call(onSignInStart),
        call(onSignOutStart),
        call(onSignUpStart),
        call(onSignUpSuccess),
    ])
}