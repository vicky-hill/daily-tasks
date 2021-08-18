/* eslint-disable */
import {
    GET_PROJECT_TASKS,
    GET_ALL_TASKS,
    GET_MY_TASKS,
    UPDATE_TASK,
    SAVE_TASK,
    GET_HIGH_PRIORITY
} from '../actions/types';

const initialState = {
    loading: true,
    allTasks: [],
    filteredTasks: [],
    project: ''
    // myTasks: [],
    // allTasks: [],
    // date: ''
}

export default function(state = initialState, action) {
    const { type, payload } = action;

    switch(type) {

        case GET_PROJECT_TASKS:
            return {
                ...state,
                project: payload[0].project,
                allTasks: payload,
                loading: false
            }

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
                allTasks: [payload, ...state.allTasks]
            }

        case UPDATE_TASK:
            return {
                ...state,
                allTasks: state.allTasks.map(task => {
                    if (task._id === payload._id) {
                        return payload;
                    }
                    return task;
                }), 
                filteredTasks: state.filteredTasks.map(task => {
                    if (task._id === payload._id) {
                        return payload;
                    }
                    return task;
                }), 
            }

        case GET_HIGH_PRIORITY:
            return {
                ...state,
                filteredTasks: state.allTasks.filter(task => {
                    if(task.priority === 'high' || task.rank !== null) {
                        return true
                    }
                    return false
                })
            }


        default:     
            return {
                ...state
            }
    }
}