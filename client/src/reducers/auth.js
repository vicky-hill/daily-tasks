/* eslint-disable */
import {
    GET_USER,
    LOGIN_SUCCESS,
    REGISTER_SUCCESS,
    LOGIN_CHECK
} from '../actions/types';

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: false,
    loading: true,
    loginCheck: false,
    user: {
        role: ''
    },
    id: null
}

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {

        case GET_USER:
            return {
                ...state,
                isAuthenticated: true,
                user: payload,
                id: payload._id
            }

        case LOGIN_CHECK:
            return {
                ...state,
                loginCheck: true
            }

        case LOGIN_SUCCESS:
        case REGISTER_SUCCESS:
            localStorage.setItem('token', payload.token);
            return {
                ...state,
                token: payload.token,
                isAuthenticated: true,
                loading: false,
                id: payload.id
            }

        default:
            return {
                ...state
            }
    }
}