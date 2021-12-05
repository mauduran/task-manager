import { Paper } from '@mui/material'
import React from 'react'
import { connect } from 'react-redux';
import { useNavigate } from 'react-router';

import CreateTaskContainer from '../../components/CreateTaskContainer/CreateTaskContainer';
import { openSuccessNotificationStart } from '../../redux/notification/notification.actions';
import { createTaskStart } from '../../redux/task/task.actions';
import { useCreateTaskPageStyles } from './CreateTaskPage.styles'

const CreateTaskPage = ({createTask, openSuccessNotification}) => {
    const classes = useCreateTaskPageStyles();
    const navigate = useNavigate();

    const emptyTask = {
        title: "",
        description: "",
        dateOfDelivery: new Date(),
        comments: "",
        tags: [],
        responsiblePerson: "",
    }

    const createNewTaskFn = (task) => {
        createTask(task) 
        openSuccessNotification("Task Created");
        navigate("/");
    }

    return (
        <Paper className={classes.CreateTaskContainer} elevation={24}>
            <h1>Create new Task</h1>
            <CreateTaskContainer task={emptyTask} onSubmitFn={createNewTaskFn} submitBtnTitle="Create Task" />
        </Paper >
    )
}

const mapDispatchToProps = dispatch => ({
    createTask: (task) => dispatch(createTaskStart(task)),
    openSuccessNotification: (message) => dispatch(openSuccessNotificationStart(message))
})

export default connect(null, mapDispatchToProps)(CreateTaskPage)
