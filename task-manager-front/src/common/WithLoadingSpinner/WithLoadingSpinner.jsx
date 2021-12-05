import React from 'react';

import CircularProgress from '@mui/material/CircularProgress';
import "./WithLoadingSpinner.css";

const WithLoadingSpinner = WrappedComponent => ({ isLoading, ...otherProps }) => {

    return isLoading ? (
        <div className="centered">
            <CircularProgress size="4rem" />
        </div>
    ) : <WrappedComponent {...otherProps} />
}

export default WithLoadingSpinner;