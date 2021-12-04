import React from 'react';

import CircularProgress from '@mui/material/CircularProgress';

const WithLoadingSpinner = WrappedComponent => ({ isLoading, ...otherProps }) => {
    return isLoading ? (
        <CircularProgress size="4rem" />
    ) : <WrappedComponent {...otherProps} />
}

export default WithLoadingSpinner;