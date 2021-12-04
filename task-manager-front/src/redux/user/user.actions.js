import UserActionTypes from './user.types';

export const checkUserSession = () => ({
    type: UserActionTypes.CHECK_USER_SESSION
})

export const signInSuccess = (loginResponse) => ({
    type: UserActionTypes.SIGN_IN_SUCCESS,
    payload: loginResponse
})

export const signInFailure = (error) => ({
    type: UserActionTypes.SIGN_IN_FAILURE,
    payload: error
})

export const signInStart = usernameAndPassword => ({
    type: UserActionTypes.SIGN_IN_START,
    payload: usernameAndPassword
})

export const signOutStart = () => ({
    type: UserActionTypes.SIGN_OUT_START
})

export const signOutSuccess = () => ({
    type: UserActionTypes.SIGN_OUT_SUCCESS
})

export const signOutFailure = (error) => ({
    type: UserActionTypes.SIGN_OUT_FAILURE,
    payload: error
})

export const signUpStart = (userCredentials) => ({
    type: UserActionTypes.SIGN_UP_START,
    payload: userCredentials
})

export const signUpSuccess = ( response ) => ({
    type: UserActionTypes.SIGN_UP_SUCCESS,
    payload: response
})

export const signUpFailure = (error) => ({
    type: UserActionTypes.SIGN_UP_FAILURE,
    payload: error
})