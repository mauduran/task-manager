import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';
import { Button, Fab, Paper } from '@mui/material';
import { useTaskDetailStyles } from './TaskDetail.styles';
import { STATUS_TYPES } from '../../constants/task.constants';
import TaskDetailForm from '../TaskDetailForm/TaskDetailForm';
import { fetchTaskByIdStart, updateTaskStart } from '../../redux/task/task.actions';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentTask } from '../../redux/task/task.selectors';

const TaskDetail = ({ fetchTask, deleteTask, updateTask, openSuccessNotification, task, fetchError }) => {
    const [status, setStatus] = useState(STATUS_TYPES.PENDING);
    const classes = useTaskDetailStyles();

    const handleCompleteTask = () => {
        updateTask(task._id, { status: STATUS_TYPES.COMPLETED }, () => {
            openSuccessNotification("Task completed!");
            setStatus(STATUS_TYPES.COMPLETED);
        });
    }

    const handleUncompleteTask = () => {
        updateTask(task._id, { status: STATUS_TYPES.PENDING }, () => {
            openSuccessNotification("Task not completed anymore");
            setStatus(STATUS_TYPES.PENDING);
        });
    }

    const updateTaskValues = (task) => {
        updateTask(task._id, task, () => {
            openSuccessNotification("Task Updated");
            fetchTask(task._id);
        })
    }
    const handleDeleteTask = () => {
        // eslint-disable-next-line no-restricted-globals
        const sureToDelete = confirm("Do you really want to delete this task?");

        if (sureToDelete)
            deleteTask(task._id)
    }

    if (fetchError) {
        return <h1>Unable to get task at this moment.</h1>
    } else if (task) {
        return (
            <Paper className={classes.TaskDetailContainer} elevation={24}>
                <div className={classes.header}>
                    <h1>Task Detail </h1>
                    <div className={classes.icons}>
                        {
                            (status === STATUS_TYPES.PENDING) ?
                                <Button variant="contained" aria-label="complete" onClick={handleCompleteTask}>
                                    Set as complete
                                </Button> :
                                <Fab color="primary" variant="contained" aria-label="un complete" onClick={handleUncompleteTask}>
                                    <CheckIcon />
                                </Fab>
                        }

                        <Button color="secondary" variant="contained" aria-label="add" onClick={handleDeleteTask}>
                            <CloseIcon sx={{ mr: 1 }} />
                            Delete
                        </Button>
                    </div>
                </div>
                <TaskDetailForm task={task} onSubmitFn={updateTaskValues} />
            </Paper>
        )
    }
    return null;
}

const mapStateToProps = createStructuredSelector({
    task: selectCurrentTask,
})

const mapDispatchToProps = dispatch => ({
    fetchTask: (id) => dispatch(fetchTaskByIdStart(id)),
    updateTask: (id, task, cbSuccess) => dispatch(updateTaskStart(id, task, cbSuccess)),
})


export default connect(mapStateToProps, mapDispatchToProps)(TaskDetail);
