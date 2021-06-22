import React, { useState, useEffect } from 'react';

import { connect } from 'react-redux';
import { login, getUser } from '../../actions/auth';

const Login = ({ history, isAuthenticated, user, login, getUser, id }) => {

    // Check user isn't logged out
    useEffect(() => {
        if (user !== 'loggedOut') {
            getUser();
        }

    }, [getUser, user, history]);

    // If logged in, redirect to home
    useEffect(() => {
        if (isAuthenticated && id === '60cf7e9dad140e7dbd26d6ab') {
            return history.push('/view');
        } 

        if(isAuthenticated) {
            history.push('/');
        }

    }, [isAuthenticated, history])

    // Form Data
    const [formData, setFormData] = useState({
        name: '',
        password: ''
    })

    const { name, password } = formData;

    const onChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const onSubmit = async e => {
        e.preventDefault();

        if (name === '' || password === '') {
            // validation
        }

        login(name, password);
    }

    return (
        <form className="w-25 mx-auto login-form" onSubmit={onSubmit}>

            <div className="mt-3">
                <label for="name">Name</label>
                <input name="name" value={name} onChange={onChange} type="text" className="form-control mb-3" id="name" />
            </div>

            <div className="mt-3">
                <label for="password">Password</label>
                <input name="password" value={password} onChange={onChange} type="password" className="form-control mb-3" id="password" />
            </div>

            <div className="d-grid gap-2 mt-5">
                <button type="submit" className="btn btn-primary btn-block">Submit</button>
            </div>
        </form>
    )
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user,
    id: state.auth.id
})

export default connect(mapStateToProps, { login, getUser })(Login);
