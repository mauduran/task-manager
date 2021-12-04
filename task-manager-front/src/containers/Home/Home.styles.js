import { makeStyles } from '@mui/styles';

export const useHomeStyles = makeStyles((theme) => ({
    HomeContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "0 auto",
        width: "80%",
    },
    title: {
        marginLeft: "30px",
        fontSize: "48px",
    }

}));