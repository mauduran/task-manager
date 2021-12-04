import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import WithLoadingSpinner from '../../common/WithLoadingSpinner/WithLoadingSpinner';
import { selectIsFetchingTasks, selectTasks } from '../../redux/task/task.selectors';
import TaskList from './TaskList';

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsFetchingTasks,
    tasks: selectTasks,
})

const TaskListContainer = compose(
    connect(mapStateToProps),
    WithLoadingSpinner
)(TaskList);

export default TaskListContainer
