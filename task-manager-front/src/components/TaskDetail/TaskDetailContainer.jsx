import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import WithLoadingSpinner from '../../common/WithLoadingSpinner/WithLoadingSpinner';
import { openErrorNotificationStart, openSuccessNotificationStart } from '../../redux/notification/notification.actions';
import { deleteTasksStart } from '../../redux/task/task.actions';
import { selectFetchError, selectIsFetchingTasks } from '../../redux/task/task.selectors';
import TaskDetail from './TaskDetail';

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsFetchingTasks,
    fetchError: selectFetchError,
})

const mapDispatchToProps = dispatch => ({
    deleteTask: (id) => dispatch(deleteTasksStart(id)),
    openSuccessNotification: (message) => dispatch(openSuccessNotificationStart(message)),
    openErrorNotification: (message) => dispatch(openErrorNotificationStart(message))
})


const TaskDetailContainer = compose(
    connect(mapStateToProps, mapDispatchToProps),
    WithLoadingSpinner
)(TaskDetail);

export default TaskDetailContainer;
