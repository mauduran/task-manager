import { createSelector } from 'reselect';

const selectUser = state => state.user;

export const selectCurrentUser = createSelector(
    selectUser,
    (user) => user.currentUser ? user.currentUser.username : null
);

export const selectUserToken = createSelector(
    selectUser,
    (user) => user.currentUser ? user.currentUser.token : null
);

export const selectIsLogged = createSelector(
    selectUser,
    (user) => !!user.currentUser
);
