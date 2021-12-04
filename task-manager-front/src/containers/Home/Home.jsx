import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import TaskListContainer from '../../components/TaskList/TaskListContainer';
import { fetchTasksStart } from '../../redux/task/task.actions';
import { useHomeStyles } from './Home.styles';


const Home = ({ fetchTasks }) => {
    const classes = useHomeStyles(Home);

    useEffect(() => {
        fetchTasks();
    }, [fetchTasks]);

    return (
        <div>
            <h1 className={classes.title}>These are your tasks:</h1>
            <div className={classes.HomeContainer}>
                <TaskListContainer />
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    fetchTasks: () => { return dispatch(fetchTasksStart())}
})

export default connect(null, mapDispatchToProps)(Home);
