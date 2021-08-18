/* eslint-disable */
import api from '../utils/api';

import {
    GET_PROJECT_TASKS,
    GET_ALL_TASKS,
    GET_MY_TASKS,
    UPDATE_TASK,
    SAVE_TASK,
    GET_HIGH_PRIORITY
} from './types';

/* ===================================
   Get tasks from project
=================================== */

export const getProjectTasks = () => async dispatch => {
    try {
        const res = await api.get('api/tasks/project/' + '6117bf75bc4e01a0abbc545e');

        dispatch({
            type: GET_PROJECT_TASKS,
            payload: res.data
        })
    } catch (err) {
        console.log(err)
    }
}

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

        // If updating status, set all opposite status to false
        // if (data.done || data.inProgress || data.blocked) {
        //     if (!data.done) {
        //         data.done = false;
        //     }

        //     if (!data.inProgress) {
        //         data.inProgress = false;
        //     }

        //     if (!data.blocked) {
        //         data.blocked = false;
        //     }
        // }

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
export const saveTask = (name, project) => async dispatch => {

    try {
        const body = JSON.stringify({
            name,
            project
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

/* ===================================
   Get high priority tasks
=================================== */

export const getHighPriorityTasks = () => async dispatch => {
    
    dispatch({
        type: GET_HIGH_PRIORITY
    })
}