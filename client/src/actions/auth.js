/* eslint-disable */
import api from '../utils/api';

import {
    GET_USER,
    REGISTER_SUCCESS,
    LOGIN_SUCCESS, 
    LOGIN_CHECK
} from './types';



/* ===================================
   Login user
=================================== */

export const login = (name, password) => async dispatch => {

    const config = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({ name, password });

    try {

        const res = await api.post(`/api/auth/login`, body, config);
        
        
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        })


    } catch (err) {
        console.log(err)
    }
}


/* ===================================
   Login Check to prevent login flash  
=================================== */

export const loginCheck = () => async dispatch => {

    // Set loginCheck to true after one second
    setTimeout(function(){
        dispatch({
            type: LOGIN_CHECK
        })

    }, 1000);
}


/* ===================================
   Register
=================================== */

export const register = (name, password) => async dispatch => {
    try {
        const body = JSON.stringify({ name, password });

        const res = await api.post('/api/auth/register', body);

        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        })

    } catch (err) {
        console.log(err);
    }
}


/* ===================================
   Get User
=================================== */

export const getUser = () => async dispatch => {
    try {
        

        const res = await api.get('/api/auth');

        console.log(res.data.name);
        
        dispatch({
            type: GET_USER,
            payload: res.data
        })

    } catch (err) {
        console.log(err.message);
    }
}