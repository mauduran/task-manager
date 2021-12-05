import TaskActionTypes from './task.types';

export const createTaskStart = (task, cbSuccess) => ({
    type: TaskActionTypes.CREATE_TASK_START,
    payload: {task, cbSuccess},
})

export const createTaskSuccess = (response) => ({
    type: TaskActionTypes.CREATE_TASK_SUCCESS,
    payload: response
});

export const createTaskFailure = (error) => ({
    type: TaskActionTypes.CREATE_TASK_FAILURE,
    payload: error,
});

export const fetchTaskByIdStart = (id) => ({
    type: TaskActionTypes.FETCH_TASK_START,
    payload: id,
})

export const fetchTaskByIdSuccess = (task) => ({
    type: TaskActionTypes.FETCH_TASK_SUCCESS,
    payload: task
});

export const fetchTaskByIdFailure = (error) => ({
    type: TaskActionTypes.FETCH_TASK_FAILURE,
    payload: error,
});

export const fetchTasksStart = () => ({
    type: TaskActionTypes.FETCH_TASKS_START,
})

export const fetchTasksSuccess = (tasks) => ({
    type: TaskActionTypes.FETCH_TASKS_SUCCESS,
    payload: tasks
});

export const fetchTasksFailure = (error) => ({
    type: TaskActionTypes.FETCH_TASKS_FAILURE,
    payload: error,
});

export const updateTaskStart = (id, task, cbSuccess) => ({
    type: TaskActionTypes.UPDATE_TASK_START,
    payload: { id, task, cbSuccess },
})

export const updateTasksSuccess = (response) => ({
    type: TaskActionTypes.UPDATE_TASK_SUCCESS,
    payload: response,
});

export const updateTasksFailure = (error) => ({
    type: TaskActionTypes.UPDATE_TASK_FAILURE,
    payload: error,
});

export const deleteTasksStart = (id, cbSuccess) => ({
    type: TaskActionTypes.DELETE_TASK_START,
    payload: { id },
})

export const deleteTasksSuccess = (id) => ({
    type: TaskActionTypes.DELETE_TASK_SUCCESS,
    payload: id,
});

export const deleteTasksFailure = (error) => ({
    type: TaskActionTypes.DELETE_TASK_FAILURE,
    payload: error,
});

export const completeTaskStart = (error) => ({
    type: TaskActionTypes.DELETE_TASK_FAILURE,
    payload: error,
});

export const closeErrorDialog = () => ({
    type: TaskActionTypes.CLOSE_ERROR_DIALOG
});
