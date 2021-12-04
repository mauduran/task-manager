import TaskActionTypes from "./task.types";

const INITIAL_STATE = {
    tasks: null,
    currentTask: null,
    isCreating: false,
    isFetching: false,
    isUpdating: false,
    isDeleting: false,
    errorMessage: null,
}

const taskReducer = (state = INITIAL_STATE, action = {}) => {
    switch (action.type) {
        case TaskActionTypes.CLOSE_ERROR_DIALOG:
            return { ...state, errorMessage: null }

        case TaskActionTypes.CREATE_TASK_START:
            return { ...state, isCreating: true, errorMessage: false }

        case TaskActionTypes.CREATE_TASK_SUCCESS:
            return { ...state, isCreating: false, errorMessage: null }

        case TaskActionTypes.CREATE_TASK_FAILURE:
            return { ...state, isCreating: false, errorMessage: action.payload }

        case TaskActionTypes.DELETE_TASK_START:
            return { ...state, isDeleting: true, errorMessage: null }

        case TaskActionTypes.DELETE_TASK_SUCCESS:
            return { ...state, isDeleting: false, errorMessage: null }

        case TaskActionTypes.DELETE_TASK_FAILURE:
            return { ...state, isDeleting: false, errorMessage: action.payload }

        case TaskActionTypes.UPDATE_TASK_START:
            return { ...state, isUpdating: true, errorMessage: null }

        case TaskActionTypes.UPDATE_TASK_SUCCESS:
            return { ...state, isUpdating: false, errorMessage: null }

        case TaskActionTypes.UPDATE_TASK_FAILURE:
            return { ...state, isUpdating: false, errorMessage: action.payload }

        case TaskActionTypes.FETCH_TASKS_START:
        case TaskActionTypes.FETCH_TASK_START:
            return { ...state, isFetching: true, errorMessage: null }

        case TaskActionTypes.FETCH_TASKS_FAILURE:
        case TaskActionTypes.FETCH_TASK_FAILURE:
            return { ...state, isFetching: false, errorMessage: action.payload }

        case TaskActionTypes.FETCH_TASKS_SUCCESS:
            return { ...state, isFetching: false, errorMessage: null, tasks: action.payload }

        case TaskActionTypes.FETCH_TASK_SUCCESS:
            return { ...state, isFetching: false, errorMessage: null, currentTask: action.payload }

        default:
            return state;
    }
}

export default taskReducer;