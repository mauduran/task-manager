import React from 'react'
import { connect } from 'react-redux';
import { Navigate } from "react-router-dom";
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../redux/user/user.selectors';

const RequireUnAuth = ({currentUser, children}) => {
    return (currentUser)? <Navigate to="/" /> :  children;
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
})

export default connect(mapStateToProps, null)(RequireUnAuth);
