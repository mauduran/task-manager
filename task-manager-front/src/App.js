import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Route, Routes } from 'react-router-dom';

import './App.css';
import { checkUserSession } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';
import SignInAndSignUp from './containers/SignInAndSignUp/SignInAndSignUp';
import RequireAuth from './common/RequireAuth';
import RequireUnAuth from './common/RequireUnAuth';
import AppHeader from './components/AppHeader/AppHeader';
import Home from './containers/Home/Home';

function App({ checkUserSession, currentUser, signOut }) {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div className="App">
      <AppHeader/>

      <Routes>
        <Route path='/' element={<RequireAuth><Home/></RequireAuth>} />
        <Route path='/task/:id' element={<RequireAuth><h1>Task Detail</h1></RequireAuth>} />
        <Route exact path='/signin' element={<RequireUnAuth> <SignInAndSignUp /> </RequireUnAuth>} />
        <Route path="*" element={<h1>404 -Nothing to see here</h1>} />
      </Routes>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession()),
})
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
