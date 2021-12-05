import { makeStyles } from '@mui/styles';

export const useTaskDetailStyles = makeStyles((theme) => ({
    TaskDetailContainer: {
        padding: "15px 30px",
        width: "70%",
        minWidth: "470px",
        margin: "20px auto",
        height: "calc(100% - 120px)",
        overflowX: "scroll",
    },
    icons: {
        width: "320px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        marginLeft: "auto",
        alignItems: "center",
        "& *:last-child": {
            marginLeft: "20px",
        },
    },
    header: {
        display: "flex"
    },
    BackButton: {
        margin: "10px 0 0 10%",
    }
}));