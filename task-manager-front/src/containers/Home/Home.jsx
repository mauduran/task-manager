import { Button, Stack } from '@mui/material';
import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import TaskListContainer from '../../components/TaskList/TaskListContainer';
import { fetchTasksStart } from '../../redux/task/task.actions';
import { useHomeStyles } from './Home.styles';
import LoopIcon from '@mui/icons-material/Loop';
import { useNavigate } from 'react-router';


const Home = ({ fetchTasks }) => {
    const classes = useHomeStyles(Home);
    const navigate = useNavigate();

    useEffect(() => {
        fetchTasks();
    }, [fetchTasks]);

    return (
        <div className={classes.Home}>
            <h1 className={classes.title}>These are your tasks:</h1>
            <Stack className={classes.actionButtons} direction="row" spacing={1}>
                <Button variant="contained" color="success" onClick={()=>{navigate("/new-task")}}>Add Task</Button>
                <Button variant="contained" startIcon={<LoopIcon />} onClick={fetchTasks}>Refresh</Button>
            </Stack>
            <div className={classes.HomeContainer}>
                <TaskListContainer />
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    fetchTasks: () => { return dispatch(fetchTasksStart()) }
})

export default connect(null, mapDispatchToProps)(Home);
