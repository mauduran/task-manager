import { makeStyles } from '@mui/styles';

export const useCreateTaskPageStyles = makeStyles((theme) => ({
    CreateTaskContainer: {
        padding: "15px 30px",
        width: "70%",
        minWidth: "470px",
        margin: "20px auto",
        height: "calc(100% - 120px)",
        overflowX: "scroll",
    },
    BackButton: {
        margin: "10px 0 0 10%",
    }
}));