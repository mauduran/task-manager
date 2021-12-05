import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import WithLoadingSpinner from '../../common/WithLoadingSpinner/WithLoadingSpinner';
import { selectErrorMessage, selectIsCreatingTask } from '../../redux/task/task.selectors';
import TaskDetailForm from '../TaskDetailForm/TaskDetailForm';

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCreatingTask,
    errorMessage: selectErrorMessage
})

const CreateTaskContainer = compose(
    connect(mapStateToProps),
    WithLoadingSpinner
)(TaskDetailForm);

export default CreateTaskContainer;
