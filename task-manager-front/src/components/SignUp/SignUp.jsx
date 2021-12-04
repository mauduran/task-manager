import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import { TextField } from '@mui/material/';
import { connect } from 'react-redux';
import { signUpStart } from '../../redux/user/user.actions';
import './SignUp.css';


const SignUp = ({ signUpStart }) => {
    const [userCredentials, setCredentials] = useState({ name: '', username: '', password: '' });
    const { name, username, password } = userCredentials;

    const handleSubmit = async event => {
        event.preventDefault();
        signUpStart(name, username, password);
    }

    const handleChange = event => {
        const { value, name } = event.target
        setCredentials(prevCredentials => ({ ...prevCredentials, [name]: value }))
    }

    return (
        <Paper elevation={24} className="sign-up">
            <h2 className="title">Register</h2>
            <form onSubmit={handleSubmit}>
                <TextField
                    required
                    name="name"
                    value={name}
                    onChange={handleChange}
                    id="login-name"
                    placeholder="name"
                    label="Name"
                />
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

                <Button type="submit" variant="contained" color="error" size="large">
                    Register
                </Button>
            </form>
        </Paper>
    )
}

const mapDispatchToProps = dispatch => ({
    signUpStart: (name, username, password) => dispatch(signUpStart({ name, username, password }))
})

export default connect(null, mapDispatchToProps)(SignUp);
