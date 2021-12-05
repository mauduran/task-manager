import { makeStyles } from '@mui/styles';

export const useTaskDetailFormStyles = makeStyles((theme) => ({
    TaskDetailForm: {
        margin: "0 auto",
        padding: "5px 30px",
        width: "90%",
        height: "auto",
        display: "flex",
        flexDirection: "column",
        "& *": {
            margin: "5px 0"
        }
    },
    noMargin: {
        margin: 0,
    },
    tagInput: {
        display: "flex",
        margin: "10px 0 0 0",
        "& :first-child": {
            flex: 1,
        },
    },
    submitBtn: {
        marginLeft: "auto",
    },

    tagList: {
        margin: 0,
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "flex-start"
    }

}));