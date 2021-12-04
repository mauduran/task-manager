import { makeStyles } from '@mui/styles';

export const useTaskItemStyles = makeStyles((theme) => ({
    taskItemCard: {
        width: "calc(50% - 20px)",
        boxSizing: "border-box",
        minWidth: "400px",
        padding: "15px 30px",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        margin: "10px",
    },
    taskItemContainer: {
        display: "flex",
        flexDirection: "column",
    },
    taskItemInfo: {
        display: "flex",
        flexDirection: "row",
        flex: 1,
    },

    taskItemInfoDetail: {
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        overflow: "none",
        flex: 1,
    },

    tagList: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
    },
    taskItemDescription: {
        textOverflow: "ellipsis",
        height: "40px",
        width: "100%",
        overflow: "hidden",
        fontSize: "18px",
        margin: "10px 0",
    },
    taskTitle: {
        width: "100%",
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
        paddingLeft: "5px",
        alignItems: "center",
    }

}));