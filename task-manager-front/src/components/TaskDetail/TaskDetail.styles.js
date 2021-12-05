import { makeStyles } from '@mui/styles';

export const useTaskDetailStyles = makeStyles((theme) => ({
    TaskDetailContainer: {
        padding: "15px 30px",
        width: "70%",
        minWidth: "470px",
        margin: "60px auto",
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
}));