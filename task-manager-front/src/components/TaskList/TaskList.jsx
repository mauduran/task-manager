import React from 'react';
import TaskItem from '../TaskItem/TaskItem';
import { useTaskListStyles } from './TaskList.styles';

const TaskList = ({ tasks, fetchError }) => {
    const classes = useTaskListStyles();

    if (fetchError) {
        return <h2>Could not get tasks</h2>
    }
    if (!tasks) {
        return null;
    } else if (tasks.length) {
        return (
                <div className={classes.taskListContainer}>
                    {tasks.map((task) => <TaskItem key={task.id} task={task} />)}
                    {tasks.length % 2 === 1 && <div className={classes.spaceFiller}></div>}
                </div>
        )
    }
    return <h2>You have no tasks.</h2>
}

export default TaskList;
