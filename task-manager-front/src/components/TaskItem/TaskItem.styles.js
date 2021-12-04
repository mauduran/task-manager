import { makeStyles } from '@mui/styles';

export const useTaskItemStyles = makeStyles((theme) => ({
    taskItemCard: {
        width: "100%",
        height: "140px",
        padding: "15px 30px",
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
    },
    taskItemInfo: {
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        flex: 1,
    },
    taskItemDescription: {
        flex: 1,
        textOverflow: "ellipsis",
        fontSize: "18px",
        margin: "10px 0",
    },
    taskTitle: {
        marginBottom: "5px",
        fontSize: "28px",
        margin: 0,
    },
    taskDate: {
        fontSize: "14px",
    },
    icons: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
    }

}));