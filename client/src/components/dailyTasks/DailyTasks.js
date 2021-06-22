import React, { useEffect } from 'react';
import Task from './Task';
import { connect } from 'react-redux'
import { getMyTasks } from '../../actions/tasks';
import moment from 'moment';


function DailyTasks({ getMyTasks, myTasks, taskDate, loading }) {
    
    useEffect(() => {
        setTimeout(() => {
            getMyTasks();
        }, 500)
    }, [])

    const date = `${moment(taskDate).format('dddd')}, ${moment(taskDate).format("MMMM DD")}`

    console.log(date);

    return (
        <div className="justify-content-center">
            { !loading && <h1 className="daily-tasks">{ date }</h1> }

            {
                !loading && (
                    myTasks.map(task => (
                        <Task key={task._id} task={task}  wide />
                    ))
                )
            }


        </div>
    )
}

const mapStateToProps = (state) => ({
    myTasks: state.tasks.myTasks,
    taskDate: state.tasks.date,
    loading: state.tasks.loading
})

const mapDispatchToProps = {
    getMyTasks
}


export default connect(mapStateToProps, mapDispatchToProps)(DailyTasks);

