import { createSelector } from 'reselect';

const selectTaskState = state => state.task;

export const selectTasks = createSelector(
    selectTaskState,
    (task) => task.tasks 
);

export const selectCurrentTask = createSelector(
    selectTaskState,
    (task) => task.currentTask
);

export const selectIsCreatingTask = createSelector(
    selectTaskState,
    (task) => task.isCreating
);

export const selectIsFetchingTasks = createSelector(
    selectTaskState,
    (task) => task.isFetching
);

export const selectIsUpdatingTasks = createSelector(
    selectTaskState,
    (task) => task.isUpdating
);

export const selectIsDeletingTasks = createSelector(
    selectTaskState,
    (task) => task.isDeleting
);

export const selectErrorMessage = createSelector(
    selectTaskState,
    (task) => task.errorMessage
);
