import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Alert, AlertTitle, Snackbar } from '@mui/material';

import './App.css';
import { checkUserSession } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';
import SignInAndSignUp from './containers/SignInAndSignUp/SignInAndSignUp';
import RequireAuth from './common/RequireAuth';
import RequireUnAuth from './common/RequireUnAuth';
import AppHeader from './components/AppHeader/AppHeader';
import Home from './containers/Home/Home';
import { selectNotificationState } from './redux/notification/notification.selectors';
import { closeNotification } from './redux/notification/notification.actions';
import TaskDetailPage from './containers/TaskDetailPage/TaskDetailPage';
import CreateTaskPage from './containers/CreateTaskPage/CreateTaskPage';

function App({ checkUserSession, notificationState, closeNotification }) {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div className="App">
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        autoHideDuration={3000}
        onClose={closeNotification}
        open={notificationState.open} >
        <Alert onClose={closeNotification} severity={notificationState.severity}>
          <AlertTitle>{notificationState.title}</AlertTitle>
          {notificationState.message}
        </Alert>
      </Snackbar>
      <AppHeader />

      <Routes>
        <Route path='/' element={<RequireAuth><Home /></RequireAuth>} />
        <Route path='/task/:id' element={<RequireAuth><TaskDetailPage/></RequireAuth>} />
        <Route path='/new-task' element={<RequireAuth><CreateTaskPage/></RequireAuth>} />
        <Route exact path='/signin' element={<RequireUnAuth> <SignInAndSignUp /> </RequireUnAuth>} />
        <Route path="*" element={<Navigate to="/404" />} />
        <Route path="/404" element={<h1>404 -Nothing to see here</h1>} />
      </Routes>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession()),
  closeNotification: () => dispatch(closeNotification()),
})
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  notificationState: selectNotificationState,
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
