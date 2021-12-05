import { Button, Chip, Fab, Paper } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import { useTaskItemStyles } from './TaskItem.styles';
import { connect } from 'react-redux';
import { deleteTasksStart, updateTaskStart } from '../../redux/task/task.actions';
import { STATUS_TYPES } from '../../constants/task.constants';
import { openErrorNotificationStart, openSuccessNotificationStart } from '../../redux/notification/notification.actions';

const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: "2-digit", minute: "2-digit" };

const TaskItem = ({ task, updateTask, deleteTask, openSuccessNotification }) => {
    const [status, setStatus] = useState(null);
    const classes = useTaskItemStyles();
    const navigate = useNavigate();

    const goToTaskDetail = () => {
        navigate(`/task/${task.id}`);
    }

    const handleCompleteTask = () => {
        updateTask(task.id, { status: STATUS_TYPES.COMPLETED }, () => {
            openSuccessNotification("Task completed!");
            setStatus(STATUS_TYPES.COMPLETED);
        });
    }

    const handleUncompleteTask = () => {
        updateTask(task.id, { status: STATUS_TYPES.PENDING }, () => {
            openSuccessNotification("Task not completed anymore");
            setStatus(STATUS_TYPES.PENDING);
        });
    }

    const handleDeleteTask = () => {

        // eslint-disable-next-line no-restricted-globals
        const sureToDelete = confirm("Do you really want to delete this task?");

        if (sureToDelete)
            deleteTask(task.id)
    }

    return (
        <Paper key={task.id} elevation={16} className={classes.taskItemCard} >
            <h3 className={classes.taskTitle} onClick={goToTaskDetail}>{task.title}</h3>

            <div className={classes.taskItemInfo}>

                <div className={classes.taskItemInfoDetail} onClick={goToTaskDetail}>

                    <span className={classes.taskDate}>{new Date(task.dateOfDelivery).toLocaleString("en-US", options)}</span>

                    <p className={classes.taskItemDescription}>{task.description}</p>

                    <div className={classes.tagList}>
                        {task.tags.map((tag) => <Chip key={tag} label={tag} color="primary" sx={{ marginBottom: "5px", marginLeft: "5px" }} />)}
                    </div>
                </div>
                <div className={classes.icons}>
                    {
                        (status === STATUS_TYPES.PENDING || (!status && task.status === STATUS_TYPES.PENDING)) ?
                            <Button variant="contained" aria-label="complete" size="large" onClick={handleCompleteTask}>
                                Set as complete
                            </Button> :
                            <Fab color="primary" aria-label="un complete" onClick={handleUncompleteTask}>
                                <CheckIcon />
                            </Fab>
                    }
                    <Button variant="contained" color="secondary" aria-label="add" size="large" onClick={handleDeleteTask}>
                        <CloseIcon sx={{ mr: 1 }} />
                        Delete
                    </Button>
                </div>
            </div>

        </Paper>
    )
}

const mapDispatchToProps = dispatch => ({
    updateTask: (id, updatedTaskValues, cbSuccess) => dispatch(updateTaskStart(id, updatedTaskValues, cbSuccess)),
    deleteTask: (id) => dispatch(deleteTasksStart(id)),
    openSuccessNotification: (message) => dispatch(openSuccessNotificationStart(message)),
    openErrorNotification: (message) => dispatch(openErrorNotificationStart(message))
})

export default connect(null, mapDispatchToProps)(TaskItem);
