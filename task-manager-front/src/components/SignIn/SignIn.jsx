import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import { TextField } from '@mui/material/';
import { connect } from 'react-redux';
import { signInStart } from '../../redux/user/user.actions';
import './SignIn.css';


const SignIn = ({ signInStart }) => {
    const [userCredentials, setCredentials] = useState({ username: '', password: '' });
    const { username, password } = userCredentials;

    const handleSubmit = async event => {
        event.preventDefault();
        signInStart(username, password);
    }

    const handleChange = event => {
        const { value, name } = event.target
        setCredentials(prevCredentials => ({ ...prevCredentials, [name]: value }))
    }

    return (
        <Paper elevation={24} className="sign-in" >
                <h2 className="title">Sign In</h2>
                <form onSubmit={handleSubmit}>
                    <TextField
                        required
                        name="username"
                        value={username}
                        onChange={handleChange}
                        id="login-username"
                        placeholder="username"
                        label="Username"
                    />
                    <TextField
                        required
                        name="password"
                        value={password}
                        onChange={handleChange}
                        type="password"
                        id="login-password"
                        label="Password"
                    />

                    <Button type="submit" variant="contained" size="large">
                        Login
                    </Button>
                </form>
        </Paper >
    )
}

const mapDispatchToProps = dispatch => ({
    signInStart: (username, password) => dispatch(signInStart({ username, password }))
})

export default connect(null, mapDispatchToProps)(SignIn)
