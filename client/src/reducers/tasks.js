import {
    GET_ALL_TASKS,
    GET_MY_TASKS,
    UPDATE_TASK,
    SAVE_TASK
} from '../actions/types';

const initialState = {
    loading: true,
    myTasks: [],
    allTasks: [],
    date: ''
}

export default function(state = initialState, action) {
    const { type, payload } = action;

    switch(type) {

        case GET_MY_TASKS:  
            return {
                ...state,
                myTasks: payload.tasks,
                date: payload.date,
                loading: false
            }

        case GET_ALL_TASKS:  
            return {
                ...state,
                allTasks: payload.tasks,
                date: payload.date,
                loading: false
            }

        case SAVE_TASK:
            return {
                ...state,
                allTasks: {...state.allTasks, payload}
            }

        case UPDATE_TASK:
            return {
                ...state,
                myTasks: state.myTasks.map(task => {
                    if (task._id === payload._id) {
                        return payload;
                    }
                    return task;
                })
            }


        default:     
            return {
                ...state
            }
    }
}