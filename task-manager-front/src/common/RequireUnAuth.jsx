import React from 'react'
import { connect } from 'react-redux';
import { Navigate, useLocation } from "react-router-dom";
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../redux/user/user.selectors';

const RequireUnAuth = ({ currentUser, children }) => {
    const location = useLocation();

    let to = (location.state && location.state.from && location.state.from.pathname) ? location.state.from.pathname : "/";

    return (currentUser) ? <Navigate to={to} /> : children;
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
})

export default connect(mapStateToProps, null)(RequireUnAuth);
