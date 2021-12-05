import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Logo from './nextline-logo-nobg.png';
import { useHeaderStyles } from './AppHeader.styles';
import { selectIsLogged } from '../../redux/user/user.selectors';
import { signOutStart } from '../../redux/user/user.actions';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router';
import { createStructuredSelector } from 'reselect';

const AppHeader = ({ signOut, isLoggedIn }) => {
    const classes = useHeaderStyles();
    const navigate = useNavigate();

    const handleLogout = () => {
        signOut();
    }

    const goToSignInPage = () => {
        navigate("signin", { replace: true });
    }

    return (
        <AppBar color="primary" position="static">
            <Toolbar className={classes.customColor} >
                <div className={classes.websiteName} onClick={()=>navigate("/")}>
                    <img src={Logo} alt="Nextline-logo" className={classes.logo} />
                    <Typography variant="h6" className={classes.title} >
                        Task Manager
                    </Typography>
                </div>
                {
                    isLoggedIn ?
                        <Button variant="text" onClick={handleLogout} className={classes.button}>Sign Out</Button> :
                        <Button variant="text" onClick={goToSignInPage} className={classes.button}>Sign In</Button>
                }
            </Toolbar>
        </AppBar>
    )
}

const mapDispatchToProps = dispatch => ({
    signOut: () => dispatch(signOutStart())
})
const mapStateToProps = createStructuredSelector({
    isLoggedIn: selectIsLogged
})

export default connect(mapStateToProps, mapDispatchToProps)(AppHeader);

