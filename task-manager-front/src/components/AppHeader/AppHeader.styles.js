import { makeStyles } from '@mui/styles';

export const useHeaderStyles = makeStyles((theme) => ({
    menuButton: {
        marginRight: 10
    },
    title: {
        flexGrow: 1,
        textAlign: "left"
    },
    customColor: {
        backgroundColor: "#282c34"
    },
    logo: {
        height: "30px",
        marginRight: "10px"
    },
    button: {
        "&.MuiButton-text": {
            color: "white"
          },
    }
}));