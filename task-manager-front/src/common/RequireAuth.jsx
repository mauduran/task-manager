import React from 'react'
import { connect } from 'react-redux';
import { useLocation, Navigate } from "react-router-dom";
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../redux/user/user.selectors';

const RequireAuth = ({ children, currentUser }) => {
    let location = useLocation();

    if (currentUser) {
        return children;
    }
    return <Navigate to="/signin" state={{ from: location }} />

}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
})

export default connect(mapStateToProps, null)(RequireAuth);
