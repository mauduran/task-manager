import { makeStyles } from '@mui/styles';

export const useHomeStyles = makeStyles((theme) => ({
    Home: {
        flex: 1,
    },

    HomeContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "0 auto",
        width: "90%",
        flex: 1,
    },
    title: {
        marginLeft: "5%",
        fontSize: "48px",
    },

    actionButtons: {
        margin: "30px 0",
        marginLeft: "5%",
    }

}));