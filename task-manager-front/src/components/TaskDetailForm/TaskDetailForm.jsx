import React, { useState } from 'react'
import { useTaskDetailFormStyles } from './TaskDetailForm.styles';
import { TextField, Button, Chip } from '@mui/material';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';

const TaskDetailForm = ({ task, onSubmitFn, submitBtnTitle }) => {
    const [taskValues, setTaskValues] = useState(task);
    const [tagInputVal, setTagInputVal] = useState("");
    const classes = useTaskDetailFormStyles();

    const handleSubmit = async event => {
        event.preventDefault();

        onSubmitFn(taskValues);
    }

    const handleChange = event => {
        const { value, name } = event.target
        setTaskValues(prevVals => ({ ...prevVals, [name]: value }))

    }

    const handleDateChange = (newDate) => {
        setTaskValues(prevVals => ({ ...prevVals, dateOfDelivery: newDate }));
    }

    const onTagInputChange = (event) => {
        if (event.key === "Enter") {
            event.preventDefault();
            addTag();
        }
    }

    const handleTagInputChange = (event) => {
        setTagInputVal(event.target.value);
    }

    const addTag = () => {
        if (tagInputVal) {
            setTaskValues(prevVals => ({ ...prevVals, tags: [...new Set([...prevVals.tags, tagInputVal])] }))
            setTagInputVal("");
        }
    }

    const deleteTag = (tagName) => {
        setTaskValues(prevVals => ({ ...prevVals, tags: prevVals.tags.filter((tag) => tag !== tagName) }));
    }

    return (
        <form className={classes.TaskDetailForm} onSubmit={handleSubmit}>
            <TextField
                required
                name="title"
                value={taskValues.title}
                onChange={handleChange}
                id="task-title"
                placeholder="Title"
                label="Title"
            />

            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DateTimePicker
                    label="Date of Delivery"
                    value={taskValues.dateOfDelivery}
                    onChange={handleDateChange}
                    renderInput={(params) => <TextField {...params} />}
                />
            </LocalizationProvider>

            <TextField
                required
                id="description-input"
                name="description"
                label="Description"
                onChange={handleChange}
                multiline
                rows={4}
                value={taskValues.description}
            />

            <TextField
                name="responsiblePerson"
                value={taskValues.responsiblePerson}
                onChange={handleChange}
                id="responsiblePerson-input"
                placeholder="John Doe"
                label="Responsible Person"
            />

            <div>
                <h4 className={classes.noMargin}>Tags</h4>
                <div className={classes.tagInput}>
                    <TextField
                        name="tag"
                        value={tagInputVal}
                        onChange={handleTagInputChange}
                        onKeyDown={onTagInputChange}
                        id="tag-input"
                        placeholder="Tag"
                        label="New tag"
                    />
                    <Button aria-label="add" onClick={addTag}>
                        Add
                    </Button>
                </div>
                <div className={classes.tagList}>
                    {taskValues.tags.map((tag) => <Chip
                        key={tag}
                        label={tag}
                        color="primary"
                        sx={{ marginBottom: "5px", marginLeft: "5px" }}
                        onDelete={() => { deleteTag(tag) }}
                    />)}
                </div>
            </div>

            <TextField
                id="comments-input"
                name="comments"
                label="Comments"
                onChange={handleChange}
                multiline
                rows={4}
                value={taskValues.comments}
            />

            <div className={classes.submitBtn}>
                <Button type="submit" variant="contained" size="large">
                    {submitBtnTitle}
                </Button>
            </div>

        </form>
    )
}

export default TaskDetailForm
