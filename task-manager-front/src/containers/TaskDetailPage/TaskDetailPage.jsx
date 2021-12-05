import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { useParams } from 'react-router';
import { fetchTaskByIdStart } from '../../redux/task/task.actions';
import TaskDetailContainer from '../../components/TaskDetail/TaskDetailContainer';

const TaskDetailPage = ({ fetchTask }) => {
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            fetchTask(id);
        }
    }, [id, fetchTask]);
    return (
        <TaskDetailContainer />
    )
}

const mapDispatchToProps = dispatch => ({
    fetchTask: (id) => dispatch(fetchTaskByIdStart(id)),
})

export default connect(null, mapDispatchToProps)(TaskDetailPage);
