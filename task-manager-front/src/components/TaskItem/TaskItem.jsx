import { Chip, Fab, Paper, Stack } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import { useTaskItemStyles } from './TaskItem.styles';
import { connect } from 'react-redux';
import { deleteTasksStart, updateTaskStart } from '../../redux/task/task.actions';
import { STATUS_TYPES } from '../../constants/task.constants';

const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: "2-digit", minute: "2-digit" };

const TaskItem = ({ task, updateTask, deleteTask }) => {
    const [status, setStatus] = useState(null);
    const classes = useTaskItemStyles();
    const navigate = useNavigate();

    const goToTaskDetail = () => {
        navigate(`/task/${task.id}`);
    }

    const completeTask = () => {
        updateTask(task.id, { status: STATUS_TYPES.COMPLETED });
        setStatus(STATUS_TYPES.COMPLETED);
    }

    const uncompleteTask = () => {
        updateTask(task.id, { status: STATUS_TYPES.PENDING });
        setStatus(STATUS_TYPES.PENDING);
    }

    const handleDeleteTask = () => {
        // eslint-disable-next-line no-restricted-globals
        const sureToDelete = confirm("Do you really want to delete this task?");

        if(sureToDelete)
            deleteTask(task.id)
    }

    return (
        <Paper key={task.id} elevation={16} className={classes.taskItemCard} >
            <div className={classes.taskItemInfo} onClick={goToTaskDetail}>
                <h3 className={classes.taskTitle}>{task.title}</h3>

                <span className={classes.taskDate}>{new Date(task.dateOfDelivery).toLocaleString("en-US", options)}</span>

                <p className={classes.taskItemDescription}>{task.description}</p>

                <Stack direction="row" spacing={1}>
                    {task.tags.map((tag) => <Chip key={tag} label={tag} color="primary" />)}
                </Stack>
            </div>
            <div className={classes.icons}>
                {
                    (status === STATUS_TYPES.PENDING || (!status && task.status === STATUS_TYPES.PENDING)) ?
                        <Fab variant="extended" aria-label="complete" onClick={completeTask}>
                            Set as complete
                        </Fab> :
                        <Fab color="primary" aria-label="un complete" onClick={uncompleteTask}>
                            <CheckIcon />
                        </Fab>

                }
                <Fab color="secondary" variant="extended" aria-label="add" onClick={handleDeleteTask}>
                    <CloseIcon sx={{ mr: 1 }} />
                    Delete
                </Fab>
            </div>
        </Paper>
    )
}

const mapDispatchToProps = dispatch => ({
    updateTask: (id, updatedTaskValues) => dispatch(updateTaskStart(id, updatedTaskValues)),
    deleteTask: (id) => dispatch(deleteTasksStart(id)),
})

export default connect(null, mapDispatchToProps)(TaskItem);
