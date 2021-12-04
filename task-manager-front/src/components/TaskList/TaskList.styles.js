import { makeStyles } from '@mui/styles';

export const useTaskListStyles = makeStyles((theme) => ({
    taskListContainer: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
    },

    spaceFiller: {
        width: "calc(50% - 20px)",
        margin: "10px",
    }
}));