import React from 'react';
import TaskItem from '../TaskItem/TaskItem';
import { useTaskListStyles } from './TaskList.styles';

const TaskList = ({ tasks }) => {
    const classes = useTaskListStyles();

    if (!tasks) {
        return null;
    } else if (tasks.length) {
        return (
            <div className={classes.taskListContainer}>
                {tasks.map((task) => <TaskItem key={task.id} task={task} />)}
            </div>
        )
    }
    return <p>You have no tasks.</p>
}

export default TaskList;
