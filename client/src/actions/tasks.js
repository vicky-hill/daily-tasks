import api from '../utils/api';

import {
    GET_ALL_TASKS,
    GET_MY_TASKS,
    UPDATE_TASK,
    SAVE_TASK
} from './types';



/* ===================================
    Get my tasks
=================================== */

export const getMyTasks = () => async (dispatch, getState) => {
    try {

        const res = await api.get(`api/tasks/lastday/${getState().auth.id}`);
        
        dispatch({
            type: GET_MY_TASKS,
            payload: res.data
        })


    } catch (err) {
        console.log(err)
    }
}



/* ===================================
    Get all tasks
=================================== */

export const getAllTasks = () => async dispatch => {
    try {

        const res = await api.get(`api/tasks`);
        
        dispatch({
            type: GET_ALL_TASKS,
            payload: res.data
        })


    } catch (err) {
        console.log(err)
    }
}


/* ===================================
   Update task
=================================== */


export const updateTask = (id, data) => async dispatch => {
    try {

        if(!data.done) {
            data.done = false;
        }

        if(!data.inProgress) {
            data.inProgress = false;
        }

        if(!data.blocked) {
            data.blocked = false;
        }

        const res = await api.put(`/api/tasks/${id}`, data);
        
        dispatch({
            type: UPDATE_TASK,
            payload: {
                ...res.data,
            }
        })
    } catch (err) {
        console.log(err.message)
    }
}

/* ===================================
   Save task
=================================== */
export const saveTask = (name, user) => async dispatch => {
    try {
        const body = JSON.stringify({
            name, 
            user
        })

        const res = await api.post('/api/tasks', body);

        dispatch({
            type: SAVE_TASK,
            payload: res.data
        })

    } catch (err) {
        console.log(err)
    }
}

